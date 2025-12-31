import { Container } from "react-bootstrap";
import { CarritoProductos } from "../Ui/CarritoProductos";

export const CarritoPagos = () => {
  return (
    <>
      <Container>
        <div className=" my-3 border-2 border-bottom">
          <h1 className="">Tu Carrito de Compras</h1>
          <div></div>
          <span className=" text-muted">
            Revisa tus articulos antes de finalizar la compra.
          </span>
        </div>

        <div>
          <CarritoProductos />
        </div>
      </Container>
    </>
  );
};
