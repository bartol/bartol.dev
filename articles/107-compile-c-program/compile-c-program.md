---
title: Compile and run C program
date: 2019-11-20
tags:
  - c
  - til
---

For compiling C programs you'll have to use either
[gcc](https://gcc.gnu.org/) or [clang](https://clang.llvm.org/). Both
produce almost identical results so it doesn't really matter which one
you choose for exploring and hobby usage. This post will use `gcc`.

You most likely have `gcc` already installed. Try running this command
in terminal.

```sh
gcc --version
```

If you get command doesn't exist or similar error, try to install gcc
using [ guide from its website](https://gcc.gnu.org/install/).

```sh
gcc your_program.c
```

This will compile binary in same folder that you can actually run.

```sh
./your_program
```

Programs made from multiple files can also be compiled.

```sh
gcc file_1.c file_2.c file_3.c
```

Also, you can change name of compiled program with `-o` option.

```sh
gcc your_program.c -o another_name
```
