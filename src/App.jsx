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
} from "./Components/index.jsx";
import ProtectorAdmin from "./Components/Routes/ProtectoAdmin.jsx";
import { Dashboard } from "./Components/Pages/Dashboar.jsx";


function App() {
  //lee sessionStorage
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuariokey")) || false;

  const productosLS = JSON.parse(localStorage.getItem("productoskey")) || [];
  //Esado de login de usuario
  const [usuarioLogueado, setusuarioLogueado] = useState(sesionUsuario);
  console.log(usuarioLogueado)
  //Estado que guarda productos
  const [productos, setProductos] = useState(productosLS);

  //Guarda el estado de usuario en sessionStore
  useEffect(() => {
    sessionStorage.setItem("usuariokey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);
  //observa los cambios de productos y actualiza localestorage
  useEffect(() => {
    localStorage.setItem("productoskey", JSON.stringify(productos));
  }, [productos]);

  const crearProducto = (productoNuevo) => {
    setProductos([...productos, productoNuevo]);
    return true;
  };

  // Eliminar producto normal
  const borrarProducto = (idProducto) => {
    const productoFiltrado = productos.filter(
      (itemProducto) => itemProducto.id !== idProducto
    );
    setProductos(productoFiltrado);
    return true;
  };

  // Buscar producto normal
  const buscarProductos = (idProducto) => {
    const productoBuscado = productos.find(
      (itemProducto) => itemProducto.id === idProducto
    );
    return productoBuscado;
  };

  // Modificar producto normal
  const modificarProducto = (idProducto, datosProducto) => {
    const productoActualizado = productos.map((itemProducto) => {
      if (itemProducto.id === idProducto) {
        return {
          ...itemProducto,
          ...datosProducto,
        };
      }
      return itemProducto;
    });
    setProductos(productoActualizado);
    return true;
  };

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
      <SegundoNavbar setProductos={setProductos} handleShow3={handleShow3} />
      <Login
        setusuarioLogueado={setusuarioLogueado}
        handleClose={handleClose}
        show={show}
      />
      <Canvas handleClose3={handleClose3} show3={show3} />
      <CarritoModal handleCloseCarrito={handleCloseCarrito} showCarrito={showCarrito} />
      <Register handleClose2={handleClose2} show2={show2} />
      <main className="">
        <Routes>
          <Route path="/" element={<Inicio productos={productos} />} />
          <Route path="detalle" element={<DetalleProductos />} />
          <Route path="carrito" element={<CarritoPagos />} />
          <Route path="checkout" element={<CheckoutPagos />} />
          <Route path="confirmacion" element={<ConfirmacionPago />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Ruta protegida: /admin */}
          <Route
            path="admin"
            element={<ProtectorAdmin usuarioLogueado={usuarioLogueado} />}
          >
            <Route
              index
              element={
                <Admin
                  productos={productos}
                  setProductos={setProductos}
                  borrarProducto={borrarProducto}
                />
              }
            />
            <Route
              path="crear"
              element={
                <FormularioProductos
                  titulo="Formulario: Agregar producto"
                  crearProducto={crearProducto}
                />
              }
            />
            <Route
              path="editar/:id"
              element={
                <FormularioProductos
                  titulo="Formulario: Editar producto"
                  buscarProducto={buscarProductos}
                  modificarProducto={modificarProducto}
                />
              }
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
