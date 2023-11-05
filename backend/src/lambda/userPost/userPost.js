import AWS from "aws-sdk";
import crypto from "crypto";

// 環境変数でリージョン宣言
const REGION = process.env.REGION ?? "";
AWS.config.update({ region: REGION });

// ブラウザで入力した値を受け取り、DynamoDBに登録する
export async function handler(event, context) {
  try {
    // パラメータチェック
    const userName = event.name;
    const userAddress = event.address;
    const userSex = event.sex;

    // 環境変数が空の場合スロー
    if (REGION == "") {
      console.log("環境変数が空です");
      throw new Error();
    }

    const dynamodb = new AWS.DynamoDB();
    const item = {
      id: { S: crypto.randomUUID() },
      name: { S: userName },
      address: { S: userAddress },
      sex: { S: userSex },
    };

    await dynamodb
      .putItem({
        TableName: "user_sample",
        Item: item,
      })
      .promise();
  } catch (error) {
    console.error(`error = ${error}`);
  }
}

handler();
