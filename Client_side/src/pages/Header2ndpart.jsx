import React from "react";
import { Carousel } from "react-bootstrap";

const Header2ndpart = () => {
  const foodImages = [
    {
      src: "https://cdn.winsightmedia.com/platform/files/public/1200x630/chef-demo-cooking-saucing-dish.jpg",
      alt: "Delicious food 1",
      caption: "Some delicious food",
    },
    {
      src: "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2015/02/chef-kzenon-shutterstock_390054868.jpg",
      alt: "Delicious food 2",
      caption: "Some more delicious food",
    },
    {
      src: "https://cdn.winsightmedia.com/platform/files/public/1200x630/chef-demo-cooking-saucing-dish.jpg",
      alt: "Delicious food 3",
      caption: "Even more delicious food",
    },
  ];
  return (
    <div>
      <div className="p-2">
        <Carousel>
          {foodImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />{" "}
              <Carousel.Caption>
                <h3>Introduction of Our American Cuisine</h3>
                <h3>{image.caption}</h3>
                <p>Prepared by our talented chef</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Header2ndpart;
