import { Card, Button, Row, Col, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuario } from "../helpers/queries";

export const Register = ({ handleClose2, show2 }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const usuarioNuevo = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      password: data.password,
      rol: "usuario",
    };
    const respuesta = await crearUsuario(usuarioNuevo);
    if (respuesta.ok) {
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Tu cuenta ha sido creada correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      reset();
      handleClose2();
    } else {
      Swal.fire({
        title: "Error",
        text: "Error al crear la cuenta " + respuesta.mensaje,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <>
      <Modal show={show2} onHide={handleClose2} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row xs={12}>
            <Col>
              <Card.Body>
                <h4 className="text-center fs-2 display-1 mb-4">
                  <b>Registrate</b>
                </h4>
                <Form onSubmit={handleSubmit(onsubmit)}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formBasicNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingresa tu nombre"
                          {...register("nombre", {
                            required: "El nombre es obligatorio",
                            minLength: {
                              value: 2,
                              message: "Mínimo 2 caracteres",
                            },
                            maxLength: {
                              value: 50,
                              message: "Máximo 50 caracteres",
                            },
                          })}
                        />
                        <Form.Text className="text-danger">
                          {errors.nombre?.message}
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formBasicApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingresa tu apellido"
                          {...register("apellido", {
                            required: "El apellido es obligatorio",
                            minLength: {
                              value: 2,
                              message: "Mínimo 2 caracteres",
                            },
                            maxLength: {
                              value: 50,
                              message: "Máximo 50 caracteres",
                            },
                          })}
                        />
                        <Form.Text className="text-danger">
                          {errors.apellido?.message}
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="correo@ejemplo.com"
                          {...register("email", {
                            required: "El email es obligatorio",
                            pattern: {
                              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              message: "Ingresa un correo válido",
                            },
                          })}
                        />
                        <Form.Text className="text-danger">
                          {errors.email?.message}
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Mínimo 8 caracteres"
                          {...register("password", {
                            required: "La contraseña es obligatoria",
                            minLength: {
                              value: 8,
                              message:
                                "La contraseña debe tener al menos 8 caracteres",
                            },
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "Debe incluir mayúscula, minúscula, número y símbolo (@$!%*?&)",
                            },
                          })}
                        />
                        <Form.Text className="text-danger">
                          {errors.password?.message}
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <div className="text-center mt-3">
                        <p className="mb-0">
                          ¿Ya tienes cuenta?{" "}
                          <Button
                            variant="link"
                            className="register-link"
                            onClick={() => {
                              handleClose2();
                              // Aquí deberías llamar a la función que abre el modal de login
                              // Por ejemplo: handleShowLogin();
                            }}
                          >
                            Inicia Sesión Aquí
                          </Button>
                        </p>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="d-grid">
                        <Button className="btn-submit" type="submit" size="lg">
                          Crear cuenta
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
