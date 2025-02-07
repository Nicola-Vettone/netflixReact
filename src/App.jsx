import { Container } from "react-bootstrap";
import "./App.css";

import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Gallery1 from "./components/Gallery1";
import Galleriy2 from "./components/Gallery2";
import Galleriy3 from "./components/Gallery3";

function App() {
  return (
    <div className="bg-dark min-vh-100 text-light">
      <Container fluid>
        <TopBar />
        <Gallery1 />
        <Galleriy2 />
        <Galleriy3 />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
