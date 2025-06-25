import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class Project1Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'Project1Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // Lambda function to list files in the 'itcross.link' S3 bucket
    const listFilesFunction = new lambda.Function(this, 'ListFilesFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'list-files.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        BUCKET_NAME: 'itcross.link',
      },
    });

    // Grant permission to list objects in the S3 bucket
    listFilesFunction.addToRolePolicy(new iam.PolicyStatement({
      actions: ['s3:ListBucket'],
      resources: ['arn:aws:s3:::itcross.link'],
    }));
  }
}
