---
layout: post
title: Enums in GraphQL
---

Enum (short for Enumeration) is GraphQL special type that represents set of predefined values. You'll mostly use this type when you need more options than just Boolean, but still want to use only controlled set of values.

```graphql
enum articleStatus {
  IDEA
  DRAFT
  PUBLISHED
}
```

<!-- resources:
  - name: How to use GraphQL enum type and its best practices
    url: https://graphqlmastery.com/blog/how-to-use-graphql-enum-type-and-its-best-practices
  - name: Schemas and Types | GraphQL
    url: https://graphql.org/learn/schema/#enumeration-types -->
