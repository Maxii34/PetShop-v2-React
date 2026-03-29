import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import {
  Inicio,
  Menu,
  Footer,
  SegundoNavbar,
  Login,
  DetalleProductos,
  Admin,
  FormularioProductos,
  Error404,
  Register,
  Canvas,
  CarritoModal,
  CarritoPagos,
  CheckoutPagos,
  ConfirmacionPago,
  Dashboard,
  Sidebar,
  Usuarios,
} from "./Components/index.jsx";
import ProtectorAdmin from "./Components/Routes/ProtectoAdmin.jsx";
import ProtectorUser from "./Components/Routes/ProtectorUser.jsx";

function App() {
  // Lee sessionStorage
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuariokey")) || false;

  // Estado de login de usuario
  const [usuarioLogueado, setusuarioLogueado] = useState(sesionUsuario);
  
  // Estado que guarda productos
  const [productos, setProductos] = useState([]);

  // Guarda el estado de usuario en sessionStore
  useEffect(() => {
    sessionStorage.setItem("usuariokey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  // Modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [showCarrito, setShowCarrito] = useState(false);
  const handleCloseCarrito = () => setShowCarrito(false);
  const handleShowCarrito = () => setShowCarrito(true);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setusuarioLogueado={setusuarioLogueado}
        handleShow={handleShow}
        handleShow2={handleShow2}
        handleShowCarrito={handleShowCarrito}
      />
      <SegundoNavbar handleShow3={handleShow3} />
      <Login
        setusuarioLogueado={setusuarioLogueado}
        handleClose={handleClose}
        show={show}
      />
      <Canvas handleClose3={handleClose3} show3={show3} />
      <CarritoModal
        handleCloseCarrito={handleCloseCarrito}
        showCarrito={showCarrito}
      />
      <Register handleClose2={handleClose2} show2={show2} />

      <main className="">
        <Routes>
          {/* ============ RUTAS PÚBLICAS ============ */}
          <Route path="/" element={<Inicio productos={productos} setProductos={setProductos} />} />

          {/* ============ RUTAS PROTEGIDAS: USUARIO ============ */}
          <Route 
            path="user" 
            element={<ProtectorUser usuarioLogueado={usuarioLogueado} />}
          >
            <Route index element={<Inicio productos={productos} setProductos={setProductos} />} />
            <Route path="detalle" element={<DetalleProductos />} />
            <Route path="carrito" element={<CarritoPagos />} />
            <Route path="checkout" element={<CheckoutPagos />} />
            <Route path="confirmacion" element={<ConfirmacionPago usuarioLogueado={usuarioLogueado} />} />
          </Route>

          {/* ============ RUTAS PROTEGIDAS: ADMIN ============ */}
          <Route 
            path="admin" 
            element={<ProtectorAdmin usuarioLogueado={usuarioLogueado} />}
          >
            {/* Dashboard es el LAYOUT principal para todas las subrutas */}
            <Route element={<Dashboard />}>
              
              {/* Ruta index: /admin renderiza el Dashboard con su contenido por defecto */}
              <Route index element={null} />
              
              {/* Subrutas: se renderizan dentro del <Outlet /> de Dashboard */}
              <Route
                path="productos"
                element={
                  <Admin
                    productos={productos}
                    setProductos={setProductos}
                  />
                }
              />
              <Route path="usuarios" element={<Usuarios />} />
              <Route
                path="crear"
                element={
                  <FormularioProductos
                    titulo="Formulario: Agregar producto"
                  />
                }
              />
              <Route
                path="editar/:id"
                element={
                  <FormularioProductos
                    titulo="Formulario: Editar producto"
                  />
                }
              />
            </Route>
          </Route>

          {/* ============ RUTA 404 ============ */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;