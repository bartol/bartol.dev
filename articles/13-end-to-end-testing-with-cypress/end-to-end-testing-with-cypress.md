---
title: End to End testing with Cypress
date: 2019-08-18
tags:
  - cypress
  - testing
  - guide
---

"What is End to End or E2E testing?", you may ask. It sounds fairly complicated. Don't judge a book by its cover. It is basically robot that opens browser and runs tests on website.

And [Cypress](https://www.cypress.io/) is just that robot. It's built with [Electron](https://electronjs.org/) and it uses [Mocha](https://mochajs.org/) testing framework and [Chromium](https://www.chromium.org/) to run tests.

End to End tests are very effective because they provide great testing value and are easy to setup.

## Cypress setup

Let's start with installing Cypress as dev dependency.

```terminal
yarn add -D cypress
```

While Cypress is installing add `cy:open` to list of scripts in your projects's `package.json`.

```json
...
"scripts": {
  ...
  "cy:open": "cypress open"
  ...
}
...
```

To start it you need is to run script that we added in previous step.

```terminal
yarn cy:open
```

Then click "Ok, got it" and "Run all specs" in top right.

Cypress cool demo will start. You can watch it.

Next thing we'll have to do is make our own tests. This process will start with configuration. This is decent starting config you can copy to your `cypress.json` in root directory of your project.

```json
{
  "baseUrl": "http://localhost:8000",
  "integrationFolder": "cypress/e2e" // optional
}
```

There are few more optional _cleanup things to do._

1. Open cypress folder.
2. If you changed integration folder in config, delete `integration` and make new folder with name you specified in Cypress config.
3. Delete `fixtures` and `screenshots` folders. We won't need them.
4. If you enabled "[argsIgnorePattern](https://eslint.org/docs/rules/no-unused-vars#argsignorepattern)" feature of ESLint, open `index.js` in plugins directory and add underscore to start of params so ESLint doesn't complain. (like this `... (_firstparam, _secondparam) {...` )

Let's do some testing already!

## Actual testing

But wait! You first need to first install [cypress testing library](https://www.npmjs.com/package/@testing-library/cypress).

```bash
yarn add -D @testing-library/cypress
```

Then import it in `cypress/support/commands.js` file.

```js
import '@testing-library/cypress/add-commands'
```

Now we are ready for testing. We will make one smoke test as an example.

What? Smoke test??? [You can read more about it here.](<https://en.wikipedia.org/wiki/Smoke_testing_(software)>)

TLDR: high level overview if everything is working alright.

Create `smoke.js` in your `cypress/integration/` folder (or custom one if you specified it in config), populate it with following snippet and tweak for you website.

```js
describe('app', () => {
  it('works', () => {
    cy.visit('/')
      .getByText(/Undo last Git commit/i)
      .click()
      .getByText(/git push origin -f/i)
  })
})
```

This will open your website and click element with text "Undo last Git commit" (regex will match every every casing of words). It will throw an error if it cant find "git push origin -f" text after click.

Now you can run your tests with `cy:open` and see them passing, or failing ☹️.

If ESLint is throwing errors in your Cypress test file read [this](https://bartol.dev/blog/fix-cypress-tests-eslint-errors) article...

### Resources

- [Learn With Jason: How to write tests for your Gatsby sites and apps with Kent C. Dodds](https://youtu.be/BzRAYt7BHRw?t=1313)
