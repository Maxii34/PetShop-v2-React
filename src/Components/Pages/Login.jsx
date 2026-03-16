import { Card, Button, Row, Col, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";

export const Login = ({ setusuarioLogueado, handleClose, show }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = async (data) => {
    const usuarioLogueado = {
      email: data.email,
      password: data.password,
    };

    const respuesta = await login(usuarioLogueado);

    if (respuesta) {
      setusuarioLogueado(respuesta);
      console.log(respuesta)
      sessionStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));

      Swal.fire({
        title: "¡Login exitoso!",
        text: "Has iniciado sesión correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      reset();
      handleClose();
      navegacion("/");
    } else {
      Swal.fire({
        title: "Error",
        text: "Error al iniciar sesión. Corrige tus credenciales.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row xs={12}>
          <Col>
            <Card.Body>
              <h4 className="text-center fs-2 display-1">
                <b>Iniciar sesión</b>
              </h4>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: usuario@mail.com"
                    {...register("email", {
                      required: "El email es un dato obligatorio",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message:
                          "El email debe ser un correo valido por ej: usuario@mail.com",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa una contraseña"
                    {...register("password", {
                      required: "La contraseña es un dato obligatorio",
                      minLength: {
                        value: 8,
                        message:
                          "La contraseña debe tener al menos 8 caracteres",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Debe incluir al menos: un número, una mayúscula, una minúscula y un carácter especial (@$!%*?&)",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </Form.Group>

                <Button variant="success" type="submit">
                  Iniciar sesión
                </Button>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
