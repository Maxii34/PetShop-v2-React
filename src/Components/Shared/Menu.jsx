import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { Logout } from "../helpers/queries";
import { useEffect, useState } from "react";

export const Menu = ({
  usuarioLogueado,
  setusuarioLogueado,
  handleShow,
  handleShow2,
  handleShowCarrito,
}) => {
  const navegacion = useNavigate();

  const [cantidad, setCantidad] = useState(0);

  // 🔹 Cargar cantidad inicial
  useEffect(() => {
    const cantidadGuardada = localStorage.getItem("carritoCantidad");
    setCantidad(Number(cantidadGuardada) || 0);
  }, []);

  // 🔥 Escuchar cambios en tiempo real
  useEffect(() => {
    const actualizarCantidad = () => {
      const cantidadGuardada = localStorage.getItem("carritoCantidad");
      setCantidad(Number(cantidadGuardada) || 0);
    };

    window.addEventListener("carritoActualizado", actualizarCantidad);

    return () => {
      window.removeEventListener("carritoActualizado", actualizarCantidad);
    };
  }, []);

  const cerrarSession = async () => {
    await Logout();

    setusuarioLogueado(false);
    sessionStorage.removeItem("usuariokey");

    // 🔥 limpiar carrito visualmente
    localStorage.removeItem("carritoCantidad");
    setCantidad(0);

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

            {(usuarioLogueado?.usuario?.rol === "admin" ||
              usuarioLogueado?.rol === "admin") && (
              <NavLink to="/admin/crear" className="btn-customs">
                Dashboard Admin
              </NavLink>
            )}

            {(usuarioLogueado?.usuario?.rol === "usuario" ||
              usuarioLogueado?.rol === "usuario") && (
              <span className="text-success fw-bold">
                ¡Hola{" "}
                {usuarioLogueado?.usuario?.nombre ||
                  usuarioLogueado?.nombre}
                !
              </span>
            )}

            {usuarioLogueado ? (
              <button
                className="btn-customs"
                onClick={cerrarSession}
                type="button"
              >
                Cerrar sesión
              </button>
            ) : (
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

            {/* 🛒 CARRITO CON BADGE */}
            <div className="cart-icon-container">
              <button
                className="btn-customs position-relative"
                onClick={handleShowCarrito}
                type="button"
              >
                <BsCart3 className="fs-5" />

                {cantidad > 0 && (
                  <span className="cart-badge">
                    {cantidad}
                  </span>
                )}
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};