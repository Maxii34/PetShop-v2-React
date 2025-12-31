import { Form, Button } from "react-bootstrap";
import "./EstilosCards.css"; // Asegúrate de tener tus estilos base aquí

export const SectorPagos = () => {
  return (
    <div
      className="card-pagos w-100% p-4"
      style={{ backgroundColor: "#fffbf6", borderRadius: "20px" }}
    >
      <h3 className="mb-4 fw-bold">Resumen del Pedido</h3>

      {/* --- FILA 1: Subtotal --- */}
      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted">Subtotal</span>
        <span className="fw-bold">$77.99</span>
      </div>

      {/* --- FILA 2: Envío --- */}
      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted">
          Envío Estimado <i className="bi bi-truck"></i> {/* Icono opcional */}
        </span>
        <span className="fw-bold">$5.00</span>
      </div>

      {/* --- FILA 3: Descuento --- */}
      <div className="d-flex justify-content-between mb-4">
        <span className="text-success">Descuento</span>
        <span className="text-success fw-bold">-$0.00</span>
      </div>

      {/* --- INPUT CODIGO --- */}
      <Form.Group className="mb-4 position-relative">
        <Form.Label className="small text-muted fw-bold">
          CÓDIGO DE DESCUENTO
        </Form.Label>
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Ej: MASCOTA10"
            style={{ borderRadius: "20px" }}
          />
          <Button
            variant="warning"
            style={{
              borderRadius: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            APLICAR
          </Button>
        </div>
      </Form.Group>

      <hr />

      {/* --- TOTAL --- */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="fw-bold fs-5">Total</span>
        <div className="text-end">
          <small className="text-muted d-block" style={{ fontSize: "0.7rem" }}>
            IVA incluido
          </small>
          <span className="fw-bold fs-2">$82.99</span>
        </div>
      </div>

      {/* --- BOTON FINALIZAR --- */}
      <Button
        variant="warning"
        size="lg"
        className="w-100 mb-3"
        style={{
          borderRadius: "30px",
          color: "white",
          fontWeight: "bold",
          padding: "15px",
        }}
      >
        FINALIZAR COMPRA →
      </Button>

      {/* Iconos de pago simples */}
      <div className="text-center text-muted small">
        <span className="mx-1">VISA</span>
        <span className="mx-1">Naranja x</span>
        <span className="mx-1">Mastercard</span>
        <span className="ms-2">
          <i className="bi bi-lock-fill"></i> Pago Seguro
        </span>
      </div>
    </div>
  );
};
