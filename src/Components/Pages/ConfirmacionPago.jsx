import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle, FaHome, FaPrint } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ConfirmacionPago = () => {
  // Generamos un número de orden ficticio
  const numeroOrden = "#APO-" + Math.floor(Math.random() * 1000000);

  return (
    <div className="confirmacion-container py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {/* Tarjeta Central */}
            <Card className="card-success p-5 text-center">
              {/* Icono Animado */}
              <div className="mb-4">
                <FaCheckCircle className="success-icon" />
              </div>

              <h2 className="fw-bold mb-2">¡Pago Exitoso!</h2>
              <p className="text-muted mb-4">
                Muchas gracias por tu compra. Tu pedido ha sido procesado
                correctamente.
              </p>

              {/* Caja con datos de la orden */}
              <div className="order-number-box">
                <p className="text-muted small mb-1 text-uppercase fw-bold">
                  Número de Orden
                </p>
                <h3 className="fw-bolder text-dark m-0">{numeroOrden}</h3>
              </div>

              <p className="small text-muted mb-4">
                Hemos enviado un correo de confirmación a{" "}
                <span className="fw-bold text-dark">usuario@ejemplo.com</span>{" "}
                con los detalles de tu compra y el seguimiento del envío.
              </p>

              {/* Botones de Acción */}
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link to="/">
                  <Button className="btn-home w-100">
                    <FaHome className="me-2" /> Volver al Inicio
                  </Button>
                </Link>

                <Button
                  variant="outline-secondary"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaPrint className="me-1" /> Imprimir
                </Button>
              </div>
            </Card>

            {/* Breadcrumb final (visual) */}
            <div className="mt-4 text-center text-muted small">
              <Link to={"/carrito"} className="text-success fw-bold">
                1. Carrito
              </Link>
              <span className="mx-2"> &gt; </span>
              <Link to={"/checkout"} className="text-success fw-bold">
                2. Datos y Pago
              </Link>
              <span className="mx-2"> &gt; </span>
              <span className="text-dark fw-bold">3. Confirmación</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
