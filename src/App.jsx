import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navprimero from './Components/Navbar';
import Navsegundo from './Components/SegundoNavbar';
import Footer from './Components/Footer';
import CarouselComponente from './Components/Carousel';
import ContainerGrid from './Components/ContainerGrid';
import './App.css'



function App() {
  return (
    <>
      <Navprimero />
      <Navsegundo />
      <main>
      <CarouselComponente />
      <ContainerGrid/>
      </main>
      <Footer />
    </>
  )
}

export default App
