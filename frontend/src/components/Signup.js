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
import "./stylesheets/Signup.css";
import axios from "../axios";

function Signup() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [apiResponse, setApiResponse] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [show, setShow] = useState(true);

  const clearFormFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setPhoneNumber("");
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
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          email_address: email.trim(),
          username: username.trim(),
          password: password.trim(),
          phone_number: phoneNumber.trim().replace(/ /g, ""),
        };
        axios
          .post("/users/user-register", user)
          .then((response) => {
            if (response.data.success) {
              setApiResponse(response.data.success);
              setApiMessage(response.data.message);
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
    <div className="signup">
      <Container fluid>
        <Row>
          <Col xs={4}></Col>
          <Col xs={4}>
            <Card>
              <Card.Header>Sign Up</Card.Header>
              <Card.Body>
                {apiMessage && (
                  <Alert
                    variant={apiResponse ? "success" : "danger"}
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <Alert.Heading>
                      {apiResponse ? "Success" : "Error"}
                    </Alert.Heading>
                    <p>{apiMessage}</p>
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} validated={validated} noValidate>
                  <Form.Group controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide first name
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide last name
                    </Form.Control.Feedback>
                  </Form.Group>
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
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide username
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      minLength={8}
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid password
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      maxLength={10}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide valid phone number
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form>
                <hr />
                <p>
                  Already have account? <a href="/login">Login</a>
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

export default Signup;
