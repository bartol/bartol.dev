---
layout: post
title: Symbolic constants in C
date: 2019-09-22
---

Symbolic constants in C are values that will never change. Why not just use variables you might ask?

Answer from Stack Overflow explains this much better than me, so I'll just quote it here.

> The compiler knows that symbolic constants won't change. It substitutes the value for the constant at compile time. If the constant is in a variable, it usually can't figure out that the variable will never change value. In consequence, the compiled code has to read the value from the memory allocated to the variable, which can make the program slightly slower and larger.

Also, you gotta admit that `#define` statements look super cool!

They are usually defined on top of file, after `#include` statements, are all uppercase and have this form.

```c
#define NAME value
```

After that you can use them as you would normal variables.
