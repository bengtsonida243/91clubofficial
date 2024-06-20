import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "./image/91_Club_Official_Logo.webp";

import "./Navbar.css";


function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3 sticky-top">
          <Container fluid>
            <Navbar.Brand href="#home" className="text-light ">
              <img
                alt=""
                src={Logo}
                width="200"
                height="auto"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='light' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Navbar.Brand href="#home" className="text-light ">
              <img
                alt=""
                src={Logo}
                width="200"
                height="auto"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;