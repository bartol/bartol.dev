const search_box = document.getElementById('search')
const results = document.getElementById('results')

async function handle_search() {
  const { posts } = await fetch('/js/search.json').then(res => res.json())

  const options = {
    keys: ['title', 'category', 'url'],
  }

  const fuse = new Fuse(posts, options)

  const search = e => {
    const query = e.target.value
    const old_query = search_box.getAttribute('data-query')

    if (query !== old_query) {
      search_box.setAttribute('data-query', query)

      const res = fuse.search(query).slice(0, 5)

      results.innerHTML = res
        .map(item => {
          const { title, category, url } = item
          return `<li class="result ${category}"><a href="${url}">${title}</a></li>`
        })
        .join('')

      if (results.children.length) results.firstChild.classList.add('selected')
    }
  }

  search_box.addEventListener('focus', e => {
    if (results.children.length) {
      results.classList.remove('hidden')
      return
    }

    if (e.target.value) search(e)
  })

  search_box.addEventListener('blur', () => {
    if (results.children.length) {
      results.classList.add('hidden')
    }
  })

  search_box.addEventListener('keyup', e => {
    search(e)
  })
}

handle_search()

window.addEventListener('keyup', e => {
  const { keyCode, shiftKey, ctrlKey } = e

  const is_tab = keyCode === 9 && !shiftKey
  const is_shift_tab = keyCode === 9 && shiftKey
  const is_arrow_down = keyCode === 40
  const is_arrow_up = keyCode === 38
  const is_ctrl_j = keyCode === 74 && ctrlKey
  const is_ctrl_k = keyCode === 75 && ctrlKey
  const is_enter = keyCode === 13

  const selected = document.getElementsByClassName('selected')[0] || {}
  const next = selected.nextElementSibling
  const prev = selected.previousElementSibling

  if (next) {
    if (is_tab || is_arrow_down || is_ctrl_j) {
      selected.classList.remove('selected')
      next.classList.add('selected')
      search_box.focus()
    }
  }

  if (prev) {
    if (is_shift_tab || is_arrow_up || is_ctrl_k) {
      selected.classList.remove('selected')
      prev.classList.add('selected')
      search_box.focus()
    }
  }

  if (is_enter) {
    selected.firstChild.click()
  }
})
