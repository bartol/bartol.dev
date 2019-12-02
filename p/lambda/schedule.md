---
layout: post
title: Schedule serverless functions
date: 2019-11-15
---

Serverless functions are most effective for jobs that need to happen
every so often like backup, or similar. Also, they are much cheaper
than renting server and letting it idle 99.99% of the time.

To run function in specific time you'll have to schedule it somehow.
You can choose between 2 ways. Cron expression and rate expression.
Both will be defined in events property of function.

```yaml
functions:
  my_function_name:
    handler: my_function.handler
    events:
      - schedule: rate(2 minutes)
      - schedule: cron(0 16 * * ? *)
```

Rate can be expressed in minutes, hours and days. Cron expressions
can be much more customizable if you need them to be, but they are
a bit harder to write.

You can read more about both of them from [AWS docs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html).
