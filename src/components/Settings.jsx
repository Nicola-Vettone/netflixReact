import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Settings = (props) => {
  return (
    <Container className="text-dark bg-body">
      <div className="container userSettings">
        <h1>Account</h1>
        <hr />
        <Row className="border-bottom pb-2">
          <Col className="col-3">
            <h5 className="text-secondary mt-2">MEMBERSHIP & BILLING</h5>
            <Button variant="outline-secondary" className="border border-none rounded-0 px-4 bg-light text-dark">
              Cancel Membership
            </Button>
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
        <Row className="border-bottom pb-2 mt-2">
          <Col className="col-3">
            <h5 className="text-secondary mt-2">PLAN DETAILS</h5>
          </Col>
          <Row className="col-9 my-2">
            <Col className="col-6 ps-0">
              <p className="m-0 fw-bold">
                Premium <span className="border px-1 border-black py-0 ms-2">ULTRA HD</span>
              </p>
            </Col>
            <Col className="col-6 px-0 text-end">
              <a href="#" className="text-decoration-none">
                Change plan
              </a>
            </Col>
          </Row>
        </Row>

        <Row className="border-bottom pb-2 mt-2">
          <Col className="col-3">
            <h5 className="text-secondary mt-2">SETTINGS</h5>
          </Col>
          <Col className="d-flex flex-column ps-0">
            <a href="#" className="text-decoration-none ">
              Parental controls
            </a>
            <a href="#" className="text-decoration-none py-1">
              Test participation
            </a>
            <a href="#" className="text-decoration-none">
              Manage download devices
            </a>
            <a href="#" className="text-decoration-none py-1">
              Activate a device
            </a>
            <a href="#" className="text-decoration-none">
              Recent device streaming activity
            </a>
            <a href="#" className="text-decoration-none py-1">
              Sign out of all devices
            </a>
          </Col>
        </Row>

        <Row className="border-bottom py-2">
          <Col className="col-3">
            <h5 className="text-secondary mt-2">MY PROFILE</h5>{" "}
          </Col>
          <Row className="col-9 my-2 ps-0">
            <Col className="col-3 d-flex align-items-center">
              <div className="me-2 ">
                <Image src={props.img} alt="Avatar" fluid className="rounded-2 settingsImg" width={20} />
              </div>
              <p className="fw-bold m-0">{props.name}</p>
            </Col>
            <Col className="col text-end ms-auto pe-0 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Manage profiles
              </a>
              <a href="#" className="text-decoration-none">
                Add profile email
              </a>
            </Col>
          </Row>
          <Row className=" offset-3 ps-0">
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Language
              </a>
            </Col>
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Playback settings
              </a>
            </Col>
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Subtitle appearance
              </a>
            </Col>
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Viewing activity
              </a>
            </Col>
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Ratings
              </a>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
};

export default Settings;
