---
layout: post
title: Convert Celsius temperature to Fahrenheit
date: 2019-10-20
---

This is very simple JavaScript function you can use to convert Celsius temperature to Fahrenheit. It accepts Celsius temperature parameter as a number and returns Fahrenheit temperature, also, as a number.

```js
const celsiusToFahrenheit = celsius => {
  return (celsius * 9) / 5 + 32
}
```

And here is result of this example.

```js
celsiusToFahrenheit(15)
// output: 59
```
