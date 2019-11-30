---
layout: post
title: GitHub Actions CI
---

What? Another CI service? Don't we already have Travis CI, Circle CI and others? Well yes, there is no particular need for new service in that area. It's already pretty crowded. But GitHub Actions have an advantage. Most of the code that I am working on is already up on GitHub. Why not do CI there also.

Price is also pretty good. It's completely free currently, while in beta and when beta finishes, it will still be free for public repositories. For private repositories you'll get 2000 free minutes and price will scale from that.

So, lets start. Create `.github` directory in root of your project and `workflows` directory in it. Inside workflows create [yaml](https://en.wikipedia.org/wiki/YAML) file which will contain some instructions for actions, lets call it `test.yml`. On the first line add action name.

```yaml
name: test
```

After that add when should action run. In this example it will run when you push to repository.

```yaml
on: [push]
```

Here comes the fun part. Jobs section. Specify on which platform to run action. Make sure that indentation is correct. Yaml will break if it isn't.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
```

Then, on same level as `runs-on` add `steps`. In steps, we'll define which node version to use and checkout. Checkout is used to allow workflow to access the contents of your repository.

```yaml
steps:
  - uses: actions/checkout@v1
  - uses: actions/setup-node@v1
    with:
      node-version: '10.x'
```

And last thing you should to do is add at least one `run` parameter to steps (in same level as `- uses`). These can be used to install dependencies and run any commands like tests.

```yaml
- run: npm i
- run: npm run test
```

And that is it! I hope that you learned something about GitHub Actions and that you'll make use of it.
