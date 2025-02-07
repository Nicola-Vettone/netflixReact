import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="text-center text-light mt-5">
      <Row className="justify-content-center">
        <Col xs={6}>
          <Row className="mb-2">
            <Col>
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-instagram me-2"></i>
              <i className="bi bi-twitter-x me-2"></i>
              <i className="bi bi-youtube"></i>
            </Col>
          </Row>
          <Row className="text-secondary small">
            <Col>
              <p>
                <a href="#" className="text-secondary">
                  Audio and Subtitles
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary">
                  Media Center
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary">
                  Contact us
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="outline-secondary" size="sm" className="rounded-0 mt-3">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="text-secondary mt-2 small">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
