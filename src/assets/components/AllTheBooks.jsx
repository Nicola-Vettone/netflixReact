import { Button, Card, Container } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/Scifi.json";
import { Component } from "react";

class Libri extends Component {
  state = { books: fantasy };

  render() {
    return (
      <>
        <Container fluid>
          <Button variant="success" onClick={() => this.setState({ books: fantasy })}>
            Fantasy
          </Button>
          <Button variant="danger" onClick={() => this.setState({ books: horror })}>
            Horror
          </Button>
          <Button variant="info" onClick={() => this.setState({ books: romance })}>
            Romance
          </Button>
          <Button variant="dark" onClick={() => this.setState({ books: history })}>
            History
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: scifi })}>
            Scifi
          </Button>
        </Container>
        <div className="d-flex flex-wrap justify-content-between">
          {this.state.books.map((libro) => (
            <Card style={{ width: "18rem", margin: "10px" }} key={libro.asin}>
              <Card.Img variant="top" src={libro.img} alt={libro.title} />
              <Card.Body>
                <Card.Title>{libro.title}</Card.Title>
                <Card.Text>Categoria : {libro.category}€</Card.Text>
                <Card.Text>{libro.price}€</Card.Text>
                <Button variant="primary" className="btn-success">
                  Acquista
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </>
    );
  }
}
export default Libri;
