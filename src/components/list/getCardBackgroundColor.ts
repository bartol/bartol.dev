// eslint-disable-next-line consistent-return
export const getCardBackgroundColor = (name: string) => {
  // eslint-disable-next-line default-case
  switch (name) {
    case 'javascript':
      return '#c8b011'
    case 'react':
      return '#05a1cb'
    case 'gatsby':
      return '#552a80'
    case 'lambda':
      return '#e05b1e'
    case 'redux':
      return '#4c2e7c'
    case 'c':
      return '#03599C'
    case 'dynamodb':
      return '#443cd3'
    case 'serverless':
      return '#a2140e'
    case 'git':
      return '#ae2809'
    case 'vscode':
      return '#00416d'
    case 'algolia':
      return '#5468ff'
    case 'html':
      return '#bd3917'
    case 'css':
      return '#105b91'
    case 'apollo':
      return '#290aa0'
    case 'sass':
      return '#882e5b'
    case 'eslint':
      return '#2d1d75'
    case 'jest':
      return '#9b0f1d'
    case 'cypress':
      return '#303032'
    case 'fonts':
      return '#ff8585'
    case 'error':
      return '#951613'
  }
}
