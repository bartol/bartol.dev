---
layout: post
title: Oversaturated colors in Firefox
date: 2019-11-19
---

Switching to Firefox last month was overall very positive experience
(more on that in one of the next posts), but immediately after switching
I've noticed that colors were oversaturated. It was annoying but I got
used to it. Today, I've found
[this](https://bugzilla.mozilla.org/show_bug.cgi?id=1250461) Bugzilla
issue that contains fix!

All you need to do is open `about:config` in your browser, accept
warning and change few settings.

- `gfx.color_management.display_profile` make sure this one is empty
- `gfx.color_management.enablev4` set value to `true`
- `gfx.color_management.mode` set value to `1`
- `gfx.color_management.rendering_intent` set value to `0`

And that is it. Restart browser if needed and your colors should be
better now.
