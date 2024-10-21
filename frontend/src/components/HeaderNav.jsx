import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// import {
//   FontAwesomeIcon,
//   faRightToBracket,
// } from "@fortawesome/react-fontawesome";

const HeaderNav = () => {
  return (
    <>
      <Navbar bg="myColor" data-bs-theme="light" expand="lg">
        <Container className="mx-2">
          <Navbar.Brand>
            <h3 className="px-5" style={{ color: "#565656" }}>
              🧾My Reading List
            </h3>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/insert">
              Add New Books
            </Nav.Link>
            <Nav.Link as={Link} to="/display">
              My Books
            </Nav.Link>
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/display">
              Edit
            </Nav.Link>
          </Nav>
        </Container>
        <Button variant="success" className="justify-content-end ms-3">
          {/* <FontAwesomeIcon icon={faRightToBracket} /> */}
          Login
        </Button>
        <Button variant="success" className="justify-content-end ms-3">
          Sign up
        </Button>
      </Navbar>
    </>
  );
};

export default HeaderNav;
