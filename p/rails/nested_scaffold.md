---
layout: post
title: Nested scaffold
date: 2020-03-07
---

Scaffolds are used in Rails to generate CRUD API.

```bash
rails generate scaffold user name:string
```

This example creates returns all users at `/users`, one user at `/users/:id`...

If you want to create them with `/admin` prefix there are 2 options.

## 1. Namespace

```bash
rails generate scaffold admin/user name:string
```

Note that this creates table `admin_users` which may not be desirable.

## 2. Scope

Open `config/routes.rb`

```ruby
scope '/admin' do
  resources :users
end
```
