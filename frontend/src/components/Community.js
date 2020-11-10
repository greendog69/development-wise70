import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./stylesheets/Community.css";

function Community() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);
  return (
    <div className="community">
      <Container fluid>
        <Row>
          <Col>
            <h2 className="page__header">
              Welcome to our Career Change Community
            </h2>
            <Row>
              <Col>
                {user ? (
                  <div className="community__app">
                    <div className="community__appBody">
                      <Sidebar />

                      <Chat messages={messages} />
                    </div>
                  </div>
                ) : (
                  <div className="join__community">
                    <Button variant="info" href="/login">
                      Join Our Community
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Community;
