---
title: Building social media image generator — Part 0
date: 2019-10-02
tags:
  - lambda
  - series
---

You know these images that pop up when you share websites on social media, right? They are nice and more engaging than text, but have one major drawback. It's hard to make new image for every article you make (especially if you post every day), so I just make one image and set it for all pages. There must be a better way. Enter serverless social media generator...

## Inspiration

This idea came from Zeit's [og-image](https://og-image.now.sh/) project. And while I really like this project, I find it really lacking in features. So I decided to build my own, more feature-rich, project. Also, I'll make articles on my progress along the way!

## Goal

- Very customizable social image generator
- Make it cheap (free)
- Make it fast (under 5 seconds)

## How I think to implement it?

Well, I have already peaked in [og-image](https://og-image.now.sh/) source code and there is no need to reinvent the wheel, so I'll just base my solution on theirs.

Implementation as simple as possible:

1. Get data and process it
2. Generate HTML file from data
3. Spin up headless chromium with puppeteer and screenshot it
4. Respond to request with screenshot

Did I mention that it will run on AWS lambda?

## Other parts in this series

// TODO: _future articles will be linked here_
