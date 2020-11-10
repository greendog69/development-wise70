import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./stylesheets/Survey.css";
import quizQuestons from "../questions";
import Question from "./Question";
import { useStateValue } from "../StateProvider";

function Survey() {
  const [{ user, token, quizScore }, dispatch] = useStateValue();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    console.log(quizScore);

    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
  }, []);

  return (
    <div className="survey">
      <Container fluid>
        <Row>
          <Col>
            <h2>Welcome to our survey page.</h2>
            <p>
              You can take a quick survey and it will help you to guide you on
              proper direction
            </p>
          </Col>
        </Row>
        <hr />
        {authUser ? (
          <Row>
            <Col xs={4}>
              {quizQuestons.map((question) => (
                <Question
                  question={question}
                  totalQuestions={quizQuestons.length}
                />
              ))}
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <p>
                In order to participate our survey please{" "}
                <a href="/login">login</a>
              </p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Survey;
