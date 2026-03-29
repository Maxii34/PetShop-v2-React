import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { CardsProductos } from "./Cards";
import AOS from "aos";
import "aos/dist/aos.css";
import "./EstilosCards.css";

export const ContainerGrid = ({ productos, handleShowCarrito }) => {
  const [visible, setVisible] = useState(10);

  // Inicializamos AOS al cargar el componente
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const mostrarMas = () => {
    setVisible((prev) => prev + 5);
  };

  const mostrarMenos = () => {
    setVisible(10);
    irIniciocard();
  };

  const irIniciocard = () => {
    const seccion = document.getElementById("InicioCards");
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container fluid>
      <div id="InicioCards" className="my-2">
        <h1 className="text-center fw-bold display-5 fs-2">
          Lo mejor para tus compañeros peludos 🐾✨
        </h1>
      </div>

      <div className="grid-container">
        {productos.slice(0, visible).map((itemProducto, indice) => (
          /* Envolvemos la card en un div con la animación */
          <div
            key={indice}
            data-aos="fade-up"
            data-aos-delay={indice * 100} // Efecto escalera
          >
            <CardsProductos producto={itemProducto} handleShowCarrito={handleShowCarrito} />
          </div>
        ))}
      </div>

      <div className="text-center mt-3">
        {visible < productos.length ? (
          <Button className="btn-grid btn-grid--more" onClick={mostrarMas}>
            Ver más
          </Button>
        ) : (
          <Button className="btn-grid btn-grid--less" onClick={mostrarMenos}>
            Ver menos
          </Button>
        )}
      </div>
    </Container>
  );
};
