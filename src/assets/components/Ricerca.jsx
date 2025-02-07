import { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

class Ricerca extends Component {
  state = { title: "" };

  SearchBook = (propertyName, propertyValue) => {
    this.setState({ title: { ...this.state.title, [propertyName]: propertyValue } });
  };
  Search = (e) => {
    e.preventDefault();
    console.log("SUBMIT", this.state.title);
  };
  render() {
    return (
      <Form onSubmit={this.Search}>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Cerca il tuo libro!" aria-label="Username" aria-describedby="basic-addon1" />
          <Button type="submit" variant="success">
            Cerca
          </Button>
        </InputGroup>
      </Form>
    );
  }
}

export default Ricerca;
