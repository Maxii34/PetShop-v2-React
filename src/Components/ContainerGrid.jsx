import { Container } from "react-bootstrap";
import CardsProductos from "./Cards";

const ContainerGrid = () => {
  return (
    <Container>
      <div className="grid-container">
        <CardsProductos
          nombreProducto="pam integral"
          precio="$ 69,000"
          precioEfectivo="61,500"
          cuotas="3"
          precioCuotas="11,200"
        />
        <CardsProductos
          nombreProducto="pam integral"
          precio="$ 69,000"
          precioEfectivo="61,500"
          cuotas="3"
          precioCuotas="11,200"
        />
        <CardsProductos
          nombreProducto="pam integral"
          precio="$ 69,000"
          precioEfectivo="61,500"
          cuotas="3"
          precioCuotas="11,200"
        />
        <CardsProductos
          nombreProducto="pam integral"
          precio="$ 69,000"
          precioEfectivo="61,500"
          cuotas="3"
          precioCuotas="11,200"
        />
        <CardsProductos
          nombreProducto="pam integral"
          precio="$ 69,000"
          precioEfectivo="61,500"
          cuotas="3"
          precioCuotas="11,200"
        />
      </div>
    </Container>
  );
};

export default ContainerGrid;
