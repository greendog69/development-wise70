import React, { useEffect, useState } from "react";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./stylesheets/Header.css";
import { Avatar } from "@material-ui/core";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user") !== undefined) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      setUser(null);
    }
  }, []);

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Career Change</Navbar.Brand>
        <Navbar.Toggle aria-controls="career-change-navbar" />
        <Navbar.Collapse id="career-change-navbar">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/survey">Survey</Nav.Link>
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/tutors">Tutors</Nav.Link>
          </Nav>
          <Form inline>
            <Nav className="mr-auto">
              {user ? (
                <div className="header__navInfo">
                  <Navbar.Text>
                    <Avatar
                      alt={`${user?.first_name} ${user?.last_name}`}
                      src={user?.profile_photo && user?.profile_photo}
                    />
                  </Navbar.Text>
                  <NavDropdown
                    title={`Welcome ${user?.first_name} ${user?.last_name}`}
                  >
                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </div>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
