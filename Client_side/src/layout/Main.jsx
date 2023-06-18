import React from "react";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Chef from "../pages/Chef/Chef";
import { Outlet } from "react-router-dom";
import HomePagedemo from "../pages/homepagedemo/HomePagedemo";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
