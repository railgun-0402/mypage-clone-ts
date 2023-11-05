import axios from "axios";
import React from "react";

// APIを呼び出すサンプル
const sampleCallApi = () => {
  const url = "";
  const handleCallApi = () => {
    axios
      .post(url)
      .then((response) => {
        console.log(`response = ${response}`);
      })
      .catch((error) => {
        console.log(`error = ${error}`);
      });
  };

  return (
    <>
      <button onClick={handleCallApi}>APIを実行する</button>
    </>
  );
};

export default sampleCallApi;
