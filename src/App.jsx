import { Container } from "react-bootstrap";
import "./App.css";

import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Galleria1 from "./components/Galleria1";

function App() {
  return (
    <div className="bg-dark min-vh-100 text-light">
      <Container fluid className="py-4">
        <TopBar />
        <Galleria1 />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
