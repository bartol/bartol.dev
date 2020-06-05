---
layout: post
title: Methods
date: 2019-11-02
---

Quick aside. After writing about common HTTP status codes the other day, I figured out that I should also write about common methods and headers. So here is methods part.

Methods **indicate action** that should be performed on resource.

## GET

Requests specified resource. It should only retrieve data.

## POST

Submits data to server. Often causing side effects like saving to database or similar.

## PUT

Updates specified resource with data from request.

## DELETE

Deletes specified resource.

## HEAD

Same as GET, just response doesn't contain body.

There are others, but they are almost never used. You can learn about them on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).
Also, there are new server architectures like [GraphQL](https://graphql.org/) that use POST for everything. Seems like HTTP methods will be less and less important in the future. We'll see!
