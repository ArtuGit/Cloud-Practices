// Example: List S3 buckets using AWS SDK v3
const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

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