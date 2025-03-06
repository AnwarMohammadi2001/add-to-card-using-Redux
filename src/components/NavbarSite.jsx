import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarSite = () => {
  return (
    <Navbar expand="lg" className="bg-slate-900 h-[70px]" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Shopping Card
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" className="text-white ">
              Products
            </Nav.Link>
          </Nav>

          <Nav.Link
            as={Link}
            to="/card"
            variant="outline-success"
            style={{
              color: "white",
              backgroundColor: "green",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Card Items
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSite;
