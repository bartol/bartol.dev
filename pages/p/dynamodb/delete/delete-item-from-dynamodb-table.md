---
title: Delete item from DynamoDB table
date: 2019-10-08
tags:
  - dynamodb
  - til
---

Ah, month ago I created 2 posts about CRUD functions (create and read) in DynamoDB and rest were left collecting dust in to-do list. Figured out I should get to it and cross it off as soon as possible. Anyways, lets see how you can delete item from DynamoDB table. First thing you should always do when working with DynamoDB and Lambda is provide permission to access it.

```yml
# serverless.yml
# ...
provider:
  # ...
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:DeleteItem
      Resource: 'arn:aws:dynamodb:us-east-1:111111111:table/tableName'
```

Now you can open function handler and import AWS SDK...

```js
const AWS = require('aws-sdk')
// or if you're using ES6
import AWS from 'aws-sdk'
```

...and initialize DynamoDB client which will provide methods like `delete` to manipulate items and tables.

```js
const docClient = new AWS.DynamoDB.DocumentClient()
```

Here comes the fun part. You'll need to create object that will contain name of table and key of item that will deleted. Then call document client `delete` method passing previously created object in try/catch block.

```js
const params = {
  TableName: tableName,
  Key: {
    id: 'value',
  },
}

try {
  await docClient.delete(params).promise()
} catch (e) {
  return console.log(e)
}
```
