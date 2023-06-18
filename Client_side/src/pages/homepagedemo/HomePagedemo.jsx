import React from "react";

const HomePagedemo = () => {
  return (
    // HomePagedemo
    <div className="p-2">
      <div className="container text-center p-5">
        <h2 className="border border-success p-3">American cuisine</h2>
      </div>

      <div className="d-lg-flex gap-5">
        <div className="m-1">
          <img
            className=" border border-success rounded-2 p-3 m-lg-3 w-100 h-auto"
            src="/america.jpeg"
            alt=""
          />
        </div>
        <div className="w-100 m-1">
          <p className="border border-success rounded-2 m-lg-3 p-5 lead">
            American cuisine is a unique fusion of a wide range of international
            culinary traditions and influences. There are many different types
            of food included, from fast food favorites like hamburgers and hot
            dogs to regional specialties like Tex-Mex, BBQ in the South, and New
            England clam chowder.
            <br />
            Pizza, fried chicken, mac & cheese, potato chips, corn on the cob,
            apple pie, and chocolate chip cookies are a few of the most
            well-liked dishes in American cuisine. People of various ages and
            backgrounds like these dishes, which are frequently associated with
            informal dining.
            <br />
            America's geographic diversity in food is one of its distinctive
            features. The culinary traditions and specialties are unique to each
            American region.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePagedemo;
