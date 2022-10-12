// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="tagline">Kirim berbagai jenis ikan dengan mudah</h1>
            <p className="text-secondary">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <div className="d-flex gap-3 justify-content-start w-100">
              <img src="./google-play.svg" alt="google" className="button" />
              <img src="./apple-store.svg" alt="apple" className="button" />
            </div>
            <div className="d-flex justify-content-start w-100 gap-4">
              <div>
                <h1>1.9k+</h1>
                <p>Active Users</p>
              </div>
              <div>
                <h1>20++</h1>
                <p>New Features</p>
              </div>
            </div>
          </Col>
          {/* <Col>
            <img src="./fish.png" className="fish" alt="fish" />
          </Col> */}
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <img src="./test.png" className="phone" alt="phone" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
