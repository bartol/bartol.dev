const { readdirSync } = require('fs')

function getAllCollections(dir) {
  const content = readdirSync(dir, { withFileTypes: true })
    .filter(
      dir =>
        dir.isDirectory() &&
        dir.name !== 'node_modules' &&
        !dir.name.startsWith('_') &&
        !dir.name.startsWith('.')
    )
    .map(dir => dir.name)

  if (content.length) {
    collections.push({
      path: dir,
      name:
        dir
          .split('/')
          .slice(1)
          .join('_') || 'root',
      content: content.map(e => dir + '/' + e),
    })
    content.forEach(path => {
      getAllCollections(dir + '/' + path)
    })
  }
}

const collections = []
getAllCollections('.')

console.log(collections)
