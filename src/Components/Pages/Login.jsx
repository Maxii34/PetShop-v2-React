import { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";

const showNotification = (title, message, type) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const bgColor = type === "success" ? "#198754" : "#dc3545";

  Toast.fire({
    icon: type,
    title: title,
    text: message,
    background: bgColor,
    color: "#fff",
  });
};

export const Login = ({ setusuarioLogueado, handleClose, show }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navegacion = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    const usuarioLogueado = {
      email: data.email,
      password: data.password,
    };
    const respuesta = await login(usuarioLogueado);

    if (respuesta && respuesta.ok) {
      setusuarioLogueado(respuesta.usuario);
      showNotification(
        "¡Éxito!",
        "Has iniciado sesión correctamente",
        "success",
      );
      reset();
      handleClose();

      setTimeout(() => {
        if (respuesta.usuario.rol === "admin") {
          navegacion("/admin/productos");
        } else {
          navegacion("/");
        }
      }, 500);
    } else {
      showNotification(
        "Error",
        "Verifica tus credenciales e intenta nuevamente",
        "error",
      );
    }
    setLoading(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="sm"
      className="login-modal"
      style={{
        "--bs-modal-border-color": "#e9ecef",
      }}
    >
      <Modal.Header
        closeButton
        className="border-0 bg-white pb-0"
        style={{ borderBottom: "2px solid #198754" }}
      >
        <Modal.Title
          className="w-100 text-center fw-bold"
          style={{ color: "#198754", fontSize: "1.5rem" }}
        >
          Iniciar Sesión
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="py-4">
        {loading ? (
          <div className="text-center py-5">
            <Spinner
              animation="border"
              role="status"
              style={{ color: "#198754", width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <p className="mt-4 text-muted fw-500">Validando credenciales...</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="fw-600 mb-2" style={{ color: "#495057" }}>
                Correo Electrónico
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="usuario@ejemplo.com"
                className={`form-control-lg ${errors.email ? "is-invalid" : ""}`}
                style={{
                  borderColor: errors.email ? "#dc3545" : "#ddd",
                  padding: "0.75rem 1rem",
                  fontSize: "0.95rem",
                }}
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Ingresa un email válido",
                  },
                })}
              />
              {errors.email && (
                <small className="d-block text-danger mt-2">
                  {errors.email.message}
                </small>
              )}
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="fw-600 mb-2" style={{ color: "#495057" }}>
                Contraseña
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="••••••••"
                className={`form-control-lg ${errors.password ? "is-invalid" : ""}`}
                style={{
                  borderColor: errors.password ? "#dc3545" : "#ddd",
                  padding: "0.75rem 1rem",
                  fontSize: "0.95rem",
                  letterSpacing: "0.1em",
                }}
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 8,
                    message: "Mínimo 8 caracteres",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Incluye: mayúscula, minúscula, número y símbolo (@$!%*?&)",
                  },
                })}
              />
              {errors.password && (
                <small className="d-block text-danger mt-2">
                  {errors.password.message}
                </small>
              )}
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              disabled={loading}
              className="w-100 fw-600"
              size="lg"
              style={{
                backgroundColor: "#198754",
                borderColor: "#198754",
                padding: "0.75rem",
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#157347";
                e.target.style.borderColor = "#157347";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#198754";
                e.target.style.borderColor = "#198754";
              }}
            >
              {loading ? "Validando..." : "Iniciar Sesión"}
            </Button>
          </Form>
        )}
      </Modal.Body>

      <Modal.Footer className="border-0 bg-white pt-0">
        <Button
          variant="outline-secondary"
          onClick={handleClose}
          disabled={loading}
          className="w-100 fw-600 shadow-md"
          style={{
            color: "#6c757d",
            borderColor: "#dee2e6",
            padding: "0.5rem",
          }}
        >
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
