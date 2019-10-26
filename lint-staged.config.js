module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint', // lint JavaScript and TypeScript
  ],
  '*.{js,jsx,json,yml,yaml,css,less,scss,ts,tsx,md,mdx,graphql}': [
    'prettier --write', // run prettier and fix errors
    'git add', // add fixed files to next commit
  ],
}
