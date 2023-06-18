import React from "react";
import { Card } from "react-bootstrap";
import {
  FaAlignJustify,
  FaBeer,
  FaGlassCheers,
  FaRegGrinAlt,
} from "react-icons/fa";

const Servies = () => {
  return (
    <div>
      <div className="py-lg-5 px-lg-2">
        <div className="container text-center p-5">
          <h2 className="border border-success p-3">OUR SERVICES</h2>
        </div>
        <div className="ps-5 ms-5 mb-5 d-lg-flex justify-content-center align-items-center gap-5">
          <div className="ps-lg-5 ms-lg-5 mb-2 ">
            <Card className="w-75">
              <Card.Header className="text-center display-6 text-success">
                <FaAlignJustify></FaAlignJustify>
              </Card.Header>
              <Card.Body className="text-center ">
                <Card.Title className="text-uppercase">Menu Book</Card.Title>
                <Card.Text>
                  The Menu is a list of dishes and their recipe that are most
                  popular in American cuisine.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-2">
            <Card className="w-75">
              <Card.Header className="text-center display-6 text-success">
                <FaRegGrinAlt></FaRegGrinAlt>
              </Card.Header>
              <Card.Body className="text-center">
                <Card.Title className="text-uppercase">Our Chef</Card.Title>
                <Card.Text>
                  A highly skilled person who is in charge of food production in
                  listed in American cuisine.Their recipe are available in all
                  the time of your choice.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="w-75">
              <Card.Header className="text-center display-6 text-success">
                <FaGlassCheers></FaGlassCheers>
              </Card.Header>
              <Card.Body className="text-center">
                <Card.Title className="text-uppercase">Our Food</Card.Title>
                <Card.Text>
                  The food seems mainly inspired by American cuisine and always
                  provide best delicious food.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servies;
