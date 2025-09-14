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
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";


function App() {
  //lee sessionStorage
  const sesionUsuario = JSON.parse(sessionStorage.getItem("usuariokey")) || false
  //Esado de login de usuario
  const [usuarioLogueado, setusuarioLogueado] = useState(sesionUsuario)
  //Guarda el estado de usuario en sessionStore
  useEffect(() => {
    sessionStorage.getItem("usuariokey",JSON.stringify(usuarioLogueado))
  },[])

  return (
    <BrowserRouter>
      <Menu />
      <Navsegundo />
      <Container>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/detalle" element={<DetalleProductos />} />
            <Route path="/login" element={<Login setusuarioLogueado={setusuarioLogueado}/>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/crear" element={<FormularioProductos />} />
            <Route path="/editar" element={<FormularioProductos />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
