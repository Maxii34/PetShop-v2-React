import { Card, Button, Row, Col, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Card className="shadow-css my-4">
      <Row xs={1} md={2}>
        <Col>
          <Card.Body>
            <h4 className="text-center fs-2 display-1">
              <b>Iniciar sesión</b>
            </h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" placeholder="Ej: usuario@mail.com" />
                <Form.Text className="text-danger">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa una contraseña"
                />
                <Form.Text className="text-danger">
                </Form.Text>
              </Form.Group>

              <Button variant="warning" type="submit">
                Iniciar sesión
              </Button>
            </Form>
          </Card.Body>
        </Col>
        <Col className="border-start">
          <div className="p-3">
            <img
              src="https://images.pexels.com/photos/32778241/pexels-photo-32778241.jpeg"
              alt="Imagen comida"
              loading="lazy"
              className="img-fluid img-css"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Login;
