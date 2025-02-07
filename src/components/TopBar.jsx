import { Navbar, Nav } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="d-flex justify-content-between">
      <Navbar.Brand href="#" className="d-flex align-items-center">
        <img src="assets/logo.png" alt="Epiflix Logo" style={{ width: "100px", height: "55px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex flex-grow-1">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
        <div className="d-flex">
          <Nav.Link href="#">
            <i className="me-3 bi bi-search icons"></i>
          </Nav.Link>
          <Nav.Link href="#" className="me-3">
            KIDS
          </Nav.Link>
          <Nav.Link href="#">
            <i className="me-3 bi bi-bell icons"></i>
          </Nav.Link>
          <Nav.Link href="#">
            <i className=" me-3 bi bi-person-circle icons"></i>
          </Nav.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
