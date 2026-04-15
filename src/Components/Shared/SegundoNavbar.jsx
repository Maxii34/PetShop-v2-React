import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const SegundoNavbar = ({ handleShow3 }) => {
  return (
    <Navbar className="nav-sec">
      <Container>
        <Nav className="w-100 d-flex justify-content-center align-items-center">

          {/* GRUPO 1 */}
          <Nav.Link onClick={handleShow3} className="nav-link-custom px-2">
            Perros & Gatos
          </Nav.Link>

          <Nav.Link className="nav-link-custom px-2" href="#ofertas">
            Ofertas
          </Nav.Link>

          <Nav.Link className="nav-link-custom px-2" href="/404">
            Veterinaria
          </Nav.Link>

          {/* GRUPO 2 */}
          <Nav.Link href="/404" className="nav-link-custom px-2 d-none d-lg-block" >
            Nuevos Productos
          </Nav.Link>

          <Nav.Link href="/404" className="nav-link-custom px-2 d-none d-lg-block">
            Destacados
          </Nav.Link>

          <Nav.Link href="/404" className="nav-link-custom px-2 d-none d-lg-block">
            Contacto
          </Nav.Link>

          {/* GRUPO 3 (MOBILE) */}
          <NavDropdown
            className="dropdown-custom d-lg-none"
            title={<span className="text-light">Más</span>}
            id="basic-nav-dropdown"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#nuevos">Nuevos Productos</NavDropdown.Item>
            <NavDropdown.Item href="#destacados">Destacados</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#contacto">Contacto</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Container>
    </Navbar>
  );
};