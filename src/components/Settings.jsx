import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Settings = () => {
  return (
    <Container className="text-dark bg-body">
      <div className="container userSettings">
        <h1>Account</h1>
        <hr />
        <Row className="border-bottom pb-2">
          <Col className="col-3">
            <h5 className="text-secondary mt-2">MEMBERSHIP & BILLING</h5>
            <Button className="mb-2 w-100 bg-body-secondary text-black border-0">Cancel Membership</Button>
          </Col>
          <Col className="col-9">
            <Row className="border-bottom my-2">
              <Col className="col-6">
                <p className="m-0">nicolavettone57@gmail.com</p>
                <p className="m-0 text-secondary">Password: ********</p>
                <p className="text-secondary">Phone: 321 044 1279</p>
              </Col>
              <Col className="col-6 text-end">
                <a href="#" className="text-decoration-none d-block">
                  Change account email
                </a>
                <a href="#" className="text-decoration-none d-block">
                  Change password
                </a>
                <a href="#" className="text-decoration-none d-block">
                  Change phone number
                </a>
              </Col>
            </Row>
            <Row className="border-bottom my-2">
              <Col className="col-6 ps-0">
                <p>
                  <i className="bi bi-paypal"></i> <strong>Paypal nicolavettone57@gmail.com</strong>
                </p>
              </Col>
              <Col className="col-6 text-end">
                <a href="#" className="text-decoration-none d-block">
                  Update payment info
                </a>
                <a href="#" className="text-decoration-none d-block">
                  Billing details
                </a>
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="col-12 text-end">
                <div>
                  <a href="#" className="text-decoration-none">
                    Redeem gift card or promo code
                  </a>
                </div>
                <div>
                  <a href="#" className="text-decoration-none">
                    Where to buy gift cards
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

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
