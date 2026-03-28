import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./EstilosCards.css";
import { Link } from "react-router";
import Swal from "sweetalert2";

export const SectorPagos = ({ producto, cantidad }) => {
  const [descuento, setDescuento] = useState(0);
  const [codigoAplicado, setCodigoAplicado] = useState("");

  // Calcular subtotal
  const subtotal = producto?.precio * cantidad || 0;
  const envio = subtotal >= 17000 ? 0 : 5.0;
  const total = subtotal + envio - descuento;

  // Función para formatear precio
  const formatearPrecio = (numero) => {
    return numero.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const aplicarDescuento = () => {
    const codigo = document
      .getElementById("codigoDescuento")
      .value.trim()
      .toUpperCase();

    if (codigo === "MASCOTA15") {
      const desc = subtotal * 0.15;
      setDescuento(desc);
      setCodigoAplicado(codigo);
      Swal.fire({
        icon: "success",
        title: "¡Código aplicado!",
        text: "10% de descuento",
        timer: 1000,
        showConfirmButton: false,
      });
    } else if (codigo === "") {
      Swal.fire({
        icon: "error",
        title: "Por favor ingresa un código",
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Código de descuento no válido",
        timer: 1000,
        showConfirmButton: false,
      });
      setDescuento(0);
      setCodigoAplicado("");
    }
  };

  return (
    <div
      className="card-pagos w-100% p-4"
      style={{ backgroundColor: "#fffbf6", borderRadius: "20px" }}
    >
      <h3 className="mb-4 fw-bold">Resumen del Pedido</h3>

      {/* Producto y cantidad */}
      <div className="d-flex justify-content-between mb-2 pb-2 border-bottom flex-wrap">
        <span className="text-muted w-100 mb-2">
          <strong>{producto?.nombre}</strong>
        </span>
        <span className="text-muted">x {cantidad}</span>
        <span className="fw-bold">$ {formatearPrecio(subtotal)}</span>
      </div>

      {/* Envío */}
      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted">
          Envío Estimado <i className="bi bi-truck"></i>
        </span>
        <span className="fw-bold">
          {envio === 0 ? "GRATIS" : `$ ${formatearPrecio(envio)}`}
        </span>
      </div>

      {/* Descuento */}
      <div className="d-flex justify-content-between mb-4">
        <span className="text-success">Descuento</span>
        <span className="text-success fw-bold">
          -$ {formatearPrecio(descuento)}
        </span>
      </div>

      {/* INPUT CÓDIGO */}
      <Form.Group className="mb-4 position-relative">
        <Form.Label className="small text-muted fw-bold">
          CÓDIGO DE DESCUENTO
        </Form.Label>
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Ej: MASCOTA10"
            style={{ borderRadius: "20px" }}
            id="codigoDescuento"
          />
          <Button
            variant="warning"
            style={{
              borderRadius: "20px",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={aplicarDescuento}
          >
            APLICAR
          </Button>
        </div>
      </Form.Group>

      <hr />

      {/* TOTAL */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="fw-bold fs-5">Total</span>
        <div className="text-end">
          <small className="text-muted d-block" style={{ fontSize: "0.7rem" }}>
            IVA incluido
          </small>
          <span className="fw-bold fs-2">$ {formatearPrecio(total)}</span>
        </div>
      </div>

      {/* BOTÓN FINALIZAR */}
      <Link
        to="/checkout"
        className="w-100 mb-3 btn btn-warning"
        style={{ borderRadius: "20px", fontWeight: "bold" }}
        state={{
          producto,
          cantidad,
          subtotal: formatearPrecio(subtotal),
          envio: formatearPrecio(envio),
          descuento: formatearPrecio(descuento),
          total: formatearPrecio(total),
        }}
      >
        FINALIZAR COMPRA →
      </Link>

      {/* Iconos de pago */}
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
