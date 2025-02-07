import { Container } from "react-bootstrap";
import "./App.css";

import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
/* import Settings from "./components/settings"; */
import Gallery1 from "./components/Gallery1";
import Geners from "./components/Geners";

{
  /*import UserPage from "./components/UserPage";*/
}
function App() {
  /*  const avatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; */

  return (
    <div className="bg-dark min-vh-100 text-light">
      <Container fluid>
        <TopBar />
        <Container fluid>
          <Geners />
          <Gallery1 film="avengers" title="Avengers" />
          <Gallery1 film="batman" title="Batman" />
          <Gallery1 film="Harry-potter" title="Harry Potter" />
          {/*<UserPage name="Nico" img={avatar} />*/}
          {/*<Settings name="Nico" img={avatar} />*/}

          <Footer />
        </Container>
      </Container>
    </div>
  );
}

export default App;
