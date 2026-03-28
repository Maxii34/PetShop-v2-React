import { Row, Col } from "react-bootstrap";
import { SiVisa, SiMastercard, SiMercadopago } from "react-icons/si";
import { FaCreditCard, FaLock } from "react-icons/fa";

export const DatosTarjetas = ({ metodo }) => {
  return (
    <>
      <div className="bg-light p-3 rounded-3">
        {/* Lógica de Iconos: Perfecta */}
        <div className="d-flex justify-content-end gap-2 mb-3 text-muted fs-4">
          {metodo === "card" ? (
            <>
              <SiVisa title="Visa" />
              <SiMastercard title="Mastercard" />
            </>
          ) : (
            <>
              <span
                style={{ fontSize: "1rem", alignSelf: "center" }}
                className="text-muted small"
              ></span>
              <SiMercadopago className="text-primary" title="Mercado Pago" />
            </>
          )}
        </div>

        {/* Formulario */}
        <div className="mb-3">
          <label className="form-label small text-muted">
            Número de Tarjeta
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              {/* Opional: Puedes cambiar este ícono también según el método si quieres */}
              <FaCreditCard className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-0 input-custom"
              placeholder="0000 0000 0000 0000"
            />
          </div>
        </div>

        <Row>
          <Col md={6} className="mb-3">
            <label className="form-label small text-muted">
              Nombre del Titular
            </label>
            <input
              type="text"
              className="form-control input-custom"
              placeholder="Como figura en la tarjeta"
            />
          </Col>
          <Col md={3} className="mb-3">
            <label className="form-label small text-muted">Vencimiento</label>
            <input
              type="text"
              className="form-control input-custom"
              placeholder="MM/AA"
            />
          </Col>
          <Col md={3} className="mb-3">
            <label className="form-label small text-muted">CVC</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control input-custom"
                placeholder="123"
              />
              <span className="input-group-text bg-white border-0 text-muted">
                <FaLock size={12} />
              </span>
            </div>
          </Col>
        </Row>

        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" id="saveCard" />
          <label
            className="form-check-label small text-muted"
            htmlFor="saveCard"
          >
            Guardar tarjeta para futuras compras
          </label>
        </div>
      </div>
    </>
  );
};
