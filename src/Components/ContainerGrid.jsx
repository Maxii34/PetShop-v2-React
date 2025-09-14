import { Container } from "react-bootstrap";
import CardsProductos from "./Cards";


const ContainerGrid = () => {
  return (
    <Container fluid>
      <div className="grid-container">
       <CardsProductos />
      </div>
    </Container>
  );
};

export default ContainerGrid;
