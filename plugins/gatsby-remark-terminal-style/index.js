const visit = require('unist-util-visit')

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'code', (node, index, parent) => {
    if (node.lang !== 'sh') return

    const terminalNode = {
      type: 'html',
      value: `
<div class="terminalHeader">
  <span class="red transition-slow"></span>
  <span class="yellow transition-slow"></span>
  <span class="green transition-slow"></span>
</div>
        `.trim(),
    }

    parent.children.splice(index, 0, terminalNode)

    // eslint-disable-next-line no-param-reassign
    node.lang = 'bash'
  })

  return markdownAST
}
