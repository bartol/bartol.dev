---
layout: post
title: Invoke Lambda from another Lambda asynchronously
---

First thing we have to do is add permission to invoke function. Add following to your `serverless.yml` and replace `Resource` with [AWS ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of your function.

```yaml
provider:
  iamRoleStatements:
    - Effect: Allow
      Action:
        - lambda:InvokeFunction
      Resource: 'arn:aws:lambda:us-east-1:111111111:function:functionName'
```

Next we will start with new function. It must import `aws-sdk`. There are multiple options if you are using ES6 in your functions or not.

```js
const AWS = require('aws-sdk')
// or if you're using ES6
import AWS from 'aws-sdk'
```

Also, we need to initialize lambda sdk.

```js
const lambda = new AWS.Lambda()
```

After that in function body we will add `params` for invocation which will contain name of function that we want to invoke, invocation type of `Event` and payload which will contain JSON with all parameters you want to pass to function.

```js
const params = {
  FunctionName: 'functionName',
  InvocationType: 'Event',
  Payload: JSON.stringify({
    id: 10239015,
  }),
}
```

And the last thing we need is to really invoke it and pass `params` object we created earlier. Note that function has to be asynchronous for `await` keyword to work.

```js
try {
  await lambda.invoke(params).promise()
} catch (e) {
  return console.log(e)
}
```

And it's done. Another function will be invoked and current function will not wait for it to finish or respond with data.
