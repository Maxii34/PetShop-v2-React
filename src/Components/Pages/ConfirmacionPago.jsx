import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle, FaHome, FaPrint } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const ConfirmacionPago = ({usuarioLogueado}) => {
  const location = useLocation();

  const {
    producto,
    cantidad,
    subtotal,
    envio,
    descuento,
    total,
    nombreCompleto,
    direccion,
    ciudad,
  } = location.state || {};

  const numeroOrden = "#APO-" + Math.floor(Math.random() * 1000000);

  // Redirigir si no hay datos
  if (!total) {
    return (
      <Container className="py-5 text-center">
        <h3>No hay datos de compra</h3>
        <Link to="/carrito">
          <Button variant="success">Volver al Carrito</Button>
        </Link>
      </Container>
    );
  }

  return (
    <div className="confirmacion-container py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {/* Tarjeta de Éxito */}
            <Card className="card-success p-5 text-center shadow-md">
              <div className="mb-4">
                <FaCheckCircle style={{ fontSize: "3rem", color: "#28a745" }} />
              </div>

              <h2 className="fw-bold mb-2">¡Pago Exitoso!</h2>
              <p className="text-muted mb-4">
                Tu pedido ha sido procesado correctamente.
              </p>

              <div
                className="p-4 rounded mb-4"
                style={{
                  backgroundColor: "#f0f8f5",
                  border: "2px solid #28a745",
                }}
              >
                <p className="text-muted small mb-1 fw-bold">NÚMERO DE ORDEN</p>
                <h3 className="fw-bolder m-0">{numeroOrden}</h3>
              </div>

              <p className="small text-muted mb-4">
                Hemos enviado un correo con los datos de la compra a:{" "}
                <span className="fw-bold">{usuarioLogueado?.email}</span>
              </p>

              <div className="d-flex gap-2 justify-content-center mt-3">
                <Link to="/" className="text-decoration-none">
                  <Button variant="success" className="px-4 py-2 d-flex align-items-center justify-content-center h-100">
                    <FaHome className="me-2" /> Volver
                  </Button>
                </Link>
                <Button variant="outline-secondary" className="px-4 py-2 d-flex align-items-center justify-content-center h-100" onClick={() => window.print()}>
                  <FaPrint className="me-2" /> Imprimir
                </Button>
              </div>
            </Card>

            {/* Resumen */}
            <Card className="mt-4 p-4 shadow-md border-0 rounded-4">
              <h6 className="fw-bold mb-3">Resumen del Pedido</h6>

              <div className="mb-3">
                <p className="text-muted small mb-1">{producto?.nombre}</p>
                <p className="fw-bold">
                  Cantidad: {cantidad} x ${(producto?.precio || (subtotal * cantidad)).toLocaleString("es-AR")}
                </p>
              </div>

              <hr className="my-3" />

              <Row className="mb-2">
                <Col>
                  <span className="text-muted">Subtotal</span>
                </Col>
                <Col className="text-end">
                  <strong>$ {subtotal?.toLocaleString("es-AR")}</strong>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col>
                  <span className="text-muted">Envío</span>
                </Col>
                <Col className="text-end">
                  <strong>$ {envio?.toLocaleString("es-AR")}</strong>
                </Col>
              </Row>

              {descuento > 0 && (
                <Row className="mb-2">
                  <Col>
                    <span className="text-success">Descuento</span>
                  </Col>
                  <Col className="text-end">
                    <strong className="text-success">
                      - $ {descuento?.toLocaleString("es-AR")}
                    </strong>
                  </Col>
                </Row>
              )}

              <hr className="my-3" />

              <Row>
                <Col>
                  <span className="fw-bold">Total</span>
                </Col>
                <Col className="text-end">
                  <h5 className="fw-bold m-0 text-success">
                    $ {total?.toLocaleString("es-AR")}
                  </h5>
                </Col>
              </Row>
            </Card>

            {/* Envío */}
            {nombreCompleto && (
              <Card className="mt-4 p-4">
                <h6 className="fw-bold mb-3">Dirección de Envío</h6>
                <p className="mb-1">
                  <strong>{nombreCompleto}</strong>
                </p>
                <p className="mb-1 text-muted small">{direccion}</p>
                <p className="text-muted small">{ciudad}</p>
              </Card>
            )}

            {/* Breadcrumb */}
            <div className="mt-4 text-center text-muted small">
              <Link to="/carrito" className="text-success fw-bold">
                1. Carrito
              </Link>
              <span className="mx-2"> &gt; </span>
              <Link to="/checkout" className="text-success fw-bold">
                2. Datos y Pago
              </Link>
              <span className="mx-2"> &gt; </span>
              <span className="text-dark fw-bold">3. Confirmación</span>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        @media print {
          button { display: none !important; }
        }
      `}</style>
    </div>
  );
};