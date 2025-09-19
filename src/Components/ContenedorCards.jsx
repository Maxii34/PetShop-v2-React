import { Container } from "react-bootstrap";
import CardsCarousel from "./Productos/CardsCarousel";


const ContenedorCards = ({productosOferta}) => {
  return (
    <Container>
      <h4 className="text-center fs-2 my-4">PROMOCIONES IMPERDIBLES 🎉</h4>
      <div className="divContenedor-cards"
      >
        {productosOferta.map((producto) => (
          <div
            className="div-1"
            key={producto.id}
          >
            <CardsCarousel productosOferta={productosOferta} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ContenedorCards;
