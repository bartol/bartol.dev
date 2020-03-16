---
layout: post
title: Access server from any device in local network
date: 2020-03-12
---

You already know that you can access rails server on `localhost:3000` but what
if you want to try undeployed website on real mobile device? Rails comes to the
rescue once again.

You will need to start server with bind flag:

```bash
bin/rails server -b 0.0.0.0
```

Server is now accessible from `local_ip_of_your_machine:3000`. You can find
local ip in your device or router settings.

However, if you run into error, Rails won't display error page. To enable it
you'll have to add this to your `config/environments/development.rb`.

```ruby
config.web_console.whitelisted_ips = %w( 0.0.0.0/0 ::/0 )
```
