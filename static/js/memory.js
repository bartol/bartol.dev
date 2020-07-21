const input = document.querySelector(".input");
const results = document.querySelector(".results");
const tree = document.querySelector(".tree");
const posts = [];
document.querySelectorAll(".tree a").forEach((a) => {
  posts.push({ title: fuzzysort.prepare(a.innerText), path: a.href });
});

const options = {
  key: "title",
  threshold: -10000,
  limit: 20,
};

input.addEventListener("keyup", (e) => {
  tree.style.display = input.value ? "none" : "block";
  results.innerHTML = "";
  fuzzysort.go(input.value, posts, options).forEach((r) => {
    results.innerHTML += `<li><a href="${r.obj.path}">${fuzzysort.highlight(r)}</a></li>`;
  });
});
