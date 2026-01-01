import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCreditCard,
  FaRegCreditCard,
  FaLock,
  FaTruck,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { DatosTarjetas } from "../Ui/DatosTarjetas";
import { Link } from "react-router";

export const CheckoutPagos = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <Container className="py-5 checkout-container" fluid="md">
      <div className="mb-4">
        <h2 className="fw-bold mb-3">Finalizar Compra</h2>
        <div className="d-flex text-muted small">
          <Link to={"/carrito"} className="text-success fw-bold">1. Carrito</Link>
          <span className="mx-2"> &gt; </span>
          <span className="text-dark fw-bold">2. Datos y Pago</span>
          <span className="mx-2"> &gt; </span>
          <span>3. Confirmación</span>
        </div>
      </div>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="p-4 mb-4 card-checkout">
            <h5 className="fw-bold mb-4 d-flex align-items-center">
              <span className="bg-light p-2 rounded-circle me-3 text-warning">
                <FaMapMarkerAlt />
              </span>
              Dirección de Envío
            </h5>

            <Row className="g-3">
              <Col md={6}>
                <label className="form-label text-muted small">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control input-custom"
                  placeholder="Ej: Juan Pérez"
                />
              </Col>
              <Col md={6}>
                <label className="form-label text-muted small">Teléfono</label>
                <input
                  type="tel"
                  className="form-control input-custom"
                  placeholder="+54 9 11..."
                />
              </Col>
              <Col xs={12}>
                <label className="form-label text-muted small">Dirección</label>
                <input
                  type="text"
                  className="form-control input-custom"
                  placeholder="Calle, número, piso..."
                />
              </Col>
              <Col md={6}>
                <label className="form-label text-muted small">Ciudad</label>
                <input type="text" className="form-control input-custom" />
              </Col>
              <Col md={6}>
                <label className="form-label text-muted small">
                  Código Postal
                </label>
                <input type="text" className="form-control input-custom" />
              </Col>
            </Row>
          </Card>

          <Card className="p-4 card-checkout">
            <h5 className="fw-bold mb-4 d-flex align-items-center">
              <span className="bg-light p-2 rounded-circle me-3 text-warning">
                <FaRegCreditCard />
              </span>
              Método de Pago
            </h5>
            <div className="d-flex gap-3 mb-4">
              <div
                className={`rounded p-3 w-50 d-flex align-items-center gap-2 payment-option ${
                  paymentMethod === "card" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                <FaCreditCard className="text-warning fs-4" />
                <div>
                  <h6 className="m-0 fw-bold">Tarjeta Crédito/Débito</h6>
                  <small className="text-muted">Tarjetas bancarias</small>
                </div>
              </div>

              <div
                className={`rounded p-3 w-50 d-flex align-items-center gap-2 payment-option ${
                  paymentMethod === "mercadopago" ? "active" : "desactivado"
                }`}
                onClick={() => setPaymentMethod("mercadopago")}
              >
                <SiMercadopago className="text-primary fs-4" />
                <div>
                  <h6 className="m-0 fw-bold">Mercado Pago</h6>
                  <small className="text-muted">
                    Dinero en cuenta / QR u Tarjeta
                  </small>
                </div>
              </div>
            </div>
            {paymentMethod && <DatosTarjetas metodo={paymentMethod} />}
            {!paymentMethod && (
              <div className="text-center text-muted p-3 bg-light rounded border border-dashed">
                <small>
                  Por favor, selecciona un método de pago para continuar.
                </small>
              </div>
            )}{" "}
          </Card>
        </Col>

        {/* COLUMNA DERECHA: RESUMEN */}
        <Col lg={4}>
          <Card
            className="p-4 sticky-top card-checkout"
            style={{ top: "20px" }}
          >
            <h4 className="fw-bold mb-4">Resumen del Pedido</h4>

            <div className="d-flex justify-content-between mb-2 text-muted">
              <span>Subtotal (3 items)</span>
              <span>$77.99</span>
            </div>
            <div className="d-flex justify-content-between mb-2 text-muted">
              <span>
                Envío Estimado <FaTruck className="ms-1" />
              </span>
              <span>$5.00</span>
            </div>
            <div className="d-flex justify-content-between mb-4 text-success">
              <span>Descuento</span>
              <span>-$0.00</span>
            </div>

            <hr className="text-muted my-4" />

            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="h5 fw-bold m-0">Total</span>
              <div>
                <span className="small text-muted d-block text-end fw-normal">
                  IVA incluido
                </span>
                <span className="h3 fw-bold m-0">$82.99</span>
              </div>
            </div>

            <button className="btn-checkout-primary shadow-sm">
              <FaLock size={14} /> PAGAR AHORA
            </button>

            <div className="mt-3 text-center">
              <small className="text-muted d-flex justify-content-center align-items-center gap-2">
                <FaLock size={12} /> Pagos procesados de forma segura
              </small>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
