import { useEffect } from "react";
import { Form, Button, Row, Col, FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const FormularioProductos = ({
  titulo,
  crearProducto,
  buscarProducto,
  modificarProducto,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  const navegacion = useNavigate();

  useEffect(() => {
    if (id) {
      const productoBuscado = buscarProducto(id);
      if (productoBuscado) {
        setValue("nombreProducto", productoBuscado.nombreProducto);
        setValue("imagen", productoBuscado.imagen);
        setValue("marca", productoBuscado.marca);
        setValue("animal", productoBuscado.animal);
        setValue("etapa", productoBuscado.etapa);
        setValue("precioOriginal", productoBuscado.precioOriginal);
        setValue("precioEfectivo", productoBuscado.precioEfectivo);
        setValue("cuotas", productoBuscado.cuotas);
        setValue("peso", productoBuscado.peso);
        setValue("stock", productoBuscado.stock);
        setValue("categoria", productoBuscado.categoria);
        setValue("descripcion", productoBuscado.descripcion);
      }
    }
  }, [titulo, id, setValue, buscarProducto]);

  const onSubmit = (data) => {
    if (titulo === "Formulario: Agregar producto") {
      data.id = uuidv4();
      if (crearProducto(data)) {
        Swal.fire({
          title: "Producto creado",
          text: `El producto ${data.nombreProducto} se creo correctamente`,
          icon: "success",
        });
        reset;
      }
    } else {
      //logica para editar
      if (modificarProducto(id,data)) {
        Swal.fire({
          title: "Producto editado",
          text: `El producto ${data.nombreProducto} se actualizo correctamente`,
          icon: "success",
        });
        navegacion("/admin");
      } else {
        Swal.fire({
          title: "Ocurrio un Error",
          text: `No se pudo actualizar el producto ${data.nombreProducto}`,
          icon: "error",
        });
      }
    }
  };

  return (
    <section className="my-5">
      <h2 className="text-center mb-4">{titulo}</h2>
      <div>
        <Form
          className="p-4 border rounded shadow"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* URL Imagen */}
          <Row>
            <Col md={6}>
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

            {/* Título */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre del Producto *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej. Agility Perro Adulto x 20Kg"
                  {...register("nombreProducto", {
                    required: "El nombre del producto es obligatorio",
                    minLength: {
                      value: 5,
                      message: "El nombre debe tener al menos 5 caracteres",
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
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Otro">Otro</option>
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
                  <option value="Cachorro">Cachorro</option>
                  <option value="Adulto">Adulto</option>
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
                  <option value="Alimentos">Alimentos</option>
                  <option value="Juguetes">Juguetes</option>
                  <option value="Accesorios">Accesorios</option>
                  <option value="Higiene">Higiene</option>
                  <option value="Camas y Transporte">Camas y Transporte</option>
                  <option value="Suplementos">Suplementos</option>
                </Form.Select>
                {errors.categoria && (
                  <span className="text-danger">
                    {errors.categoria.message}
                  </span>
                )}
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Alt (Nombre de la imagen)*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej. Royal Canin 25kg"
                  {...register("alt", {
                    required: "El alt es obligatorio",
                    minLength: {
                      value: 4,
                      message: "Debe tener minimo 4 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "Debe tener un maximo de 20 caracteres",
                    },
                  })}
                />
                {errors.alt && (
                  <span className="text-danger">{errors.alt.message}</span>
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
                      message: "Debe tener como minimo 10 caracteres",
                    },
                    maxLength: {
                      value: 100,
                      message: "Debe tener como maximo 100 caracteres",
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
              <div className="d-flex justify-content-center gap-2 mt-4">
                {titulo === "Formulario: Agregar producto" ? (
                  <Button variant="success" type="submit">
                    Agregar Producto
                  </Button>
                ) : (
                  <Button variant="success" type="submit">
                    Guardar cambios
                  </Button>
                )}
                <Link to="/admin" className="btn btn-danger shadow">
                  <i className="bi bi-arrow-bar-left"></i> Volver
                </Link>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </section>
  );
};

export default FormularioProductos;
