import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Settings = () => {
  return (
    <Container className="text-dark bg-body">
      <div className="container userSettings">
        <h1>Account</h1>
        <hr />
        <Row className="d-flex">
          <Col className="me-4 col-3">
            <div className="position-relative">
              <p className="text-secondary">MEMBERSHIP & BILLING</p>
              <Button variant="outline-secondary" className="border border-none rounded-0 px-4 bg-light text-dark ">
                Cancel Memebership
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-between">
              <div>
                <p>
                  <strong> nicolavettone57@gmail.com</strong>
                </p>
                <p className="text-secondary">Password: *********</p>
                <p className="text-secondary">Phone: 356369325</p>
              </div>
              <div className="d-flex flex-column justify-content-end">
                <p>
                  <a href="#">Change account email</a>
                </p>
                <p>
                  <a href="#">Change password</a>
                </p>
                <p>
                  <a href="#">Change Phone number</a>
                </p>
              </div>
            </div>

            <hr className="my-4" />

            <div className="d-flex justify-content-between">
              <div>
                <p>
                  <i className="bi bi-paypal"></i> <strong>Paypal nicolavettone57@gmail.com</strong>
                </p>
              </div>
              <div className="d-flex flex-column">
                <p>
                  <a href="#">Update payment info</a>
                </p>
                <p>
                  <a href="#">Billing Details</a>
                </p>
              </div>
            </div>

            <hr className="my-4" />
            <h3>Autoplay controls</h3>
            <Form.Check
              type="checkbox"
              label="Autoplay next episode in a series on all devices."
              className="d-flex align-items-center"
            />
            <Form.Check
              type="checkbox"
              label="Autoplay previews while browsing on all devices."
              className="d-flex align-items-center mt-3"
            />
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="d-flex">
          <Button variant="light" className="col-3 rounded-0 px-5 text-dark fs-5 fw-bold">
            SAVE
          </Button>
          <Button variant="outline-secondary" className="col-3 rounded-0 px-4 mx-4 fs-5">
            CANCEL
          </Button>
          <Button variant="outline-secondary" className="col-5 rounded-0 px-4 fs-5">
            DELETE PROFILE
          </Button>
        </Row>
      </div>
    </Container>
  );
};

export default Settings;
