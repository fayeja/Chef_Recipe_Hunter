import React from "react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-5 text-white bg-dark ">
      <div className="container">
        <div className="row ">
          <div className="col-6 col-sm">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Home page
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  American cuisine
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Chef Details
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  OUR SERVICES
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Services</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Menu book
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Our food
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Our chef
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className=" test-uppercase">VIVANI</h5>
            <ul className="list-unstyled text-small text-muted">
              <p>
                American cuisine is a unique fusion of a wide range of
                international culinary traditions and influences. American
                cuisine is a dynamic and constantly evolving reflection of the
                country's diverse cultural heritage and its ongoing culinary
                innovations and experimentation.
              </p>
            </ul>
          </div>
          <div className="d-flex justify-content-center pb-4">
            <div className="mx-3">
              <a>
                <FaFacebook></FaFacebook>
              </a>
            </div>
            <div className="mx-3">
              <a>
                <FaFacebookMessenger></FaFacebookMessenger>
              </a>
            </div>
            <div className="mx-3">
              <a>
                <FaTwitter></FaTwitter>
              </a>
            </div>
            <div className="mx-3">
              <a>
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </div>
          </div>
        </div>
        <p className="copyright text-center">VIVANI © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
