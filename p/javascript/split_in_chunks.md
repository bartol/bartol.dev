---
layout: post
title: Split array in chunks
---

I was working on some scraping stuff for the past few days and today I had to dump data in Airtable base. To my surprise, Airtable API only accepts 10 records per request (free tier). Then I reached out to my google fu skills and found, as you probably guesses by now, Stack Overflow answer. I have modified it a bit and it works perfectly.

```js
const chunk = 2
for (let i = 0; i < array.length; i += chunk) {
  const chunkOfArray = array.slice(i, i + chunk)

  // use it
}
```

<!-- resources:
  - name: Stack Overflow Answer
    url: https://stackoverflow.com/a/8495740 -->
