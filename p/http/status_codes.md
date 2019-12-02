---
layout: post
title: Common HTTP status codes
date: 2019-10-30
---

These are some of the most common HTTP codes that everyone working or building servers should know. Here is high level meaning of codes. I'll go more in depth later.

- 1xx - Informational
- 2xx - Success
- 3xx - Redirect
- 4xx - Client Error
- 5xx - Server Error

## 2xx

### 200 OK

The most common HTTP code, indicates success of request. Response may vary based on request method used.

### 201 Created

Means that request to create resource has been fulfilled.

## 3xx

### 301 Moved Permanently

This and all future request should be redirected to given URL.

### 303 See Other

When received as response from POST (or similar) request, client presumes that request was successful and redirects to given URL (using GET method).

### 307 Temporary Redirect

This request should be redirected to given URL but future requests should still use original URL.

## 4xx

### 400 Bad Request

Request can't be processed because of invalid request syntax, size, ...

### 403 Forbidden

Request is valid but server refuses action due to lack of necessary permissions for resource or invalid credentials. The request should not be repeated.

### 404 Not Found

The requested resource could not be found.

### 429 Too Many Requests

Used for rate limiting. User has sent too many requests in a given amount of time.

## 5xx

### 500 Internal Server Error

Generic error message that indicates error in request processing on server side.

### 503 Service Unavailable

Server cannot handle request due to overload or maintenance. Usually temporary.

There are much more status codes available, especially 4xx for all kinds of specific needs. I encourage you to learn more on [Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
