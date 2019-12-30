/*
--------------------------------------------------
name: Search
path: /js/search.js
--------------------------------------------------
*/

const search_box = document.getElementById('search')
const results = document.getElementById('results')

async function handle_search() {
  const { posts } = await fetch('/js/search.json').then(res => res.json())

  const options = {
    keys: ['title', 'category', 'url'],
  }

  const fuse = new Fuse(posts, options)

  const handle_search = (e, skip_validation) => {
    const query = e.target.value
    const old_query = search_box.getAttribute('data-query')

    if (query !== old_query || skip_validation) {
      search_box.setAttribute('data-query', query)

      const res = fuse.search(query).slice(0, 5)

      results.innerHTML = res
        .map(item => {
          const { title, url } = item
          return `<li class="result"><a href="${url}" tabindex="-1">${title}</a></li>`
        })
        .join('')

      if (results.children.length) results.firstChild.classList.add('selected')

      const results_arr = [...results.childNodes]
      results_arr.forEach(result => {
        result.addEventListener('mouseenter', () => {
          results_arr.forEach(result => result.classList.remove('selected'))
          result.classList.add('selected')
        })

        result.addEventListener('mouseleave', () => {
          if (results.parentElement.matches(':hover')) {
            result.classList.remove('selected')
          }
        })
      })

      if (query && !results.children.length) {
        results.innerHTML = `<li class="not_found">
            <div class="not_found_ascii">(·.·)</div>
            <div class="not_found_text">Oops, seems like there is no results.</div>
          </li>`
      }
    }
  }

  search_box.addEventListener('keyup', e => {
    handle_search(e)
  })

  search_box.addEventListener('focus', e => {
    handle_search(e, 'skip_validation')
  })

  search_box.addEventListener('blur', e => {
    const is_keyboard = e.explicitOriginalTarget === search_box

    if (!results.matches(':hover') || is_keyboard) {
      results.innerHTML = ''
    }
  })

  search_box.addEventListener('keydown', e => {
    const { keyCode, ctrlKey } = e

    const is_arrow_down = keyCode === 40
    const is_arrow_up = keyCode === 38
    const is_ctrl_j = keyCode === 74 && ctrlKey
    const is_ctrl_k = keyCode === 75 && ctrlKey
    const is_enter = keyCode === 13

    if (is_arrow_down || is_arrow_up || is_ctrl_j || is_ctrl_k) {
      e.preventDefault()
    }

    const selected = document.getElementsByClassName('selected')[0] || {}
    const next = selected.nextElementSibling
    const prev = selected.previousElementSibling

    if (next) {
      if (is_arrow_down || is_ctrl_j) {
        selected.classList.remove('selected')
        next.classList.add('selected')
      }
    }

    if (prev) {
      if (is_arrow_up || is_ctrl_k) {
        selected.classList.remove('selected')
        prev.classList.add('selected')
      }
    }

    if (is_enter) {
      selected.firstChild.click()
    }
  })

  // focus search box on '/'
  window.addEventListener('keydown', e => {
    if (e.keyCode === 191 && document.activeElement !== search_box) {
      e.preventDefault()
      search_box.focus()
    }
  })
}

handle_search()
