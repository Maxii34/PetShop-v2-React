import { Form, Button, Row, Col, FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProductos = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <section className="my-3">
      <h2 className="text-center mb-4">Agregar Nuevo Producto</h2>
      <div>
        <Form
          className="p-4 border rounded shadow"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* URL Imagen */}
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>URL de la Imagen *</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  {...register("imagen", {
                    required: "La URL de la imagen es obligatoria",
                    pattern: {
                      value: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)$/i,
                      message: "Debe ser una URL válida de imagen",
                    },
                  })}
                />
                {errors.imagen && (
                  <span className="text-danger">{errors.imagen.message}</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Título */}
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Título del Producto *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej. Agility Perro Adulto x 20Kg"
                  {...register("titulo", {
                    required: "El título es obligatorio",
                    minLength: {
                      value: 5,
                      message: "El título debe tener al menos 5 caracteres",
                    },
                  })}
                />
                {errors.titulo && (
                  <span className="text-danger">{errors.titulo.message}</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Marca / Animal / Etapa */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Marca *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej. Royal Canin"
                  {...register("marca", {
                    required: "La marca es obligatoria",
                  })}
                />
                {errors.marca && (
                  <span className="text-danger">{errors.marca.message}</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Tipo de Animal *</Form.Label>
                <Form.Select
                  {...register("animal", { required: "Seleccione un animal" })}
                >
                  <option value="">Seleccione...</option>
                  <option>Perro</option>
                  <option>Gato</option>
                  <option>Otro</option>
                </Form.Select>
                {errors.animal && (
                  <span className="text-danger">{errors.animal.message}</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Etapa de Vida *</Form.Label>
                <Form.Select
                  {...register("etapa", { required: "Seleccione una etapa" })}
                >
                  <option value="">Seleccione...</option>
                  <option>Cachorro</option>
                  <option>Adulto</option>
                </Form.Select>
                {errors.etapa && (
                  <span className="text-danger">{errors.etapa.message}</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Precios */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Precio Original ($) *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="62000"
                  {...register("precioOriginal", {
                    required: "El precio original es obligatorio",
                    min: { value: 1, message: "Debe ser mayor a 0" },
                  })}
                />
                {errors.precioOriginal && (
                  <span className="text-danger">
                    {errors.precioOriginal.message}
                  </span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Precio en Efectivo ($) *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="55800"
                  {...register("precioEfectivo", {
                    required: "El precio en efectivo es obligatorio",
                    min: { value: 1, message: "Debe ser mayor a 0" },
                  })}
                />
                {errors.precioEfectivo && (
                  <span className="text-danger">
                    {errors.precioEfectivo.message}
                  </span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Cuotas sin interés</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="3"
                  {...register("cuotas", {
                    min: { value: 0, message: "Debe ser positivo" },
                  })}
                />
                {errors.cuotas && (
                  <span className="text-danger">{errors.cuotas.message}</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Peso y Stock */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Peso Neto (kg) *</Form.Label>
                <Form.Control
                  type="number"
                  step="0.1"
                  placeholder="20.0"
                  {...register("peso", {
                    required: "El peso es obligatorio",
                    min: { value: 0.1, message: "Debe ser mayor a 0" },
                  })}
                />
                {errors.peso && (
                  <span className="text-danger">{errors.peso.message}</span>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Stock Disponible *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="50"
                  {...register("stock", {
                    required: "El stock es obligatorio",
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
                {errors.stock && (
                  <span className="text-danger">{errors.stock.message}</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Categoría */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Categoría *</Form.Label>
                <Form.Select
                  defaultValue=""
                  {...register("categoria", {
                    required: "Seleccione una categoría",
                  })}
                >
                  <option value="">Seleccione...</option>
                  <option>Alimentos</option>
                  <option>Juguetes</option>
                  <option>Accesorios</option>
                  <option>Higiene</option>
                  <option>Camas y Transporte</option>
                  <option>Suplementos</option>
                </Form.Select>
                {errors.categoria && (
                  <span className="text-danger">
                    {errors.categoria.message}
                  </span>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Descripción */}
          <Row className="mb-3">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Descripción Larga *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Ej. Alimento balanceado..."
                  {...register("descripcion", {
                    required: "La descripción es obligatoria",
                    minLength: {
                      value: 10,
                      message: "Debe tener al menos 10 caracteres",
                    },
                  })}
                />
                {errors.descripcion && (
                  <span className="text-danger">
                    {errors.descripcion.message}
                  </span>
                )}
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
