import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User created successfully");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleGitHubSignIn = () => {
    signInWithPopup(auth, GitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User created successfully");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess("");
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        setError("");
        form.reset();
        setSuccess("User created successfully");
        updateUserdata(res.user, name, photo);
      })
      .catch((err) => {
        console.log(err);
        setError("Password should be at least 6 characters ");
        setSuccess("");
      });

    const updateUserdata = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("user profile updated");
        })
        .catch((err) => {
          setError(err.message);
        });
    };
  };
  const handleAccept = (e) => {
    setAccept(e.target.checked);
  };

  return (
    <div>
      <Container
        className="m-auto my-5 border border-success p-5 bg-light"
        style={{ width: "40rem" }}
      >
        <h3 className="mb-4">Please Register</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleAccept}
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept <Link to="/terms">Terms and Conditions</Link>
                </>
              }
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={!accept}
            className="my-2 px-3 btn btn-success"
          >
            Register
          </Button>
          <br />
          <Button
            onClick={handleGoogleSignIn}
            variant="primary"
            type="submit"
            className="my-2 px-3 border border-success btn btn-light text-success"
          >
            <FaGoogle className="mb-1"></FaGoogle> Google Login
          </Button>
          <Button
            onClick={handleGitHubSignIn}
            variant="primary"
            type="submit"
            className="my-2 mx-5 px-3 border border-success btn btn-light text-success"
          >
            <FaGithub className="mb-1"></FaGithub> GitHub Login
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Already have an account? <Link to="/login">Log in</Link>
          </Form.Text>
          <br />
          <Form.Text className="text-success">{success}</Form.Text>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
