import 'dotenv/config';
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const client = new S3Client({ region: "us-east-1" });

async function listBuckets() {
  try {
    const data = await client.send(new ListBucketsCommand({}));
    console.log("S3 Buckets:", data.Buckets);
  } catch (err) {
    console.error("Error listing buckets:", err);
  }
}

listBuckets(); 