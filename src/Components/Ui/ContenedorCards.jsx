import { CardsCarousel } from "../index.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

export const ContenedorCards = ({ productos, handleShowCarrito }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const productosEnOferta =
    productos?.filter((producto) => producto.enOferta === true) || [];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? productosEnOferta.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === productosEnOferta.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div id="ofertas" className="my-5 pt-3">
        <h4 className="text-center fs-2 mb-4 p-0 m-0">
          ¡Ofertas Exclusivas para Vos! 🛍️
        </h4>

        {/* CARRUSEL BOOTSTRAP */}
        <div className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            {productosEnOferta.map((producto, index) => (
              <div
                key={producto._id}
                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              >
                <div className="row g-3 justify-content-center">
                  {/* Mostrar 5 productos a la vez */}
                  {[0, 1, 2, 3, 4].map((offset) => {
                    const productIndex = (activeIndex + offset) % productosEnOferta.length;
                    const prod = productosEnOferta[productIndex];
                    return (
                      <div key={prod._id} className="col-12 col-sm-6 col-md-4 col-lg-2-4 col-xl-2-4">
                        <CardsCarousel
                          producto={prod}
                          handleShowCarrito={handleShowCarrito}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* BOTONES */}
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
            style={{ width: "auto", position: "absolute", left: "10px" }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
            style={{ width: "auto", position: "absolute", right: "10px" }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </>
  );
};