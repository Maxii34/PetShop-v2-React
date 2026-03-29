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

function App() {
  //lee sessionStorage
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuariokey")) || false;

  //Esado de login de usuario
  const [usuarioLogueado, setusuarioLogueado] = useState(sesionUsuario);
  //Estado que guarda productos
  const [productos, setProductos] = useState([]);

  //Guarda el estado de usuario en sessionStore
  useEffect(() => {
    sessionStorage.setItem("usuariokey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);



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
          <Route path="/" element={<Inicio productos={productos} setProductos={setProductos} />} />
          <Route path="detalle" element={<DetalleProductos />} />
          <Route path="carrito" element={<CarritoPagos />} />
          <Route path="checkout" element={<CheckoutPagos />} />
          <Route path="confirmacion" element={<ConfirmacionPago usuarioLogueado={usuarioLogueado} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sidebar" element={<Sidebar />} />

          {/* Ruta protegida: /admin */}
          <Route
            path="admin"
            element={<ProtectorAdmin usuarioLogueado={usuarioLogueado} />}
          >
            {/* El Dashboard actúa como la plantilla principal */}
            <Route element={<Dashboard />}>
              {/* Ruta base del dashboard, sin nada dentro */}
              <Route index element={<h3 className="text-center text-gray-500 mt-10">Selecciona una opción en el menú</h3>} />

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
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
