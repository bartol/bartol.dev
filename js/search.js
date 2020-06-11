const el = {
  list: document.querySelectorAll("li a"),
  input: document.getElementById("input"),
  count: document.getElementById("count"),
};
const qs = new URLSearchParams(location.search);
const markjs = new Mark(el.list);

el.count.innerText = el.list.length;
el.input.value = qs.get("q");
el.input.value && search(el.input.value);

input.addEventListener("keyup", (e) => {
  search(e.target.value);
});

function search(query) {
  markjs.unmark();
  markjs.mark(query, {
    separateWordSearch: false,
  });

  let count = 0;
  [...el.list].forEach((e) => {
    if (e.innerText.toLowerCase().includes(query.toLowerCase())) {
      e.parentElement.classList.remove("notmatch");
      count++;
    } else {
      e.parentElement.classList.add("notmatch");
    }
  });
  el.count.innerText = count;

  qs.set("q", query);
  const newURL = location.href.split("?")[0] + "?" + qs.toString();
  window.history.replaceState(null, "", newURL);
}
