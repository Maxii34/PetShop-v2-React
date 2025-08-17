import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navprimero from './Components/Navbar';
import Navsegundo from './Components/SegundoNavbar';
import Footer from './Components/Footer';
import './App.css'
import CarouselComponente from './Components/Carousel';


function App() {
  return (
    <>
      <Navprimero />
      <Navsegundo />
      <main>
      <CarouselComponente />

      </main>
      <Footer />
    </>
  )
}

export default App
