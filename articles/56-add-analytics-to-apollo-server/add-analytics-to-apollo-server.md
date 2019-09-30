---
title: Add analytics to Apollo server
date: 2019-09-30
tags:
  - apollo
  - til
---

Adding analytics to Apollo Server is a great way to monitor its performance and spot weak points of it (slow queries, ...).

First thing you have to do is visit [Apollo Engine](https://engine.apollographql.com/) website and register for an account. After successfully registering, you will be presented with few easy steps to get your API key.

After you have API key, just insert `engine` property on Apollo Server as object with property `apiKey` that will contain API key.

```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: 'YOUR API KEY HERE',
  },
})
```

Note that it is recommended to store your API keys in [environment variables](https://en.wikipedia.org/wiki/Environment_variable).
