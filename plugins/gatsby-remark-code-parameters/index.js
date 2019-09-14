const visit = require('unist-util-visit')

const HEADER_TAGS = ['// title: ', '# title: '].map(s => s.toLowerCase())

const PARAMETERS_CLASS = 'gatsby-remark-code-parameters'
const TITLE_CLASS = 'gatsby-remark-code-title'
const LANG_CLASS = 'gatsby-remark-code-language'

module.exports = function gatsbyRemarkCodeHeaders({ markdownAST }) {
  visit(markdownAST, 'code', (node, index) => {
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
    const header = headerLine.slice(headerTag.length)
    const headerNode = {
      type: 'html',
      value: `
<div class="${PARAMETERS_CLASS}"><p class="${TITLE_CLASS}">${header}</p><p class="${LANG_CLASS} ${node.lang.toLowerCase()}">${
        node.lang
      }</p></div>
        `.trim()
    }

    // Insert the header node into the AST.
    markdownAST.children.splice(index, 0, headerNode)

    // Remove the header comment line from the code.
    // eslint-disable-next-line no-param-reassign
    node.value = lines.slice(1).join('\n')
  })

  return markdownAST
}
