import { Dropdown, Button } from "react-bootstrap";

const Geners = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2>TV Shows</h2>
        <Dropdown className="ms-4 mt-1">
          <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex mt-2">
        <Button variant="link" className="bi bi-grid icons text-white" style={{ cursor: "pointer" }}></Button>
        <Button variant="link" className="bi bi-grid-3x3 icons text-white" style={{ cursor: "pointer" }}></Button>
      </div>
    </div>
  );
};

export default Geners;
