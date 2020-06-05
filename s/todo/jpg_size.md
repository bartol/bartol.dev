---
layout: post
title: Calculate uncompressed JPG image size
date: 2019-10-03
---

I have yesterday found out this cool thing by reading some random article on the internet, so I thought I'd share it. Calculating size of uncompressed jpg is as easy as multiplying image width, height (in px) and number 3. Why 3 you may ask? It's because 3 bytes are equivalent to 24 bits (size of RGB color). Current result will be in bytes so you can easily convert it to megabytes by dividing with `1048576 (1024 × 1024)`.

```text
size = (width × height × 3) / 1048576
```
