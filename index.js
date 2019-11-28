const { readdirSync , writeFile} = require('fs')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const START_DIRECTORY = 'pages'


const getAllCollections = (dir, level = 0) => {
    const content =
  readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

    if(content.length) {
        arr.push({
            path: dir,
            name: dir.split('/').slice(2).join('_') || 'root',
            content: content.map(e => dir + '/' +  e),
        })
        level++
        content.forEach(path => {
            getAllCollections(dir + '/' + path, level)
        })
    }
}

const arr = []
getAllCollections('./pages')

writeFile('sitemap.json', JSON.stringify(arr, null, 2), (data, err) => {
    console.log(err)
})

console.log(arr)
