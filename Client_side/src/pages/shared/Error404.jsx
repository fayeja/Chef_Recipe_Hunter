import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container text-center p-5">
      <img className="w-50 rounded-4" src="/404.jpeg" alt="" />
      <h1 className="text-danger m-3">Page Not Found</h1>
      <p className="m-3">
        Oops!Looks like the page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button className="py-3 px-4 btn btn-success">Return Home</Button>
      </Link>
    </div>
  );
};

export default Error404;
