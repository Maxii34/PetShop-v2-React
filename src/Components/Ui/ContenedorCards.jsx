import { CardsCarousel } from "../index.jsx";
import "aos/dist/aos.css";
import AOS from "aos"; 
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const ContenedorCards = ({ productos, handleShowCarrito }) => {
  useEffect(() => {
  AOS.init({
    duration: 1000, //
    });
}, []);

  const productosEnOferta = productos?.filter((producto) => producto.enOferta === true) || [];

  return (
    <>
        <div className="my-5 ">
          <h4 className="text-center fs-2 mb-4 p-0 m-0">¡Ofertas Exclusivas para Vos! 🛍️</h4>
            <div className="grid-container p-0 m-0">
            {productosEnOferta.map((producto, index) => (
              <div 
                key={producto._id} 
                data-aos="zoom-in" 
                data-aos-delay={`${300 + Math.min(index * 100, 1000)}`}
              >
                <CardsCarousel producto={producto} handleShowCarrito={handleShowCarrito} />
              </div>
            ))}
            </div>
        </div>
    </>
  );
};
