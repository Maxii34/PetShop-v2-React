import { Form, Button, Row, Col, FormText } from "react-bootstrap";

const FormularioProductos = () => {
  return (
    <section className="my-3">
      <h2 className="text-center mb-4">Agregar Nuevo Producto</h2>
      <div>
        <Form className="p-4 border rounded shadow">
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>URL de la Imagen</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Título del Producto *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej. Agility Perro Adulto x 20Kg"
                />
                <FormText className="text-muted">
                  Incluye marca, tipo de animal, etapa y cantidad. Ej: “Royal
                  Canin Gato Senior x 1.5kg”
                </FormText>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej. Agility, Royal Canin, Pedigree"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Tipo de Animal</Form.Label>
                <Form.Select>
                  <option>Perro</option>
                  <option>Gato</option>
                  <option>Otro</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Etapa de Vida</Form.Label>
                <Form.Select>
                  <option>Cachorro</option>
                  <option>Adulto</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Precio Original ($)</Form.Label>
                <Form.Control type="number" placeholder="62000" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Precio en Efectivo ($)</Form.Label>
                <Form.Control type="number" placeholder="55800" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Cuotas sin interés</Form.Label>
                <Form.Control type="number" placeholder="3" />
                <FormText className="text-muted">
                  Número de cuotas sin interés (ej: 3, 6, 12). El valor por
                  cuota se calcula automáticamente.
                </FormText>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Peso Neto (kg)</Form.Label>
                <Form.Control type="number" placeholder="20.0" />
                <FormText className="text-muted">
                  Valor real del peso del producto (para cálculos internos). Ej:
                  20.0 (kg) o 0.5 (kg)
                </FormText>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Stock Disponible</Form.Label>
                <Form.Control type="number" placeholder="50" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Categoría</Form.Label>
                <Form.Select defaultValue="Alimentos">
                  <option>Alimentos</option>
                  <option>Juguetes</option>
                  <option>Accesorios</option>
                  <option>Higiene</option>
                  <option>Camas y Transporte</option>
                  <option>Suplementos</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group>
                <Form.Label>
                  Descripción Larga (Detalles del Producto)
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Ej. Alimento balanceado para perros adultos de raza mediana. Contiene proteínas de alta calidad, omega 3 y 6 para piel sana, y fibra para digestión. Sin conservadores artificiales."
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <Button variant="primary" type="submit" className="mt-4">
                Agregar Producto
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </section>
  );
};

export default FormularioProductos;
