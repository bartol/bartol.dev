---
layout: post
title: Get item from DynamoDB table
---

Have you just read my previous article about putting data in DynamoDB? And are you wondering how to get that data? You are at the right place. First of all you need to add permission for lambda to get item from DynamoDB.

```yaml
# ...
provider:
  # ...
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:GetItem
      Resource: 'arn:aws:dynamodb:us-east-1:111111111:table/tableName'
```

After that you should open function handler and import `aws-sdk` via import or require syntax...

```js
const AWS = require('aws-sdk')
// or if you're using ES6
import AWS from 'aws-sdk'
```

...and initialize DynamoDB document client.

```js
const docClient = new AWS.DynamoDB.DocumentClient()
```

And last thing you have to do is initialize `params` object that will contain DynamoDB table name, your table's primary key and it's value. `params` object is then passed as argument to document client get method.

```js
const params = {
  TableName: tableName,
  Key: {
    id: 'value',
  },
}

try {
  await docClient.get(params).promise()
} catch (e) {
  return console.log(e)
}
```

Quite easy when you wrap your head around one of CRUD DynamoDB functions.
