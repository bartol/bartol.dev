const search_box = document.getElementById('search')
const results = document.getElementById('results')

async function handle_search() {
  const { posts } = await fetch('/js/search.json').then(res => res.json())

  const options = {
    keys: ['title', 'category', 'url'],
  }

  const fuse = new Fuse(posts, options)

  search_box.addEventListener('keyup', e => {
    const query = e.target.value
    const res = fuse.search(query).slice(0, 5)

    results.innerHTML = res
      .map(item => {
        const { title, category, url } = item
        return `<li class="result ${category}"><a href="${url}">${title}</a></li>`
      })
      .join('')
  })
}

handle_search()
