import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";
import app from "../../firebase/firebase.config";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User login successfully");
        navigate(from, { replace: true });
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
        setSuccess("User login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        setError("");
        setSuccess("User login successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
        setSuccess("");
      });
  };
  return (
    <Container
      className="m-auto my-5 border border-success p-5 bg-light"
      style={{ width: "40rem", height: "30rem" }}
    >
      <h3 className="mb-4">Please Login</h3>
      <Form onSubmit={handleLogin}>
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
          <Form.Check type="checkbox" label="Show password" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="my-2 px-3 btn btn-success"
        >
          Login
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
          Don't have an account? <Link to="/register">Register</Link>
        </Form.Text>
        <br />
        <Form.Text className="text-success">{success}</Form.Text>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
