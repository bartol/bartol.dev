---
layout: post
title: How to use Curl
date: 2019-11-14
---

Curl (Client URL) is command line tool used for transferring data using
protocols like http, ftp or smtp. I mostly use it for quick testing of APIs.
Curl has a lot of options but I'll go through most used ones.

Curl is probably already installed on your system. Check it by running:

```bash
curl --version
```

If this command doesn't return version, install it from its [download
page](https://curl.haxx.se/download.html).

## HTTP

- `-X POST` - specify preferred http method
- `-H "Content-Type: application/json"` - add headers to request
- `-b "NAME=VALUE"` - add cookie to request
- `-c /path/to/cookie` - save cookie to file
- `-d '{"key": "data"}` - data for POST request
- `-I` - return only headers

## General

- `-o /path/to/file` - write output to file
- `-O` - write output to new file in current directory
- `-v` - provide more informations
- `-#` - display progress bar
- `-f` - fail silently
- `-k` - allow insecure connections

SPLIT