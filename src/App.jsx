import { Container } from "react-bootstrap";
import "./App.css";
import ContainerBody from "./components/ContainerBody";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="bg-dark min-vh-100 text-light">
      <Container fluid className="py-4">
        <ContainerBody />
      </Container>

      <TopBar />
      <Footer />
    </div>
  );
}

export default App;
