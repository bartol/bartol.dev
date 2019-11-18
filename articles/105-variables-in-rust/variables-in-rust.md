---
title: Variables in Rust
date: 2019-11-18
tags:
  - rust
  - til
---

I've recently started learning rust and reading "Rust the programming
language" book, so I wanted to share some useful things from it.

To declare variable you'll need to use `let` keyword. Because Rust is
statically typed language, compiler must know types of all variables at
compile time. You can specify types manually, but you don't need to
because Rust can figure them out by itself most of the time.

```rust
let number = 2;
```

## Mutability

By default all variables in Rust are **immutable**. If you try to
reassign them, compiler will throw an error.

```rust
number = 3;
```

But if you add `mut` keyword to variable declaration, it'll become
mutable and previous expression will be valid.

```rust
let mut number = 2;
```

## Shadowing

In Rust you can declare new variable with same name that will shadow the
old one. Once you think about it, how is this different from just using
mutable variable?

Mutable variables must have same type and these can but don't need to.

```rust
let number = false;
```
