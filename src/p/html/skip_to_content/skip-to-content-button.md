---
title: Skip to content button
date: 2019-10-14
tags:
  - html
  - css
  - accessibility
  - til
---

Skip to content buttons might seem a bit pointless at first but your users that navigate site with keyboard will love it. You most likely have some form of navigation on your page. Users who need to get to main content will have to hit tab like 10 or more times on every page. Not really most interesting thing to do on website.

All you need to add to your existing source code is button and some basic styles. Place button as high as you can in HTML `body`.

```jsx
<button
  type='button'
  className='skipToContent'
  onClick={() => document.getElementById('content').focus()}
>
  Skip to content
</button>
```

When button is clicked you can use native JavaScript dom manipulation to focus element with content (or first item in list for example).

After that you'll need some styles to hide element for normal users and show it for keyboard users.

```css
.skipToContent {
  transform: translateY(-500px);
}

.skipToContent:focus {
  transform: translateY(0);
}
```
