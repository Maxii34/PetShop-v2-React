import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CardsProductos from "./Cards";

const ContainerGrid = ({ productos }) => {
  const [visible, setVisible] = useState(10); // cantidad inicial de cards visibles

  const mostrarMas = () => {
    setVisible((prev) => prev + 5); // suma 5 más cada vez que se presionas
  };

  const mostrarMenos = () => {
    setVisible(10); // vuelve al estado inicial en lugar de restar
    irIniciocard(); // suve al inicio de las cards
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
          <CardsProductos key={indice} producto={itemProducto} />
        ))}
      </div>

      {/* Se muestra el btn "ver mas" solo si hay mas productos en prodcutos que en visible y si estan todos visible "Ver menos".*/}
      <div className="text-center mt-3">
        {visible < productos.length ? (
          <Button variant="primary" className="shadow" onClick={mostrarMas}>
            Ver más
          </Button>
        ) : (
          <Button variant="secondary" className="shadow" onClick={mostrarMenos}>
            Ver menos
          </Button>
        )}
      </div>
    </Container>
  );
};

export default ContainerGrid;
