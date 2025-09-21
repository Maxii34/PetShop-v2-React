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

  const productosLSCR =
    JSON.parse(localStorage.getItem("productosCRKey")) || [];
  //Esado de login de usuario
  const [usuarioLogueado, setusuarioLogueado] = useState(sesionUsuario);
  //Estado que guarda productos
  const [productos, setProductos] = useState(productosLS);

  const [productosOferta, setProductosOferta] = useState(productosLSCR);

  //Guarda el estado de usuario en sessionStore
  useEffect(() => {
    sessionStorage.setItem("usuariokey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);
  //observa los cambios de productos y actualiza localestorage
  useEffect(() => {
    localStorage.setItem("productoskey", JSON.stringify(productos));
  }, [productos]);

  useEffect(() => {
    localStorage.setItem("productosCRKey", JSON.stringify(productosOferta));
  }, [productosOferta]);

  const crearProducto = (productoNuevo) => {
    setProductos([...productos, productoNuevo]);
    return true;
  };

  const crearProductoCR = (productoNuevoF) => {
    setProductosOferta([...productosOferta, productoNuevoF]);
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

  // Eliminar producto en Carrousel
  const borrarProductoCR = (idProductoF) => {
    const productoFilCarrousel = productosOferta.filter(
      (itemProductoF) => itemProductoF.id !== idProductoF
    );
    setProductosOferta(productoFilCarrousel);
    return true;
  };

  // Buscar producto normal
  const buscarProductos = (idProducto) => {
    const productoBuscado = productos.find(
      (itemProducto) => itemProducto.id === idProducto
    );
    return productoBuscado;
  };

  // Buscar producto en Carrousel
  const buscarProductosCR = (idProductoF) => {
    const productoBuscadoCR = productosOferta.find(
      (itemProductoF) => itemProductoF.id === idProductoF
    );
    return productoBuscadoCR;
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

  // Modificar producto en Carrousel
  const modificarProductoCR = (idProductoF, datosProductoF) => {
    const productoActualizadoCR = productosOferta.map((itemProductoF) => {
      if (itemProductoF.id === idProductoF) {
        return {
          ...itemProductoF,
          ...datosProductoF,
        };
      }
      return itemProductoF;
    });
    setProductosOferta(productoActualizadoCR);
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
      <Navsegundo setProductos={setProductos} setProductosOferta={setProductosOferta} />
      <Login
        setusuarioLogueado={setusuarioLogueado}
        handleClose={handleClose}
        show={show}
      />
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Inicio productos={productos} productosOferta={productosOferta}  />} />
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
                  borrarProductoCR={borrarProductoCR}
                />
              }
            />
            <Route
              path="crear"
              element={
                <FormularioCarrousel
                  titulo="Formulario: Agregar productos en carousel"
                  crearProductoCR={crearProductoCR}
                />
              }
            />
            <Route
              path="editar/:id"
              element={
                <FormularioCarrousel
                  titulo="Formulario: Editar productos de carousel"
                  buscarProductosCR={buscarProductosCR}
                  modificarProductoCR={modificarProductoCR}
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
