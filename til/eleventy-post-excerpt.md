# Eleventy post excerpt

_2020-04-25_

This is how you get post excerpt in eleventy using nunjucks.

```html
{{ post.templateContent | striptags(true) | truncate(280) }}
```

[source](https://github.com/11ty/eleventy/issues/410#issuecomment-465160346)
