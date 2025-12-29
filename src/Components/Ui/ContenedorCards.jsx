import { CardsCarousel } from "../index.jsx";
import "aos/dist/aos.css";
import AOS from "aos"; 
import { useEffect } from "react";


export const ContenedorCards = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000, //
    });
}, []);
  return (
    <>
      <div className="my-5">
        <h4 className="text-center fs-2 ">¡Ofertas Exclusivas para Vos! 🛍️</h4>
        <div className="divContenedor-cards">
          <div className="div-1" data-aos="zoom-in" data-aos-delay="300">
            <CardsCarousel/>
          </div>
        </div>
      </div>
    </>
  );
};
