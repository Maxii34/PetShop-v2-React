import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

export const FormularioProductos = ({
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
  const navigate = useNavigate();

  const [tipoImagen, setTipoImagen] = useState("url");

  useEffect(() => {
    if (id) {
      const producto = buscarProducto(id);
      if (producto) {
        Object.keys(producto).forEach((key) => {
          setValue(key, producto[key]);
        });
      }
    }
  }, [id, buscarProducto, setValue]);

  const onSubmit = (data) => {
    const accion = id ? modificarProducto(id, data) : crearProducto(data);

    if (accion) {
      Swal.fire({
        icon: "success",
        title: id ? "Producto actualizado" : "Producto creado",
        text: `El producto "${data.nombre}" se guardó correctamente`,
      });
      reset();
      navigate("/admin");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un problema al guardar el producto",
      });
    }
  };

  return (
    <Container>
      <section className="">
        <div className="text-center mb-3">
          <h2>{titulo || "Alta de producto"}</h2>
          <span className="text-muted d-block mb-2">
            Ingresá la información necesaria para registrar un producto
          </span>
          <hr className="w-25 mx-auto" />
        </div>

        <Form
          className="p-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Imagen + Nombre */}
          <Row className="d-flex justify-content-center ali">
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Imagen del producto *</Form.Label>

                {/* Selector */}
                <div className="d-flex gap-3 mb-2">
                  <Form.Check
                    type="radio"
                    label="URL"
                    value="url"
                    checked={tipoImagen === "url"}
                    onChange={() => setTipoImagen("url")}
                  />
                  <Form.Check
                    type="radio"
                    label="Subir imagen"
                    value="file"
                    checked={tipoImagen === "file"}
                    onChange={() => setTipoImagen("file")}
                  />
                </div>

                {/* Input URL */}
                {tipoImagen === "url" && (
                  <Form.Control
                    type="url"
                    placeholder="https://ejemplo.com/imagen.jpg"
                    {...register("imagen", {
                      required: "La imagen es obligatoria",
                    })}
                  />
                )}

                {/* Input File */}
                {tipoImagen === "file" && (
                  <Form.Control
                    type="file"
                    accept="image/*"
                    {...register("imagenFile")}
                  />
                )}

                {errors.imagen && (
                  <small className="text-danger">{errors.imagen.message}</small>
                )}
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre del producto *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej. Royal Canin Mini Adult 3kg"
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                    minLength: { value: 3, message: "Mínimo 3 caracteres" },
                    maxLength: { value: 100, message: "Máximo 100 caracteres" },
                  })}
                />
                {errors.nombre && (
                  <small className="text-danger">{errors.nombre.message}</small>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Marca / Animal / Etapa */}
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Marca *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Royal Canin"
                  {...register("marca", {
                    required: "La marca es obligatoria",
                  })}
                />
                {errors.marca && (
                  <small className="text-danger">{errors.marca.message}</small>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Animal *</Form.Label>
                <Form.Select
                  {...register("animal", { required: "Seleccione un animal" })}
                >
                  <option value="">Seleccione...</option>
                  <option value="perro">Perro</option>
                  <option value="gato">Gato</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Etapa</Form.Label>
                <Form.Select {...register("etapa")}>
                  <option value="adulto">Adulto</option>
                  <option value="cachorro">Cachorro</option>
                  <option value="senior">Senior</option>
                  <option value="gatito">Gatito</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Precio / Stock / Cuotas */}
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Precio ($) *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="68.999"
                  {...register("precio", {
                    required: "El precio es obligatorio",
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Stock *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="30"
                  {...register("stock", {
                    required: "El stock es obligatorio",
                    min: { value: 0, message: "No puede ser negativo" },
                  })}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Cuotas</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="3"
                  {...register("cuotas")}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Categoría / Peso */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Categoría *</Form.Label>
                <Form.Select
                  {...register("categoria", {
                    required: "Seleccione una categoría",
                  })}
                >
                  <option value="">Seleccione...</option>
                  <option value="Alimentos">Alimentos</option>
                  <option value="Juguetes">Juguetes</option>
                  <option value="Accesorios">Accesorios</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Peso / Presentación</Form.Label>
                <Form.Control {...register("peso")} />
              </Form.Group>
            </Col>
          </Row>

          {/* Estados del producto */}
          <Row className="mb-3">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Estados del producto:</Form.Label>
                <div>
                  <span className="text-muted">
                    Seleciona un estado dependendiendo el producto a subir.
                  </span>
                </div>

                <div className="d-flex gap-4 mt-2">
                  <Form.Check
                    type="checkbox"
                    label="Producto en oferta"
                    {...register("enOferta")}
                  />

                  <Form.Check
                    type="checkbox"
                    label="Producto nuevo"
                    {...register("esNuevo")}
                  />

                  <Form.Check
                    type="checkbox"
                    label="Producto destacado"
                    {...register("destacado")}
                  />

                  <Form.Check
                    type="checkbox"
                    label="Ninguno"
                    {...register("Ninguno")}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Descripción */}
          <Form.Group className="mb-3">
            <Form.Label>Descripción *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              {...register("descripcion", {
                required: "La descripción es obligatoria",
                minLength: { value: 10, message: "Mínimo 10 caracteres" },
                maxLength: { value: 1000, message: "Máximo 1000 caracteres" },
              })}
            />
          </Form.Group>

          {/* Acciones */}
          <div className="text-center mt-4 d-flex justify-content-center gap-2">
            <Button variant="success" type="submit">
              {id ? "Guardar cambios" : "Agregar producto"}
            </Button>
            <Link to="/admin" className="btn btn-danger">
              Volver
            </Link>
          </div>
        </Form>
      </section>
    </Container>
  );
};


