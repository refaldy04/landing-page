// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <>
      <Navbar />
      <Container fluid className="header">
        <Row>
          <Col xl={6} className="d-flex mt-5 flex-column justify-content-center align-items-start display-left">
            <h1 className="tagline">Kirim berbagai jenis ikan dengan mudah</h1>
            <p className="text-secondary fw-semibold mt-4">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <div className="d-flex mt-5 flex-column flex-md-row gap-3 justify-content-start w-100">
              <img src="./google-play.svg" alt="google" className="button" />
              <img src="./apple-store.svg" alt="apple" className="button" />
            </div>
            <div className="d-flex justify-content-start w-100 gap-4 mt-5">
              <div>
                <h1 className="clr-primary">1.9k+</h1>
                <p className="text-secondary fw-semibold">Active Users</p>
              </div>
              <div>
                <h1 className="clr-primary">20++</h1>
                <p className="text-secondary fw-semibold">New Features</p>
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
            <Form className="d-flex justify-content-between gap-2 mt-4 pe-5">
              <Form.Group as={Col} xs="10" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="Origin" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid">
                <button as={Col} className="w-full btn btn-orange text-light fw-bold col-auto" type="submit">
                  Lacak
                </button>
              </div>
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
          <Col xs="12" className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
            <h1 className="fw-bold">Keunggulan kami</h1>
            <p className="text-center col-6 mt-3 fs-5">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5">
          <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center mt-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1xut85eztd5-1%3A51?alt=media&token=c86760b2-cd22-46df-b620-1df90535e863" alt="Not Found" className="component-1" />
            <p className="txt-175 text-center">Kirim Ke Berbagai Negara</p>
            <p className="txt-747 flex-hcenter">A Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </Col>
          <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center mt-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1xut85eztd5-1%3A58?alt=media&token=8b85732c-5553-4ffe-a9af-88deaab4d047" alt="Not Found" className="component-1" />
            <p className="txt-175 text-center">Mudah Di Gunakan</p>
            <p className="txt-747 flex-hcenter">A Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </Col>
          <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center mt-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1xut85eztd5-1%3A66?alt=media&token=f7e98bc9-e6b4-49e1-81db-37fab832d688" alt="Not Found" className="component-1" />
            <p className="txt-172 text-center">Pengiriman Aman</p>
            <p className="txt-747 flex-hcenter">A Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </Col>
        </Row>
      </Container>
      <Container className="metode-pengiriman" fluid>
        <Row>
          <Col md="6" className="d-flex flex-column justify-content-start justify-content-md-center align-items-start align-items-md-center pe-0 pe-md-5 dis-left">
            <h1 className="text-center text-md-start mx-auto">Berbagai Metode Pengiriman</h1>
            <p as={Col} md="6" className="text-center text-md-start text-secondary fw-semibold">
              A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
          </Col>
          <Col md="6" className="d-flex justify-content-center align-items-center gap-2 dis-right">
            <img src="./fish2.png" alt="not found" className="fish2" />
            <img src="./phone2.png" alt="not found" className="phone2" />
          </Col>
        </Row>
      </Container>
      <Container className="status-pengiriman" fluid>
        <Row>
          <Col md="6" className="d-flex justify-content-center align-items-center gap-2 dis-left">
            <img src="./phone3.png" alt="not found" className="phone3" />
            <img src="./fish3.png" alt="not found" className="fish3" />
          </Col>
          <Col md="6" className="d-flex flex-column justify-content-start justify-content-md-center align-items-start align-items-md-center ps-md-5 dis-right">
            <h1 className="text-center text-md-start mx-auto mt-5 mt-md-0">Lacak status pengiriman anda</h1>
            <p as={Col} md="6" className="text-center text-md-start text-secondary fw-semibold">
              A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. A Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="metode-pengiriman" fluid>
        <Row>
          <Col md="6" className="d-flex flex-column justify-content-start justify-content-md-center align-items-start align-items-md-center pe-0 pe-md-5 dis-left">
            <h1 className="text-center text-md-start mx-auto">Cek schedule pengiriman anda</h1>
            <p as={Col} md="6" className="text-center text-md-start text-secondary fw-semibold">
              A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
          </Col>
          <Col md="6" className="d-flex justify-content-center align-items-center gap-2 dis-right">
            <img src="./fish4.png" alt="not found" className="fish2" />
            <img src="./phone4.png" alt="not found" className="phone2" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xl="12" className="d-flex flex-column align-items-center mt-5">
            <h1 className="text-center">Testimonial</h1>
            <p className="mt-4 w-50 text-center text-secondary fw-semibold">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </Col>
          <Carousel as={Col} xs="12" md="6" />
        </Row>
      </Container>
      <Container className="download-app mt-5 mb-5 ovflw-hidden" fluid>
        <Row>
          <Col md="6" className="ovflw-hidden">
            <h1 className="text-light">Available and Download Anytime!</h1>
            <p className="text-light mt-4">A Lorem Ipsum is simply dummy text of the printing and </p>
            <div className="d-flex mt-5 flex-column flex-md-row gap-3 justify-content-start w-100">
              <img src="./google-play.svg" alt="google" className="button" />
              <img src="./apple-store.svg" alt="apple" className="button" />
            </div>
          </Col>
          <Col md="6" className="d-flex justify-content-end mt-5 ovflw-hidden">
            <img src="./courrier.png" class="courrier" alt="not found" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="">
          <Col md="6" className="ovflw-hidden">
            <img src="./JBG.png" class="img-fluid rounded-top footer" alt="" />
            <p className="text-secondary fw-semibold mt-4 mb-4 w-75">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <div className="d-flex gap-4 mb-5">
              <img src="./facebook.png" alt="" />
              <img src="./instagram.png" alt="" />
              <img src="./twitter.png" alt="" />
            </div>
          </Col>
          <Col md="6" className="d-flex flex-column flex-md-row gap-3 gap-md-5 mt-md-5 mb-5 footer">
            <div className="ovflw-hidden">
              <h3>Menu Bantuan</h3>
              <p>Keunggulan</p>
              <p>Fitur Aplikasi</p>
              <p>Testimoni</p>
            </div>
            <div className="ovflw-hidden">
              <h3>Informasi kontak</h3>
              <p>0812-9797-1227</p>
              <p>0812-9797-1227</p>
              <p>Jbgtranshipping@gmail.com</p>
            </div>
          </Col>
          <Col xs="12" className="mt-5 d-flex justify-content-center">
            All rights reserved@2022
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
