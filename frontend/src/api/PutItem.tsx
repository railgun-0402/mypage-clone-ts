/*
 * DynamoDBに値を登録する
 * name: 入力した名前
 * address: 入力した住所
 * sex: 選択した性別
 */
const handleCallApi = async (data: {
  name: string;
  address: string;
  sex: string;
}) => {
  const API_ENDPOINT = "";

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const postresult = await response.json();
    console.log(`postresult = ${postresult}`);
  } catch (error) {
    console.error(error);
  }
};

export default handleCallApi;
