import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Galleriy2 extends Component {
  state = {
    films: [],
  };

  fetchImg = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=d9bd69eb&s=Harry+Potter");
      if (!response.ok) {
        throw new Error("Errore nel recupero dei film");
      }
      const data = await response.json();
      console.log("Film recuperati:", data.Search);

      this.setState({ films: data.Search });
    } catch (error) {
      console.error("Errore nel recupero dei film:", error);
    }
  };

  componentDidMount() {
    this.fetchImg();
  }

  render() {
    return (
      <Container className="my-4">
        <h3>I tuoi preferiti</h3>
        <Row>
          {this.state.films.slice(0, 6).map((film) => (
            <Col key={film.imdbID} xs={6} md={4} lg={3} xl={2} className="mb-3">
              <img src={film.Poster} alt={film.Title} className="img-fluid" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Galleriy2;
