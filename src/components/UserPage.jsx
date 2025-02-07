import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

const UserPage = (props) => {
  return (
    <Container className="text-white">
      <div className="container userSettings w-50">
        <h1>Edit Profile</h1>
        <hr />
        <Row className="d-flex">
          <Col className="me-4 col-3">
            <div className="position-relative">
              <Image src={props.img} alt="Avatar" fluid class="rounded-2 img-fluid" />
            </div>
          </Col>
          <Col>
            <p className="name fs-3 bg-secondary px-3">{props.name}</p>
            <h3 className="fs-4">Language:</h3>
            <Form.Group>
              <Form.Select className="bg-black border border-1 rounded-0 text-white px-2 py-1 fs-5">
                <option selected>English</option>
                <option>Italian</option>
                <option>Deutsch</option>
                <option>French</option>
                <option>Japanese</option>
                <option>Spain</option>
                <option>Cinese</option>
              </Form.Select>
            </Form.Group>
            <hr className="my-4" />
            <h3 className="fs-4">Maturity Settings:</h3>
            <p className="d-inline-flex gap-1">
              <Button variant="secondary" className="border-0 ams" active>
                ALL MATURITY SETTINGS
              </Button>
            </p>
            <p>Show titles of all maturity ratings for this profile.</p>
            <Button variant="outline-secondary" className="rounded-0 px-4">
              EDIT
            </Button>
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

export default UserPage;
