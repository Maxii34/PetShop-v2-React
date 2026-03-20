import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";
import { crearProducto } from "../helpers/productos.queries";


export const FormularioProductos = ({ titulo }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // TODO: Llamado al backend para buscar el producto a editar
      /*
      const fetchProducto = async () => { ... }
      */
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    const nuevoProducto = {
      nombre: data.nombre,
      precio: data.precio,
      stock: data.stock,
      categoria: data.categoria,
      marca: data.marca,
      tipoAnimal: data.tipoAnimal,
      descripcion: data.descripcion,
      imagen: data.imagenes,
      detalles: {
        etapa: data.detalles.etapa,
        peso: data.detalles.peso,
        cuotas: data.detalles.cuotas,
        sabor: data.detalles.sabor,
        talla: data.detalles.talla,
      },
    };
    const respuesta = await crearProducto(nuevoProducto);
    console.log(respuesta);
    if (respuesta && respuesta.ok) {
      Swal.fire({
        title: "¡Producto creado!",
        text: "El producto se ha creado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo crear el producto" + respuesta.mensaje,
        icon: "error",
        confirmButtonText: "Aceptar",
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

        <Form className="p-4 " onSubmit={handleSubmit(onSubmit)}>
          {/* Imagen + Nombre */}
          <Row className="d-flex justify-content-center ali">
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Imagen del producto *</Form.Label>

                <Form.Control
                  type="file"
                  accept="image/*"
                  {...register("imagenes", {
                    required: !id ? "La imagen es obligatoria" : false,
                  })}
                />

                {errors.imagenes && (
                  <small className="text-danger">
                    {errors.imagenes.message}
                  </small>
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
                <Form.Label>marca *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Royal Canin"
                  {...register("marca", {
                    required: "La marca es obligatoria",
                    minLength: { value: 2, message: "Mínimo 2 caracteres" },
                    maxLength: { value: 50, message: "Máximo 50 caracteres" },
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
                  {...register("tipoAnimal", {
                    required: "Seleccione un animal",
                  })}
                >
                  <option value="">Seleccione...</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Roedor">Roedor</option>
                  <option value="Ave">Ave</option>
                  <option value="Otro">Otro</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Etapa</Form.Label>
                <Form.Select {...register("detalles.etapa")}>
                  <option value="">Seleccione...</option>
                  <option value="cachorro">Cachorro</option>
                  <option value="adulto">Adulto</option>
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
                    max: {
                      value: 900000,
                      message: "El precio no puede ser mayor a 900.000",
                    },
                  })}
                />
                {errors.precio && (
                  <small className="text-danger">{errors.precio.message}</small>
                )}
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
                    max: {
                      value: 10000,
                      message: "El stock no puede ser mayor a 10000",
                    },
                  })}
                />
                {errors.stock && (
                  <small className="text-danger">{errors.stock.message}</small>
                )}
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

          {/* Categoría / Detalles */}
          <Row>
            <Col md={3}>
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

            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Peso / Present.</Form.Label>
                <Form.Control
                  placeholder="Ej: 15 kg"
                  {...register("detalles.peso", {
                    //required: "El peso es obligatorio",
                    min: { value: 0.1, message: "Debe ser mayor a 0" },
                    max: { value: 100, message: "Peso demasiado alto" },
                  })}
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Sabor / Aroma</Form.Label>
                <Form.Control
                  placeholder="Ej: Pollo y Carne"
                  {...register("detalles.sabor", {
                    //required: "El sabor es obligatorio",
                    minLength: { value: 3, message: "Muy corto" },
                    maxLength: { value: 20, message: "Muy largo" },
                  })}
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Talla / Dimensiones</Form.Label>
                <Form.Control
                  placeholder="Ej: XL o 50x40"
                  {...register("detalles.talla", {
                    //required: "La talla es obligatoria",
                    minLength: { value: 1, message: "Muy corto" },
                    maxLength: { value: 20, message: "Muy largo" },
                  })}
                />
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
                minLength: { value: 20, message: "Mínimo 20 caracteres" },
                maxLength: { value: 500, message: "Máximo 500 caracteres" },
              })}
            />
            {errors.descripcion && (
              <small className="text-danger">
                {errors.descripcion.message}
              </small>
            )}
          </Form.Group>

          {/* Acciones */}
          <div className="text-center mt-4 d-flex justify-content-center gap-2">
            <Button variant="success" type="submit">
              {id ? "Guardar cambios" : "Agregar producto"}
            </Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};
