---
title: Better way to upgrade node packages
date: 2019-10-09
tags:
  - yarn
  - til
---

I don't know how I missed this for months, but Yarn has `upgrade-interactive` command that opens list of all outdated packages and lets you pick which ones to update. Also, it will show colors based on [semantic version](https://semver.org/), red for major version (breaking changes), yellow for minor versions (features, backwards compatible) and green for bug fixes.

```bash
yarn upgrade-interactive --latest
```

Note that sometimes it can hang for a few seconds, just wait for it.

When it lists all packages you can move with `up/down arrow`, choose package with `space` and `enter/return` to start upgrade. Another useful command is `a` to toggle all.

As far as I know, npm (without plugins) doesn't have this feature.
