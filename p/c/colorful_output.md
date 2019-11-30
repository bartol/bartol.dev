---
layout: post
title: Colorful printf output in C
---

Ehh, default output is plain and boring. Why not spice it up with some colors!

All you need to do is prefix text with color code like `\x1b[36m` for cyan.

```c
#include <stdio.h>

int main () {

  printf("Hey \x1b[36mcyan!\033[0m And this text is reseted to default color.");

  return 0;
}
```

This example will produce output:

![output](/img/md/output.png)

Here is table of different ANSI colors you can use.

```c
RED       |   "\x1b[31m"
GREEN     |   "\x1b[32m"
YELLOW    |   "\x1b[33m"
BLUE      |   "\x1b[34m"
MAGENTA   |   "\x1b[35m"
CYAN      |   "\x1b[36m"
RESET     |   "\x1b[0m"
```

Enjoy your colorful output!
