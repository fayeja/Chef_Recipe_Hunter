import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaBeer, FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipe = ({ recipe }) => {
  const [like, setLike] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    setLike(true);
    toast.success("Add your favorite list!");
  };

  return (
    <div>
      <Card className="text-center mb-5 border border-success">
        <Card.Header className="bg-success p-4">
          <Card.Title className="text-white ">{recipe.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <h5 className="text-success">Ingredients:</h5>
          <Card.Text>{recipe.ingredients}</Card.Text>
          <h5 className="text-success">Description</h5>
          <Card.Text>{recipe.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1 d-flex align-items-center">
            <Rating
              style={{ maxWidth: 150 }}
              value={recipe.rating}
              max={4}
              size={2}
              readOnly
              className="text-success"
            />
            <h4 className="m-2">{recipe.rating}</h4>
          </div>
          <div>
            <Button
              disabled={like}
              onClick={handleLike}
              className="btn btn-success"
            >
              <FaRegHeart className="w-100"></FaRegHeart>
            </Button>
            <ToastContainer />
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ChefRecipe;
