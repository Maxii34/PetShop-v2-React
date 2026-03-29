import { Row, Col } from "react-bootstrap";
import { SiVisa, SiMastercard, SiMercadopago } from "react-icons/si";
import { FaCreditCard, FaLock, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";

export const DatosTarjetas = ({ metodo }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      numerTarjeta: "",
      nombreTitular: "",
      vencimiento: "",
      cvc: "",
      guardarTarjeta: false,
    },
  });

  const numeroValue = watch("numerTarjeta");
  const nombreValue = watch("nombreTitular");
  const vencimientoValue = watch("vencimiento");
  const cvcValue = watch("cvc");

  // Función para formatear el número de tarjeta
  const formatearNumeroTarjeta = (value) => {
    return value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
  };

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

        {/* NÚMERO DE TARJETA */}
        <div className="mb-3">
          <label className="form-label small text-muted">
            Número de Tarjeta
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaCreditCard className="text-muted" />
            </span>
            <input
              type="text"
              className={`form-control border-start-0 ps-0 input-custom ${
                errors.numerTarjeta
                  ? "is-invalid"
                  : numeroValue
                  ? "is-valid"
                  : ""
              }`}
              placeholder="0000 0000 0000 0000"
              {...register("numerTarjeta", {
                required: "El número de tarjeta es requerido",
                minLength: {
                  value: 16,
                  message: "El número debe tener 16 dígitos",
                },
                pattern: {
                  value: /^[0-9\s]{19}$/,
                  message: "Formato inválido (0000 0000 0000 0000)",
                },
                validate: (value) => {
                  // Validación Luhn
                  const digits = value.replace(/\s/g, "");
                  let sum = 0;
                  let isEven = false;

                  for (let i = digits.length - 1; i >= 0; i--) {
                    let digit = parseInt(digits.charAt(i), 10);

                    if (isEven) {
                      digit *= 2;
                      if (digit > 9) {
                        digit -= 9;
                      }
                    }

                    sum += digit;
                    isEven = !isEven;
                  }

                  return sum % 10 === 0 ? true : "Número de tarjeta inválido";
                },
              })}
              onInput={(e) => {
                e.target.value = formatearNumeroTarjeta(e.target.value);
              }}
            />
          </div>
          {numeroValue && !errors.numerTarjeta && (
            <span className="text-success small d-flex align-items-center mt-1">
              <FaCheckCircle size={12} className="me-1" /> Válido
            </span>
          )}
          {errors.numerTarjeta && (
            <small className="text-danger d-flex align-items-center mt-1">
              <FaExclamationCircle className="me-1" />
              {errors.numerTarjeta.message}
            </small>
          )}
        </div>

        <Row>
          {/* NOMBRE DEL TITULAR */}
          <Col md={6} className="mb-3">
            <label className="form-label small text-muted">
              Nombre del Titular
            </label>
            <input
              type="text"
              className={`form-control input-custom ${
                errors.nombreTitular
                  ? "is-invalid"
                  : nombreValue
                  ? "is-valid"
                  : ""
              }`}
              placeholder="Como figura en la tarjeta"
              {...register("nombreTitular", {
                required: "El nombre del titular es requerido",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: "Solo se permiten letras y espacios",
                },
              })}
            />
            {nombreValue && !errors.nombreTitular && (
              <span className="text-success small d-flex align-items-center mt-1">
                <FaCheckCircle size={12} className="me-1" /> Válido
              </span>
            )}
            {errors.nombreTitular && (
              <small className="text-danger d-flex align-items-center mt-1">
                <FaExclamationCircle className="me-1" />
                {errors.nombreTitular.message}
              </small>
            )}
          </Col>

          {/* VENCIMIENTO */}
          <Col md={3} className="mb-3">
            <label className="form-label small text-muted">Vencimiento</label>
            <input
              type="text"
              className={`form-control input-custom ${
                errors.vencimiento
                  ? "is-invalid"
                  : vencimientoValue
                  ? "is-valid"
                  : ""
              }`}
              placeholder="MM/AA"
              {...register("vencimiento", {
                required: "El vencimiento es requerido",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Formato inválido (MM/AA)",
                },
                validate: (value) => {
                  const [month, year] = value.split("/");
                  const currentDate = new Date();
                  const currentYear = currentDate.getFullYear() % 100;
                  const currentMonth = currentDate.getMonth() + 1;

                  const inputYear = parseInt(year, 10);
                  const inputMonth = parseInt(month, 10);

                  if (inputYear < currentYear) {
                    return "La tarjeta está vencida";
                  }

                  if (inputYear === currentYear && inputMonth < currentMonth) {
                    return "La tarjeta está vencida";
                  }

                  return true;
                },
              })}
              onInput={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length >= 2) {
                  value = value.slice(0, 2) + "/" + value.slice(2, 4);
                }
                e.target.value = value;
              }}
            />
            {vencimientoValue && !errors.vencimiento && (
              <span className="text-success small d-flex align-items-center mt-1">
                <FaCheckCircle size={12} className="me-1" /> Válido
              </span>
            )}
            {errors.vencimiento && (
              <small className="text-danger d-flex align-items-center mt-1">
                <FaExclamationCircle className="me-1" />
                {errors.vencimiento.message}
              </small>
            )}
          </Col>

          {/* CVC */}
          <Col md={3} className="mb-3">
            <label className="form-label small text-muted">CVC</label>
            <div className="input-group">
              <input
                type="text"
                className={`form-control input-custom ${
                  errors.cvc ? "is-invalid" : cvcValue ? "is-valid" : ""
                }`}
                placeholder="123"
                {...register("cvc", {
                  required: "El CVC es requerido",
                  pattern: {
                    value: /^\d{3,4}$/,
                    message: "CVC debe tener 3 o 4 dígitos",
                  },
                })}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
                }}
              />
              <span className="input-group-text bg-white border-0 text-muted">
                <FaLock size={12} />
              </span>
            </div>
            {cvcValue && !errors.cvc && (
              <span className="text-success small d-flex align-items-center mt-1">
                <FaCheckCircle size={12} className="me-1" /> Válido
              </span>
            )}
            {errors.cvc && (
              <small className="text-danger d-flex align-items-center mt-1">
                <FaExclamationCircle className="me-1" />
                {errors.cvc.message}
              </small>
            )}
          </Col>
        </Row>

        {/* CHECKBOX GUARDAR TARJETA */}
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="saveCard"
            {...register("guardarTarjeta")}
          />
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