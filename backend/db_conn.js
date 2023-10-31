import AWS from "aws-sdk";
import crypto from "crypto";

AWS.config.update({ region: "ap-northeast-1" });

export async function handler() {
  const dynamodb = new AWS.DynamoDB();

  const item = {
    id: { S: crypto.randomUUID() },
    title: { S: "aaa" },
  };

  await dynamodb
    .putItem({
      TableName: "tasks",
      Item: item,
    })
    .promise();
}

handler();
