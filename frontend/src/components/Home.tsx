import React from "react";

const Home = () => {
  const handleClickBtn = () => {
    console.log("ボタン押下");
  };

  return (
    <>
      <h2>Home Page</h2>
      <input type="text" placeholder="任意の文字を入力" />
      <button onClick={handleClickBtn}>検索</button>
    </>
  );
};

export default Home;
