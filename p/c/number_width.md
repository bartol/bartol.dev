---
layout: post
title: Set character width of number in C
---

I have recently found out that you can set width of number in C. This can be really useful for aligning numbers if they don't have same width. All you need to do is add number of characters between `%` and `d` (for int) in `printf` statement.

Here is working example.

```c
#include <stdio.h>

int main () {
  int oneNumber = 31415, otherNumber = 24;

  printf("%5d\n", oneNumber);
  printf("%5d\n", otherNumber);

  return 0;
}
```

Which will produce this output.

```bash
./a.out
31415
   24
```
