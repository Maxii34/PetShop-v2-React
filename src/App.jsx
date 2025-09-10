import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router"; 
import "./App.css"
import Inicio from "./Components/Pages/Inicio";
import Menu from "./Components/Shared/Menu";
import Footer from "./Components/Shared/Footer";
import Navsegundo from "./Components/Shared/SegundoNavbar";


function App() {
  return (
    <BrowserRouter>
    <Menu />
    <Navsegundo />
      <main>
        <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="" element></Route>
        <Route path="" element></Route>
        <Route path="" element></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;