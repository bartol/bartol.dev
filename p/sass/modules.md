---
layout: post
title: Sass modules
date: 2019-10-22
---

Well, everything in 2019 has modules, and Sass is not an exception. Introduced earlier this month, Sass modules are big addition to Sass in general after long feature freeze and stagnation in recent years.

Modules are supported only in Dart Sass (version 1.23) at the time of writing.

## Why should you care?

Simple and clear, if you are using Sass, this will give you useful functions out of the box and will be great addition to your toolkit.

## Show, don't tell

Modules can be imported with the `@use` keyword and all built-in module names start with `sass:`.

```scss
@use "sass:math";
```

After that you can access things from it using dot separated syntax. It's very similar to JavaScript so you'll most likely be in well known territory.

```scss
width: button.$width                                  // access variable
color: color.adjust(#1ac4e6, $red: -10, $blue: 10);   // call a function
```

This was just high-level overview of feature. If it sparks joy to you, be sure to visit links in resources.

## Compelling reason to switch?

As always, it depends. For me answer is no. I am already moved from Sass world and heavily invested in CSS in JS type solutions for its many benefits. But I have to say this is really cool stuff.

## Resources:

- [Much more in-depth article on CSS-Tricks](https://css-tricks.com/introducing-sass-modules/)
- [Sass modules docs](https://sass-lang.com/documentation/modules)
