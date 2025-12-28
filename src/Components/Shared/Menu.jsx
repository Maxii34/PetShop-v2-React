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
    <Navbar expand="lg" className="nav-pri py-3">
      <Container>
        <Navbar.Brand href="#">Apolo PetShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          {/* gap-3 separa los botones entre sí */}
          <Nav
            className="ms-auto text-center align-items-center gap-3 mt-3 mt-lg-0"
            navbarScroll
          >
            {/* ENLACE: Usa NavLink + btn-custom */}
            <NavLink to="/" className="btn-custom">
              Inicio
            </NavLink>

            {usuarioLogueado ? (
              <>
                <NavLink to="/admin" className="btn-custom">
                  Productos
                </NavLink>
                
                <NavLink to="/admincarousel" className="btn-custom">
                  Ofertas
                </NavLink>
                
                {/* ACCIÓN: Usa button + btn-custom */}
                <button
                  className="btn-custom"
                  onClick={cerrarSession}
                  type="button"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              // Si NO está logueado
              <button 
                className="btn-custom" 
                onClick={handleShow}
                type="button"
              >
                Iniciar sesión
              </button>
            )}
            
            {/* BOTÓN REGISTRO */}
            <button 
              className="btn-custom" 
              onClick={handleShow2}
              type="button"
            >
              Registrarse
            </button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};