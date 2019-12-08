<a href="https://bartol.dev">
  <img alt="Bartol's logo" src="https://bartol.dev/img/logo.svg" align="right" width="200" height="205" />
</a>

# [bartol.dev](https://bartol.dev)

Personal cyberspace where you can find my thoughts and notes about web development.

[![Actions Status](https://github.com/bartol/bartol.dev/workflows/build/badge.svg)](https://github.com/bartol/bartol.dev/actions)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f87ba513-159f-4d19-81a3-1dd06e9ec817/deploy-status)](https://app.netlify.com/sites/bartol/deploys)

## Navigate project

- Directory names same as routes on website.

| Posts about                          |  Directory   |
| ------------------------------------ | :----------: |
| [Programming](https://bartol.dev/p/) |  [p/](./p/)  |
| [Me](https://bartol.dev/me/)         | [me/](./me/) |

<!--| [Electronics](https://bartol.dev/e/) |  [e/](./e/)  |-->
<!--| [Cooking](https://bartol.dev/c/)     |  [c/](./c/)  |-->

## Run locally

1. Install dependencies.

   ```
   yarn
   ```

2. Start development environment.

   ```
   yarn dev
   ```

   Navigate to `localhost:8080` in browser of your choice.

3. Generate static site.

   ```
   yarn prod
   ```

## Tech stack

- [Eleventy](https://www.11ty.io/) - static site generator
- [Fuse.js](https://fusejs.io/) - client side search
- [Prism.js](https://prismjs.com/) - syntax highlighting
