import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { APIGatewayProxyHandler, APIGatewayProxyEvent } from 'aws-lambda';

const s3 = new S3Client();
const BUCKET_NAME = 'itcross.link';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  try {
    const command = new ListObjectsV2Command({ Bucket: BUCKET_NAME });
    const data = await s3.send(command);
    const files = data.Contents?.map(item => item.Key) || [];
    return {
      statusCode: 200,
      body: JSON.stringify({ files }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: (error as Error).message }),
    };
  }
}; 