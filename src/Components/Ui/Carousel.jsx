import { useEffect } from "react"; // 1. Faltaba importar esto
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos"; 
import "aos/dist/aos.css";
import Baner01 from "/img/Baner01.png";
import Baner02 from "/img/Baner02.png";
import Baner03 from "/img/Baner03.png";

export const CarouselComponente = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Le puse 1000 para que se aprecie bien al entrar
    });
  }, []);

  return (
    /* 2. Quitamos 'indice' y ponemos un número fijo o "0" */
    <div data-aos="fade-right" data-aos-delay="3000">
      <Carousel slide={false} className="shadow">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Baner01}
            alt="First slide"
            loading="lazy"
            style={{ height: "480px", objectFit: "cover", shadow: "lg" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Baner02}
            alt="Second slide"
            loading="lazy"
            style={{ height: "480px", objectFit: "cover", shadow: "lg" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Baner03}
            alt="Third slide"
            loading="lazy"
            style={{ height: "480px", objectFit: "cover", shadow: "lg" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};