import React, { useEffect, useState } from "react";
import Card_section from "../card/Card_section";

const Chef = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(
      "https://b710-chef-recipe-hunter-client-side-fayeja.vercel.app/category"
    )
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container text-center p-5">
        <h2 className="border border-success p-3">Chef Details</h2>
      </div>
      <div className="d-lg-flex justify-content-center align-items-center row row-cols-lg-4  w-100 gap-5 justify-content-center p-lg-4">
        {category.map((category) => (
          <Card_section key={category.id} category={category}></Card_section>
        ))}
      </div>
    </div>
  );
};

export default Chef;
