// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <>
      <Navbar />
      <Container fluid className="header">
        <Row>
          <Col xl={6} className="d-flex mt-5 flex-column justify-content-center align-items-center display-left">
            <h1 className="tagline">Kirim berbagai jenis ikan dengan mudah</h1>
            <p className="text-secondary  mt-4">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <div className="d-flex mt-4  flex-column flex-md-row gap-3 justify-content-start w-100">
              <img src="./google-play.svg" alt="google" className="button" />
              <img src="./apple-store.svg" alt="apple" className="button" />
            </div>
            <div className="d-flex justify-content-start w-100 gap-4 mt-4">
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
          <Col xl={6} className="d-flex justify-content-center align-items-center display-right">
            <img src="./fish.png" className="fish" alt="phone" />
            <img src="./test.png" className="phone" alt="phone" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="form mb-5">
          <Col xl={6} className="form">
            <h1 className="text-light text-center">Lacak Pengiriman anda</h1>
            <p className="text-light mt-4">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
            <Form className="d-flex justify-content-start gap-2 mt-4">
              <Form.Group as={Col} md="9" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="Origin" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <button className="btn btn-orange text-light fw-bold" type="submit">
                Lacak
              </button>
            </Form>
          </Col>
          <Col xl={6} className="form">
            <h1 className="text-light text-center">Cek Tarif Pengirman Anda</h1>
            <Form className="d-flex flex-column gap-2 mt-4">
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Control required type="text" placeholder="Origin" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02" className="mt-3 mt-lg-0">
                  <Form.Control required type="text" placeholder="Destination" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <button type="submit" className="btn btn-orange text-light fw-bold">
                Check
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs="12" className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1 className="fw-bold">Keunggulan kami</h1>
            <p className="text-center col-6 mt-3">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="frame-67 flex-row-vcenter-hstart">
          <Col xs="12" md="4" className="services flex-col-hcenter-vcenter">
            <img src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1xut85eztd5-1%3A51?alt=media&token=c86760b2-cd22-46df-b620-1df90535e863" alt="Not Found" className="component-1" />
            <p className="txt-175">Kirim Ke Berbagai Negara</p>
            <p className="txt-747 flex-hcenter">A Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </Col>
          <Col xs="12" md="4" className="services-1 flex-col-hcenter-vcenter">
            <img src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1xut85eztd5-1%3A58?alt=media&token=8b85732c-5553-4ffe-a9af-88deaab4d047" alt="Not Found" className="component-1" />
            <p className="txt-175">Mudah Di Gunakan</p>
            <p className="txt-747 flex-hcenter">A Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </Col>
          <Col xs="12" md="4" className="services-2 flex-col-hcenter-vcenter">
            <img src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1xut85eztd5-1%3A66?alt=media&token=f7e98bc9-e6b4-49e1-81db-37fab832d688" alt="Not Found" className="component-1" />
            <p className="txt-172">Pengiriman Aman</p>
            <p className="txt-747 flex-hcenter">A Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
