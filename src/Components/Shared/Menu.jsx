import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router";

export const Menu = ({ usuarioLogueado, setusuarioLogueado, handleShow, handleShow2 }) => {
  const navegacion = useNavigate();

  const cerrarSession = () => {
    setusuarioLogueado(false);
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="nav-pri">
      <Container>
        <Navbar.Brand href="#">Apolo PetShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto text-center align-items-center gap-2"
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
            {usuarioLogueado ? (
              <>
                <NavLink to="/admin" className="nav-link">
                  Productos
                </NavLink>
                <NavLink to="/admincarousel" className="nav-link">
                  Ofertas
                </NavLink>
                <Button
                  className="nav-link"
                  variant="link"
                  onClick={cerrarSession}
                  style={{ textDecoration: "none" }}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <Button 
                className="nav-link" 
                variant="link" 
                onClick={handleShow}
                style={{ textDecoration: "none" }}
              >
                Iniciar sesión
              </Button>
            )}
            <Button className="nav-link" variant="link" onClick={handleShow2} style={{ textDecoration: "none" }}>
              Registrarse
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};