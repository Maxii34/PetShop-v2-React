import { Col, Container, Row } from "react-bootstrap";
import { CarritoProductos, SectorPagos } from "../index.jsx";

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

        <div className="d-flex flex-column my-4 border-1 border-bottom">
          <Row>
            <Col md={12} lg={8} className="my-4">
              <CarritoProductos />
              <CarritoProductos />
              <CarritoProductos />
            </Col>
            <Col md={12} lg={4} className="my-4">
              <SectorPagos />
            </Col>
          </Row>
        </div>

        <div className="d-flex flex-column my-4"></div>
      </Container>
    </>
  );
};
