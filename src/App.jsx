import { Container } from "react-bootstrap";
import "./App.css";

import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="bg-dark min-vh-100 text-light">
      <Container fluid className="py-4">
        <TopBar />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
