import { Container } from "react-bootstrap";
import "./App.css";

import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Gallery1 from "./components/Gallery1";
function App() {
  return (
    <div className="bg-dark min-vh-100 text-light">
      <Container fluid>
        <TopBar />
        <Gallery1 film="avengers" title="Avengers" />
        <Gallery1 film="batman" title="Batman" />
        <Gallery1 film="Harry-potter" title="Harry Potter" />

        <Footer />
      </Container>
    </div>
  );
}

export default App;
