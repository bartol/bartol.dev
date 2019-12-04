const search_box = document.getElementById('search')
const results = document.getElementById('results')

async function handle_search() {
    const { posts } = await fetch('/js/search.json').then(res => res.json())
    console.log('posts:', posts)

    search_box.addEventListener('keyup', e => {
        const query = e.target.value
        console.log('query:', query)
    })
}

handle_search()
