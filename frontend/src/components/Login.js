import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import "./stylesheets/Login.css";
import axios from "../axios";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiResponse, setApiResponse] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [show, setShow] = useState(true);
  const [{ user, token }, dispatch] = useStateValue();
  const history = useHistory();

  const clearFormFields = () => {
    setEmail("");
    setPassword("");
    setValidated(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      try {
        let user = {
          email_address: email.trim(),
          password: password.trim(),
        };
        axios
          .post("/users/user-login", user)
          .then((response) => {
            //console.log(response);
            if (response.data.success) {
              // Save user and token
              localStorage.setItem("user", JSON.stringify(response.data.user));
              localStorage.setItem("token", response.data.token);

              // dispatch({
              //   type: "SET_USER",
              //   user: response.data.user,
              // });
              // dispatch({
              //   type: "SET_TOKEN",
              //   token: response.data.token,
              // });

              // Redirect to Homepage
              history.push("/");
            } else {
              setApiResponse(response.data.success);
              setApiMessage(response.data.message);
            }
            clearFormFields();
          })
          .catch((err) => {
            console.log(
              `Failed to complete the process due to this following error : ${err}`
            );
            clearFormFields();
          });
      } catch (err) {
        console.log(err);

        clearFormFields();
      }
    }
    setValidated(true);
  };

  return (
    <div className="login">
      <Container fluid>
        <Row>
          <Col xs={4}></Col>
          <Col xs={4}>
            <Card>
              <Card.Header>Login</Card.Header>
              <Card.Body>
                {apiMessage && (
                  <Alert
                    variant="danger"
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <Alert.Heading>Error</Alert.Heading>
                    <p>{apiMessage}</p>
                  </Alert>
                )}
                <Form onSubmit={handleSubmit} validated={validated} noValidate>
                  <Form.Group controlId="email_address">
                    <Form.Label>E-Mail Address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid password
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
                <hr />
                <p>
                  Don't have any account? <a href="/signup">Sign Up</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
