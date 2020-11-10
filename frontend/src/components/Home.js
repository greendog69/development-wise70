import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./stylesheets/Home.css";
import Typist from "react-typist";

function Home() {
  return (
    <div className="home">
      <Container fluid>
        {/* Welcome animation */}
        <Row>
          <Col xs={12}>
            <Typist cursor={{ show: false }}>
              <div className="title">
                <p>
                  Welcome to <strong>Career Change</strong>
                </p>
                <p className="subtitle">A new way to drive your career</p>
                <Button variant="info">Learn More</Button>
              </div>
            </Typist>
          </Col>
        </Row>

        {/* Project Description goes here */}
        <Row>
          <Col xs={12}>
            <div>
              <p></p>
            </div>
          </Col>
        </Row>

        {/* Cards of homepage */}
        <Row className="card__container">
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Survey</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et urna in purus vestibulum condimentum vel eget mi. Phasellus
                sit amet quam sed odio auctor elementum.
              </Card.Text>
              <Button href="/survey" variant="info">
                Learn More
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Community</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et urna in purus vestibulum condimentum vel eget mi. Phasellus
                sit amet quam sed odio auctor elementum.
              </Card.Text>
              <Button href="/community" variant="info">
                Learn More
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Tutor</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et urna in purus vestibulum condimentum vel eget mi. Phasellus
                sit amet quam sed odio auctor elementum.
              </Card.Text>
              <Button href="/tutors" variant="info">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
