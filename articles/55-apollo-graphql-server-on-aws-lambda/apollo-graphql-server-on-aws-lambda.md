---
title: Apollo GraphQL Server on AWS Lambda
date: 2019-09-29
tags:
  - apollo
  - lambda
  - aws
  - til
---

There are number of things why I really like working with GraphQL. I also enjoy writing Lambda Functions to do simple things without needing to manage full-blown server. Why not merge both? Apollo is awesome tool that will make it super easy! To start, install Apollo Server and GraphQL.

```terminal
yarn add apollo-server-lambda graphql
```

This article assumes that you already have [serverless framework](https://serverless.com/) up and running, so I'll show just functions section.

```yml
functions:
  graphql:
    handler: handler.graphql
    events:
      - http:
          path: graphql
          method: post
          cors: true
      - http:
          path: graphql
          method: get
          cors: true
```

After that we will create `handler.js` file in which server will live and import needed packages.

```js
import { ApolloServer, gql } from 'apollo-server-lambda'
```

Now comes _the GraphQL part_. Let's create type definitions for API.

```js
const typeDefs = gql`
  type Query {
    message: String!
  }
`
```

Next, create resolvers. Here you can call functions to get data from database or similar. For testing purposes I'll just return string.

```js
const resolvers = {
  Query: {
    message: () => 'Your Apollo Server is working.',
  },
}
```

And finally, you must wire up type definitions and resolvers with Apollo and export it.

```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.graphql = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
})
```

There are still few things left to do! Run `sls deploy` to deploy Apollo Server. After Lambda is successfully uploaded to AWS API Gateway you can visit [https://YOUR_API_ENDPOINT/graphql](https://your_API_ENDPOINT/graphql) to try API in GraphQL Playground!
