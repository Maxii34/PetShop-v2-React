import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./Components/Pages/Inicio";
import Menu from "./Components/Shared/Menu";
import Footer from "./Components/Shared/Footer";
import Navsegundo from "./Components/Shared/SegundoNavbar";
import Login from "./Components/Pages/Login";
import DetalleProductos from "./Components/Pages/DetalleProductos";
import Admin from "./Components/Pages/Admin";
import AdminCarousel from "./Components/Pages/AdminCarousel";
import FormularioProductos from "./Components/Productos/FormularioProductos";
import Error404 from "./Components/Pages/Error404";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./Components/Routes/ProtectoAdmin";
import FormularioCarrousel from "./Components/Productos/FormularioCarrousel";

function App() {
  //lee sessionStorage
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuariokey")) || false;

  const productosLS = JSON.parse(localStorage.getItem("productoskey")) || [];
  //Esado de login de usuario
  const [usuarioLogueado, setusuarioLogueado] = useState(sesionUsuario);
  //Estado que guarda productos
  const [productos, setProductos] = useState(productosLS);

  const [productosOferta, setProductosOferta] = useState({});
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

  const borrarProducto = (idProducto) => {
    const productoFiltrado = productos.filter(
      (itemProducto) => itemProducto.id !== idProducto
    );
    setProductos(productoFiltrado);
    return true;
  };

  const borrarTodosLosProductos = () => {};

  const buscarProductos = (idProducto) => {
    const productoBuscado = productos.find(
      (itemProducto) => itemProducto.id === idProducto
    );
    return productoBuscado;
  };

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

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setusuarioLogueado={setusuarioLogueado}
        handleShow={handleShow}
      />
      <Navsegundo />
      <Login
        setusuarioLogueado={setusuarioLogueado}
        handleClose={handleClose}
        show={show}
      />
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Inicio productos={productos} />} />
          <Route path="detalle" element={<DetalleProductos />} />

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
                  borrarTodosLosProductos={borrarTodosLosProductos}
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

          {/* Ruta protegida: /admincarousel */}
          <Route
            path="admincarousel"
            element={<ProtectorAdmin usuarioLogueado={usuarioLogueado} />}
          >
            <Route
              index
              element={
                <AdminCarousel
                  productosOferta={productosOferta}
                  setProductosOferta={setProductosOferta}
                  borrarProducto={borrarProducto}
                />
              }
            />
            <Route
              path="crear"
              element={
                <FormularioCarrousel
                  titulo="Formulario: Agregar a carousel"
                  // Aquí podrías pasar otra función si manejas carousel aparte
                />
              }
            />
            <Route
              path="editar/:id"
              element={
                <FormularioCarrousel titulo="Formulario: Editar en carousel" />
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
