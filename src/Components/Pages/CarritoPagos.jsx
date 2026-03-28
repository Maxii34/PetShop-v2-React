import { Col, Container, Row } from "react-bootstrap";
import { CarritoProductos, SectorPagos } from "../index.jsx";
import { useLocation } from "react-router";
import { useState } from "react";

export const CarritoPagos = () => {
  const location = useLocation();
  const { producto } = location.state || {};

  // Estado con la cantidad
  const [productox, setProductox] = useState(1);

  return (
    <>
      <Container>
        <div className="my-3 border-2 border-bottom">
          <h1>Tu Carrito de Compras</h1>
          <span className="text-muted">
            Revisa tus articulos antes de finalizar la compra.
          </span>
        </div>

        <div className="d-flex flex-column my-1 border-1 border-bottom">
          <Row>
            <Col md={12} lg={8} className="my-4">
              <CarritoProductos
                producto={producto}
                setProductox={setProductox}
              />
            </Col>
            <Col md={12} lg={4} className="my-4">
              <SectorPagos producto={producto} cantidad={productox} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
