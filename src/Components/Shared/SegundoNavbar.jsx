import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import productosObj from "../../data/ProductosObjeto";
import ProductoObjetoCR from "../../data/ProductosObjetoCR";

export const SegundoNavbar = ({ setProductos, setProductosOferta, handleShow3 }) => {

const productosPrueba = () => {
  if (Array.isArray(ProductoObjetoCR) && ProductoObjetoCR.length > 0) {
    setProductosOferta(ProductoObjetoCR);
  }
  if (Array.isArray(productosObj) && productosObj.length > 0) {
    setProductos(productosObj);
  }
};



  return (
    <Navbar className="nav-sec">
      <Container>
        <Nav className="w-100 d-flex justify-content-center align-items-center">
          <Nav.Link onClick={handleShow3} className="text-light d-none d-lg-block">
            Perros & Gatos
          </Nav.Link>
          <Nav.Link className="text-light d-none d-lg-block">
            Nuevos Productos
          </Nav.Link>
          <Nav.Link className="text-light d-none d-lg-block">
            Ofertas
          </Nav.Link>
          <Nav.Link className="text-light d-none d-lg-block">
            Veterinaria
          </Nav.Link>
          <Nav.Link className="text-light d-none d-lg-block">
            
          </Nav.Link>
          <Nav.Link className="text-light d-none d-lg-block">
            
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};


