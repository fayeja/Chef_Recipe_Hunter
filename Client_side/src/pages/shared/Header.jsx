import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const tooltip = <Tooltip id="tooltip">{user?.displayName}</Tooltip>;

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className="fs-1 fw-semibold">
              <img
                src="/download.png"
                width="100"
                height="100"
                className="d-inline-block align-top rounded"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#" className="fs-1 fw-semibold text-success">
              VIVANI
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav
                  variant="tabs"
                  className="justify-content-end flex-grow-1 pe-3 gap-5 fs-4"
                  activeKey={window.location.pathname}
                >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  {user && (
                    <div>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={tooltip}
                      >
                        <img
                          style={{ maxWidth: 50, borderRadius: "50%" }}
                          src={user?.photoURL}
                          alt=""
                        />
                      </OverlayTrigger>
                    </div>
                  )}
                  {user ? (
                    <Button
                      onClick={handleLogout}
                      className="px-3 btn btn-success"
                    >
                      Log out
                    </Button>
                  ) : (
                    <Link
                      to="/login"
                      className="text-decoration-none text-white"
                    >
                      <Button className="py-3 px-4 btn btn-success">
                        Log in
                      </Button>
                    </Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
