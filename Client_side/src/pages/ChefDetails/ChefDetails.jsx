import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import ChefRecipe from "../ChefRecipe/ChefRecipe";
import LazyLoad from "react-lazy-load";

const ChefDetails = () => {
  const { id } = useParams();
  const chef_Details = useLoaderData();
  console.log(chef_Details.picture);

  return (
    <div>
      <div className="d-flex w-100 h-25">
        <div className="rounded-4 w-50 m-5">
          <img
            className="rounded-4 w-100 m-5"
            src={chef_Details.picture}
            alt=""
          />
        </div>
        <div className="rounded-4 w-50 m-5 ">
          <h1 className="mt-5 text-success">{chef_Details.name}</h1>
          <p className="pb-4">{chef_Details.bio}</p>
          <h3 className="text-success pb-4">
            Number of Recipes: {chef_Details.num_recipes}
          </h3>
          <div className="text-muted align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center text-success">
              <h3 className="flex-grow-1">
                {chef_Details.years_of_experience} years experience
              </h3>
              <h3 className="p-2">{chef_Details.likes}</h3>
              <h3 className="pb-1">
                <FaRegThumbsUp />
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5">
        {chef_Details.recipes.map((recipe) => (
          <ChefRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
