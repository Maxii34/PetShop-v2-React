import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCreditCard,
  FaRegCreditCard,
  FaLock,
  FaTruck,
  FaMapMarkerAlt,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { DatosTarjetas } from "../Ui/DatosTarjetas";
import { Link, useNavigate } from "react-router";
import { useLocation } from "react-router";
import { crearOrdenCarrito } from "../helpers/pagos.queries";
import Swal from "sweetalert2";

export const CheckoutPagos = ({ usuarioLogueado }) => {
  const location = useLocation();
  const { productos, subtotal, envio, descuento, total } =
    location.state || {};
  const cantidad = productos?.reduce((acc, item) => acc + (item.cantidad || 1), 0) || 0;
  const [paymentMethod, setPaymentMethod] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombreCompleto: "",
      telefono: "",
      direccion: "",
      ciudad: "",
      codigoPostal: "",
    },
  });

  const nombreValue = watch("nombreCompleto");
  const telefonoValue = watch("telefono");
  const direccionValue = watch("direccion");
  const ciudadValue = watch("ciudad");
  const codigoPostalValue = watch("codigoPostal");

  const onSubmit = async (data) => {
    if (!paymentMethod) {
      Swal.fire({
        icon: "error",
        title: "Método de pago requerido",
        text: "Por favor selecciona un método de pago antes de continuar",
      });
      return;
    }

    if (paymentMethod === "mercadopago") {
      try {
        const productosCarrito = productos.map((p) => ({
          id: p._id || p.id,
          quantity: p.cantidad || 1,
        }));

        const response = await crearOrdenCarrito(
          usuarioLogueado._id,
          productosCarrito
        );

        if (response.init_point) {
          window.location.href = response.init_point;
          return;
        } else {
          throw new Error("No se pudo obtener el enlace de pago");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al procesar el pago",
          text: error.message || "Hubo un error al conectar con Mercado Pago.",
        });
        return;
      }
    }

    // Lógica para otros métodos (ej: simulación de tarjeta)
    navigate("/user/confirmacion", {
      state: {
        productos,
        cantidad,
        subtotal,
        envio,
        descuento,
        total,
        metodoPago: paymentMethod,
        ...data,
      },
    });
  };

  const isFormValid =
    !errors.nombreCompleto &&
    !errors.telefono &&
    !errors.direccion &&
    !errors.ciudad &&
    !errors.codigoPostal &&
    nombreValue &&
    telefonoValue &&
    direccionValue &&
    ciudadValue &&
    codigoPostalValue;


  return (
    <Container className="py-5 checkout-container" fluid="md">
      <div className="mb-4">
        <h2 className="fw-bold mb-3">Finalizar Compra</h2>
        <div className="d-flex text-muted small">
          <Link to={"/carrito"} className="text-success fw-bold">
            1. Carrito
          </Link>
          <span className="mx-2"> &gt; </span>
          <span className="text-dark fw-bold">2. Datos y Pago</span>
          <span className="mx-2"> &gt; </span>
          <span>3. Confirmación</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
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
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className={`form-control input-custom ${
                        errors.nombreCompleto
                          ? "is-invalid"
                          : nombreValue
                            ? "is-valid"
                            : ""
                      }`}
                      placeholder="Ej: Juan Pérez"
                      {...register("nombreCompleto", {
                        required: "El nombre completo es requerido",
                        minLength: {
                          value: 3,
                          message: "El nombre debe tener al menos 3 caracteres",
                        },
                        pattern: {
                          value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                          message:
                            "El nombre solo puede contener letras y espacios",
                        },
                      })}
                    />
                    {nombreValue && !errors.nombreCompleto && (
                      <span className="text-success small d-flex align-items-center mt-1">
                        <FaCheckCircle size={12} className="me-1" /> Válido
                      </span>
                    )}
                  </div>
                  {errors.nombreCompleto && (
                    <small className="text-danger d-flex align-items-center mt-1">
                      <FaExclamationCircle className="me-1" />
                      {errors.nombreCompleto.message}
                    </small>
                  )}
                </Col>

                <Col md={6}>
                  <label className="form-label text-muted small">
                    Teléfono
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      className={`form-control input-custom ${
                        errors.telefono
                          ? "is-invalid"
                          : telefonoValue
                            ? "is-valid"
                            : ""
                      }`}
                      placeholder="+54 9 11 1234 5678"
                      {...register("telefono", {
                        required: "El teléfono es requerido",
                        pattern: {
                          value:
                            /^(\+?54)?(\s)?(\d{2,4})?(\s)?(\d{3,4})?(\s)?(\d{4})$/,
                          message:
                            "Ingresa un teléfono válido (ej: +54 9 11 1234 5678)",
                        },
                      })}
                    />
                    {telefonoValue && !errors.telefono && (
                      <span className="text-success small d-flex align-items-center mt-1">
                        <FaCheckCircle size={12} className="me-1" /> Válido
                      </span>
                    )}
                  </div>
                  {errors.telefono && (
                    <small className="text-danger d-flex align-items-center mt-1">
                      <FaExclamationCircle className="me-1" />
                      {errors.telefono.message}
                    </small>
                  )}
                </Col>

                <Col xs={12}>
                  <label className="form-label text-muted small">
                    Dirección
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className={`form-control input-custom ${
                        errors.direccion
                          ? "is-invalid"
                          : direccionValue
                            ? "is-valid"
                            : ""
                      }`}
                      placeholder="Calle, número, piso..."
                      {...register("direccion", {
                        required: "La dirección es requerida",
                        minLength: {
                          value: 5,
                          message:
                            "La dirección debe tener al menos 5 caracteres",
                        },
                      })}
                    />
                    {direccionValue && !errors.direccion && (
                      <span className="text-success small d-flex align-items-center mt-1">
                        <FaCheckCircle size={12} className="me-1" /> Válido
                      </span>
                    )}
                  </div>
                  {errors.direccion && (
                    <small className="text-danger d-flex align-items-center mt-1">
                      <FaExclamationCircle className="me-1" />
                      {errors.direccion.message}
                    </small>
                  )}
                </Col>

                <Col md={6}>
                  <label className="form-label text-muted small">Ciudad</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className={`form-control input-custom ${
                        errors.ciudad
                          ? "is-invalid"
                          : ciudadValue
                            ? "is-valid"
                            : ""
                      }`}
                      placeholder="Ej: Buenos Aires"
                      {...register("ciudad", {
                        required: "La ciudad es requerida",
                        minLength: {
                          value: 2,
                          message: "La ciudad debe tener al menos 2 caracteres",
                        },
                      })}
                    />
                    {ciudadValue && !errors.ciudad && (
                      <span className="text-success small d-flex align-items-center mt-1">
                        <FaCheckCircle size={12} className="me-1" /> Válido
                      </span>
                    )}
                  </div>
                  {errors.ciudad && (
                    <small className="text-danger d-flex align-items-center mt-1">
                      <FaExclamationCircle className="me-1" />
                      {errors.ciudad.message}
                    </small>
                  )}
                </Col>

                <Col md={6}>
                  <label className="form-label text-muted small">
                    Código Postal
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className={`form-control input-custom ${
                        errors.codigoPostal
                          ? "is-invalid"
                          : codigoPostalValue
                            ? "is-valid"
                            : ""
                      }`}
                      placeholder="Ej: 1425"
                      {...register("codigoPostal", {
                        required: "El código postal es requerido",
                        pattern: {
                          value: /^\d{4,5}$/,
                          message: "El código postal debe tener 4 o 5 dígitos",
                        },
                      })}
                    />
                    {codigoPostalValue && !errors.codigoPostal && (
                      <span className="text-success small d-flex align-items-center mt-1">
                        <FaCheckCircle size={12} className="me-1" /> Válido
                      </span>
                    )}
                  </div>
                  {errors.codigoPostal && (
                    <small className="text-danger d-flex align-items-center mt-1">
                      <FaExclamationCircle className="me-1" />
                      {errors.codigoPostal.message}
                    </small>
                  )}
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
                    paymentMethod === "mercadopago" ? "active" : ""
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
              {paymentMethod && paymentMethod !== "mercadopago" && (
                <DatosTarjetas metodo={paymentMethod} />
              )}
              {!paymentMethod && (
                <div className="text-center text-muted p-3 bg-light rounded border border-dashed">
                  <small>
                    Por favor, selecciona un método de pago para continuar.
                  </small>
                </div>
              )}
            </Card>
          </Col>

          <Col lg={4}>
            <Card
              className="p-4 sticky-top card-checkout"
              style={{ top: "20px" }}
            >
              <h4 className="fw-bold mb-4">Resumen del Pedido</h4>

              <div className="d-flex justify-content-between mb-2 text-muted">
                <span>Subtotal ({cantidad} items)</span>
                <span>$ {subtotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2 text-muted">
                <span>
                  Envío Estimado <FaTruck className="ms-1" />
                </span>
                <span>$ {envio}</span>
              </div>
              <div className="d-flex justify-content-between mb-4 text-success">
                <span>Descuento</span>
                <span>$ {descuento}</span>
              </div>

              <hr className="text-muted my-4" />

              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="h5 fw-bold m-0">Total</span>
                <div>
                  <span className="small text-muted d-block text-end fw-normal">
                    IVA incluido
                  </span>
                  <span className="h3 fw-bold m-0">$ {total}</span>
                </div>
              </div>

              <button
                type="submit"
                className={`w-100 fw-bold py-3 shadow-sm btn ${
                  paymentMethod === "mercadopago" 
                    ? "btn-primary d-flex align-items-center justify-content-center gap-2" 
                    : "btn-success"
                }`}
                style={{ 
                  borderRadius: "10px",
                  ...(paymentMethod === "mercadopago" && { backgroundColor: "#009ee3", border: "none" })
                }}
                disabled={!isFormValid || !paymentMethod || isSubmitting}
              >
                {isSubmitting ? (
                  "Procesando..."
                ) : paymentMethod === "mercadopago" ? (
                  <>
                    <SiMercadopago size={24} /> PAGAR CON MERCADO PAGO
                  </>
                ) : (
                  <>
                    <FaLock size={14} className="me-2" /> PAGAR AHORA
                  </>
                )}
              </button>

              <div className="mt-3 text-center">
                <small className="text-muted d-flex justify-content-center align-items-center gap-2">
                  <FaLock size={12} /> Pagos procesados de forma segura
                </small>
              </div>
            </Card>
          </Col>
        </Row>
      </form>
    </Container>
  );
};
