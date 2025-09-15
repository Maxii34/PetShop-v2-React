import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navsegundo = () => {
  return (
    <Navbar className="nav-sec">
      <Container>
        <Nav className="w-100 d-flex justify-content-center align-items-center">
          <NavDropdown
            title={<span className="text-light">Perros</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">
              Alimentos Balanceados
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<span className="text-light">Gatos</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">
              Alimentos Balanceados
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<span className="text-light">Otros</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">
              Alimentos Balanceados
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#action1" className="text-light">
            Promociones
          </Nav.Link>
          <Nav.Link href="#action1" className="text-light d-none d-lg-block">
            Nuevos Productos
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navsegundo;
