---
layout: post
title: Default font stack 
date: 2019-10-31
---

You have probably heard something about the so-called default font stack. It is getting much more popular lately with companies like GitHub and Medium using it. It is basically long list of default operating system fonts. But why should you care?

Well, speed. You don't have to download them. No need for request to Google Fonts, they are already on the machine. Also, users will already be familiar with font because they are looking at it throughout the system.

But default font stack isn't perfect by any means. Mainly, you lose consistency. Every platform will see different font. While similar they aren't the same.

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
```

For example, new Apple font, San Francisco (which is awesome btw), will be used on Mac system while Segoe UI will be used on computer running Windows.
