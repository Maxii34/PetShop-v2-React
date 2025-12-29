import { useEffect } from "react"; // 1. Faltaba importar esto
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos"; 
import "aos/dist/aos.css";

export const CarouselComponente = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Le puse 1000 para que se aprecie bien al entrar
    });
  }, []);

  return (
    /* 2. Quitamos 'indice' y ponemos un número fijo o "0" */
    <div data-aos="fade-right" data-aos-delay="600">
      <Carousel slide={false} className="shadow">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placedog.net/1000/400" 
            alt="First slide"
            loading="lazy"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placedog.net/1001/400"
            alt="Second slide"
            loading="lazy"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placedog.net/1002/400"
            alt="Third slide"
            loading="lazy"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};