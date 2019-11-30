---
layout: post
title: Please use process manager to run Node.js apps on server
---

Long story short. I have made script for scraping some stuff and put it on the DigitalOcean droplet and as I had problems with crashing (\*cough poorly written code), I have found this process manager called [PM2](http://pm2.keymetrics.io/) (Process Manager 2). Heard about it long time but never got to use one. Oh, boy! It's awesome.

## Installation

Like any other npm module.

```bash
npm i pm2 -g
```

## Basic usage

1. Start a process

```bash
pm2 start app.js --name "your_app_name"
# next time start app with
pm2 start your_app_name
```

2. Stop a process

```bash
pm2 stop your_app_name
```

3. Delete a process

```bash
pm2 delete your_app_name
```

You can also use `all` instead of app name to do operation on all processes

## Monitoring

See list of all running processes.

```bash
pm2 list
```

View dashboard with live info from processes.

```bash
pm2 monit   # this is not a typo
```

## Parameters

You can pass argument to pm2 to enhance your experience.

Pass arguments to your app.

```bash
-- arg1 arg2 arg3
```

Save console logs to file.

```bash
--log path/to/file
# you can also prefix logs with time if you add --time
```

Restart app on file change.

```bash
--watch
```

Restart when app reaches memory limit.

```bash
--max-memory-restart 750M
```

Restart on [cron](https://en.wikipedia.org/wiki/Cron) job.

```bash
--cron cron_pattern
```
