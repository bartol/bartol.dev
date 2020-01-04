---
layout: post
title: Float fraction digits
date: 2019-09-17
---

All you really need to do is add `.2` (for 2 fraction digits) between `%` and `f` in `printf` function.

Here is working example:

```c
#include <stdio.h>

int main () {
  float pi;

  pi = 3.1415;

  printf("Pi: %.2f", pi);

  return 0;
}
```

That's all there is to it!
