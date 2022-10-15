import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">Toko Ikan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Beranda</Nav.Link>
            <Nav.Link href="#action2">Keunggulan</Nav.Link>
            <Nav.Link href="#action2">Fitur Aplikasi</Nav.Link>
            <Nav.Link href="#action2">Testimonial</Nav.Link>
          </Nav>

          <button className="btn btn-orange text-light fw-bold">Download</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
