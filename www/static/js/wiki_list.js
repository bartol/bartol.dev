const inputEl = document.querySelector(".input");
const resultsEl = document.querySelector(".results");
const treeEl = document.querySelector(".tree");

const posts = [];
document.querySelectorAll(".tree a").forEach((a) => {
  posts.push({ title: fuzzysort.prepare(a.innerText), path: a.href });
});

const cache = {};
const cacheChars = "abcdefghijklmnopqrstuvwxyz ";
let cachePromise, cacheCanceled, startms;

const options = {
  key: "title",
  threshold: -10000,
};

function getQuery() {
  return inputEl.value.toLowerCase();
}

cacheNextLevel();
inputEl.addEventListener("keyup", () => {
  const query = getQuery();
  treeEl.style.display = !query ? "block" : "none";
  resultsEl.style.display = query ? "block" : "none";
  if (cachePromise) cachePromise.cancel();
  cacheCanceled = true;
  startms = Date.now();
  if (cache[query]) renderCache(cache[query]);
  else renderResults(fuzzysort.go(query, posts, options));
  cacheNextLevel();
});

function cacheNextLevel(nextIndex = 0) {
  setTimeout(function () {
    if (nextIndex === cacheChars.length) return;
    const nextQuery = getQuery() + cacheChars[nextIndex];
    if (cache[nextQuery]) return cacheNextLevel(nextIndex + 1);
    if (nextIndex === 0) cacheCanceled = false;
    cachePromise = fuzzysort.goAsync(nextQuery, posts, options);
    cachePromise.then((results) => {
      cache[nextQuery] = { total: results.total, html: resultsToHtml(results) };
      if (!cacheCanceled) cacheNextLevel(nextIndex + 1);
    });
  });
}

function resultsToHtml(results) {
  let html = "";
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    html += `<li><a href="${result.obj.path}">${fuzzysort.highlight(result)}</a></li>`;
  }
  return html;
}

function renderResults(results) {
  const duration = Date.now() - startms;
  const header = `<p>${results.total} matches in ${duration}ms</p>`;
  const html = resultsToHtml(results);
  cache[getQuery()] = { total: results.total, html };
  resultsEl.innerHTML = header + html;
}

function renderCache(cached) {
  const duration = Date.now() - startms;
  const header = `<p>${cached.total} matches in ${duration}ms (cached)</p>`;
  resultsEl.innerHTML = header + cached.html;
}
