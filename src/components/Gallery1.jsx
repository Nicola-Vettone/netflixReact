import { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

class Gallery1 extends Component {
  state = {
    films: [],
    name: this.props.film,
    isLoading: true,
  };

  fetchImg = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=d9bd69eb&s=${this.state.name}`);
      console.log(this.state.name);
      if (!response.ok) {
        throw new Error("Errore nel recupero dei film");
      }
      const data = await response.json();

      console.log("Film recuperati:", data.Search);

      this.setState({ films: data.Search });
    } catch (error) {
      console.error("Errore nel recupero dei film:", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchImg();
  }

  render() {
    return (
      <Container fluid className="my-4">
        <h3>{this.props.title}</h3>
        {this.state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Row>
          {this.state.films.slice(0, 6).map((film) => (
            <Col key={film.imdbID} xs={6} md={4} lg={4} xl={2} className="mb-3 px-2">
              <img src={film.Poster} alt={film.Title} className="img-fluid cover" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery1;
