import React from "react";
import Chef from "../../Chef/Chef";
import Header2ndpart from "../../Header2ndpart";
import HomePagedemo from "../../homepagedemo/HomePagedemo";
import Servies from "../../services/Servies";

const Home = () => {
  return (
    <div>
      <Header2ndpart></Header2ndpart>
      <HomePagedemo></HomePagedemo>
      <Chef></Chef>
      <Servies></Servies>
    </div>
  );
};

export default Home;
