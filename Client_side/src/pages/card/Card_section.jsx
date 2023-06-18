import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Card_section = ({ category }) => {
  const { id, picture, name, years_of_experience, num_recipes, likes } =
    category;

  return (
    <div className="col ms-4">
      <Card className="w-100">
        <div>
          <LazyLoad threshold={0.95}>
            <Card.Img
              className="align-self-center w-100 p-3 rounded-2 "
              variant="top"
              src={picture}
            />
          </LazyLoad>
        </div>
        {/* <Card.Img
          className="align-self-center w-100 p-3 rounded-2 m-3 "
          variant="top"
          src={picture}
        /> */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Number of Recipes: {num_recipes}</Card.Text>
          <Button className="btn btn-success">
            <Link
              to={`/chefDetails/${category.id}`}
              className="text-decoration-none text-white"
            >
              View Recipes
            </Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <p className="flex-grow-1">
              {years_of_experience} years experience
            </p>
            <p className="p-2">{likes}</p>
            <p className="pb-1">
              <FaRegThumbsUp />
            </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Card_section;
