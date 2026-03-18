import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const SegundoNavbar = ({ handleShow3 }) => {

  return (
    <Navbar className="nav-sec">
      <Container>
        <Nav className="w-100 d-flex justify-content-center align-items-center">
          
          {/* --- GRUPO 1: SIEMPRE VISIBLES --- */}
          <Nav.Link onClick={handleShow3} className="text-light px-2">
            Perros & Gatos
          </Nav.Link>

          <Nav.Link className="text-light px-2">
            Ofertas
          </Nav.Link>

           <Nav.Link className="text-light px-2">
            Veterinaria
          </Nav.Link>

          {/* --- GRUPO 2: SOLO VISIBLES EN PC (d-none d-lg-block) --- */}
          {/* Estas opciones desaparecen en pantallas chicas */}
          <Nav.Link href="#nuevos" className="text-light px-2 d-none d-lg-block">
            Nuevos Productos
          </Nav.Link>
          
          <Nav.Link href="#destacados" className="text-light px-2 d-none d-lg-block">
             Destacados
          </Nav.Link>
          
          <Nav.Link href="#contacto" className="text-light px-2 d-none d-lg-block">
             Contacto
          </Nav.Link>

          {/* --- GRUPO 3: SOLO VISIBLE EN MÓVIL (d-lg-none) --- */}
          {/* Este dropdown contiene las mismas opciones del Grupo 2, pero solo aparece en celular */}
          <NavDropdown
            className="d-lg-none" 
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