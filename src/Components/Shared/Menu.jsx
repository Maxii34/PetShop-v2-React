import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { Logout } from "../helpers/queries";

export const Menu = ({
  usuarioLogueado,
  setusuarioLogueado,
  handleShow,
  handleShow2,
  handleShowCarrito,
}) => {
  const navegacion = useNavigate();

  // Transfromamos cerrarSession a asíncrona (async)
  const cerrarSession = async () => {
    // Mandamos la petición al backend para que anule la cookie
    await Logout();

    // Limpiamos el estado en React indicando que ya no hay usuario
    setusuarioLogueado(false);

    // Opcional pero recomendado: forzar la limpieza del sessionStorage
    sessionStorage.removeItem("usuariokey");

    // Redirigimos al inicio
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="nav-pri py-3">
      <Container>
        <Navbar.Brand href="#">Apolo PetShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto text-center align-items-center gap-3 mt-3 mt-lg-0"
            navbarScroll
          >
            <NavLink to="/" className="btn-customs">
              Inicio
            </NavLink>

            {/* Validamos: Si HAY un usuario logueado */}
            {usuarioLogueado ? (
              <>
                
                {usuarioLogueado.rol === "admin" && (
                  <NavLink to="/admin" className="btn-customs">
                    Dashboard Admin
                  </NavLink>
                )}

                {usuarioLogueado.rol === "usuario" && (
                  <span className="text-light">
                    ¡Hola {usuarioLogueado.nombre}!
                  </span>
                )}

                <button
                  className="btn-customs"
                  onClick={cerrarSession}
                  type="button"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              // Si NO hay usuario logueado, mostramos iniciar sesión y registro
              <>
                <button
                  className="btn-customs"
                  onClick={handleShow}
                  type="button"
                >
                  Iniciar sesión
                </button>
                <button
                  className="btn-customs"
                  onClick={handleShow2}
                  type="button"
                >
                  Registrarse
                </button>
              </>
            )}

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
