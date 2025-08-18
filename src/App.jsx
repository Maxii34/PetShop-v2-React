import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navprimero from './Components/Navbar';
import Navsegundo from './Components/SegundoNavbar';
import Footer from './Components/Footer';
import CarouselComponente from './Components/Carousel';
import ContainerGrid from './Components/ContainerGrid';
import CarouselProductos from './Components/CarouselProductos';
import MuralInstagran from './Components/MuralInstagran';
import './App.css'



function App() {
  return (
    <>
      <Navprimero />
      <Navsegundo />

      <main>
      <CarouselComponente />
        <h1 className='text-center my-4'>TUS NUEVOS FAVORITOS 🛍️</h1>
      <ContainerGrid/>
      <CarouselProductos />
      <MuralInstagran />
      </main>

      <Footer />
    </>
  )
}

export default App
