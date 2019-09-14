const visit = require('unist-util-visit')

const HEADER_TAGS = ['// lang', '// l', '# lang', '# l', ':l']

const LANG_WRAPPER_CLASS = 'gatsby-remark-code-language-wrapper'
const LANG_CLASS = 'gatsby-remark-code-language'

module.exports = function gatsbyRemarkCodeHeaders({ markdownAST }) {
  visit(markdownAST, 'code', (node, index, parent) => {
    const lines = node.value.split('\n')
    const headerLine = lines[0]
    const headerTag = HEADER_TAGS.filter(t =>
      headerLine.toLowerCase().startsWith(t)
    )[0]
    if (!headerTag) {
      // Ignore code blocks without a valid header line.
      return
    }

    // Build the header node.
    headerLine.slice(headerTag.length)

    const headerNode = {
      type: 'html',
      value: `
<div class="${LANG_WRAPPER_CLASS}"><p class="${LANG_CLASS} ${node.lang.toLowerCase()}">${
        node.lang
      }</p></div>
        `.trim()
    }

    // Insert the header node into the AST.
    parent.children.splice(index, 0, headerNode)

    // Remove the header comment line from the code.
    // eslint-disable-next-line no-param-reassign
    node.value = lines.slice(1).join('\n')
  })

  return markdownAST
}
