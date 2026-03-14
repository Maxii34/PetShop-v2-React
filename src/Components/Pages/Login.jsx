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
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
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
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                        message:
                          "La contraseña debe tener entre 8 y 16 caracteres e incluir al menos: un número, una letra mayúscula, una letra minúscula y un carácter especial.",
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


