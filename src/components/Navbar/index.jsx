import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logopng from "./logo.png"

const Navbar1 = () => {
  return (
    <>
      {[false, ].map((expand) => (
        <Navbar key={expand} bg="light"  expand={expand} >
          <Container fluid style={{ height:"70px"}}>

          <Navbar.Brand className='d-flex justify-content-center' style={{height:"60px"}} href="#"><br/> 
              <img src={logopng} style={{ marginRight : '10px' ,width: '48px', height: '48px',  }} alt="" />
              <h1 >Logistica TyS</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Logistica TyS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/login">Inicia sesion</Nav.Link>
                  <Nav.Link href="/">Lista camiones</Nav.Link>
                  <Nav.Link href="/AgregarCamiones">Agrega tu camion</Nav.Link>
                  
                  
                
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;