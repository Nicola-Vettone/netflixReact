import { Container, Nav, Navbar } from "react-bootstrap";

function MyFooter() {
  return (
    <div className="d-flex justify-content-center bg-dark">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto ">
            <Nav.Link href="#">Contattaci</Nav.Link>
            <Nav.Link href="#">Parla con noi</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default MyFooter;
