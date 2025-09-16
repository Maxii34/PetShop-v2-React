import { Container } from "react-bootstrap";
import CardsProductos from "./Cards";

const ContainerGrid = ({ productos }) => {
  return (
    <Container fluid>
      <div className="grid-container">
        {productos.map((itemProducto, indice) => (
          <CardsProductos key={indice} producto={itemProducto} />
        ))}
      </div>
    </Container>
  );
};

export default ContainerGrid;
