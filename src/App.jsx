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
        <Gallery1 film={"avengers"} />
        <Gallery1 film={"batman"} />
        <Gallery1 film={"Harry"} />

        <Footer />
      </Container>
    </div>
  );
}

export default App;
