import React from "react";

// APIを呼び出すサンプル
const sampleCallApi = () => {
  const handleCallApi = async () => {
    const API_ENDPOINT = "";

    //dataを定義
    const data = {
      name: "Hello",
      address: "999",
      sex: "1",
    };

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

  return (
    <>
      <button onClick={handleCallApi}>APIを実行する</button>
    </>
  );
};

export default sampleCallApi;
