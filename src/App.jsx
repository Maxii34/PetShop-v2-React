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
import FormularioProductos from "./Components/Productos/FormularioProductos";
import Error404 from "./Components/Pages/Error404";
import { useEffect, useState } from "react";

function App() {
  //lee sessionStorage
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuariokey")) || false;

  const productosLS = JSON.parse(localStorage.getItem("productoskey")) || [];
  //Esado de login de usuario
  const [usuarioLogueado, setusuarioLogueado] = useState(sesionUsuario);
  //Estado que guarda productos
  const [productos, setProductos] = useState(productosLS);

  //Guarda el estado de usuario en sessionStore
  useEffect(() => {
    sessionStorage.getItem("usuariokey", JSON.stringify(usuarioLogueado));
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
    const productoFiltrado = productos.filter((itemProducto)=> itemProducto.id !== idProducto)
    setProductos(productoFiltrado)
    return true
  }

  return (
    <BrowserRouter>
      <Menu />
      <Navsegundo />

      <main className=" container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/detalle" element={<DetalleProductos />} />
          <Route
            path="/login"
            element={<Login setusuarioLogueado={setusuarioLogueado} />}
          />
          <Route path="/admin" element={<Admin productos={productos} borrarProducto={borrarProducto} />} />
          <Route
            path="/crear"
            element={
              <FormularioProductos
                titulo="Formulario: Agregar producto"
                crearProducto={crearProducto}
              />
            }
          />
          <Route
            path="/editar"
            element={
              <FormularioProductos titulo="Formulario: Editar producto" />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
