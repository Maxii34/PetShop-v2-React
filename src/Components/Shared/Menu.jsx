import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router";

const Navprimero = ({ usuarioLogueado, setusuarioLogueado, handleShow }) => {
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
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="¿Que estas buscando.?"
                className="me-2 w-100"
                aria-label="Search"
              />
              <Button variant="outline-success" className="me-4">
                Search
              </Button>
            </Form>
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
                  className={"nav-link"}
                  variant=""
                  onClick={cerrarSession}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <Button className="nav-link" variant="" onClick={handleShow}>
                Iniciar sesión
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navprimero;
