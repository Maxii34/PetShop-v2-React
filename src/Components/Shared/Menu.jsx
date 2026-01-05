import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router";
import { BsCart3 } from "react-icons/bs";


export const Menu = ({ usuarioLogueado, setusuarioLogueado, handleShow, handleShow2, handleShowCarrito }) => {
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
            <NavLink to="/" className="btn-customs">
              Inicio
            </NavLink>

            {usuarioLogueado ? (
              <>
                <NavLink to="/admin" className="btn-customs">
                  Dashboar
                </NavLink>
                                
                {/* ACCIÓN: Usa button + btn-customs */}
                <button
                  className="btn-customs"
                  onClick={cerrarSession}
                  type="button"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              // Si NO está logueado
              <button 
                className="btn-customs" 
                onClick={handleShow}
                type="button"
              >
                Iniciar sesión
              </button>
            )}
            
            {/* BOTÓN REGISTRO */}
            <button 
              className="btn-customs" 
              onClick={handleShow2}
              type="button"
            >
              Registrarse
            </button>
            <button 
              className="btn-customs" 
              onClick={handleShowCarrito}
              type="button"
            >
              <BsCart3 className="fs-5" /> 
            </button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};