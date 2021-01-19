# aws

amazon web services

## s3

### list objects in bucket

	$ aws s3 ls <bucket>

### upload file

	$ aws s3 cp <file> s3://<bucket>/<file>

### download file

	$ aws s3 cp s3://<bucket>/<file> <file>

### upload from stdin

	$ <command> | aws s3 cp - s3://<bucket>/<file>

### download to stdout

	$ aws s3 cp s3://<bucket>/<file> -
