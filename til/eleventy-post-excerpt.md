---
layout: post
title: Eleventy post excerpt
date: 2020-04-25
tags:
  - eleventy
  - nunjucks
templateEngineOverride: md
---

This is how you get post excerpt in eleventy using nunjucks.

```html
{{ post.templateContent | striptags(true) | truncate(280) }}
```

[source](https://github.com/11ty/eleventy/issues/410#issuecomment-465160346)
