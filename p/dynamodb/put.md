---
layout: post
title: Put item in DynamoDB table
date: 2019-09-11
---

Okay, you've received some data in your lambda function and you want to save it to DynamoDB table. First thing you have to do is add permission to put item in `serverless.yml`.

```yaml
# ...
provider:
  # ...
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:PutItem
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

For putting data in table you'll need to pass 2 required parameters, TableName and Item. TableName will specify same table you added permission earlier and Item is data that you want to put.

```js
const params = {
  TableName: tableName,
  Item: {
    someProperty: someValue,
    anotherProperty: anotherValue,
  },
}

try {
  await docClient.put(params).promise()
} catch (e) {
  return console.log(e)
}
```

And that's pretty much it! Be sure to deploy your function and after running it data should appear in DynamoDB table dashboard.
