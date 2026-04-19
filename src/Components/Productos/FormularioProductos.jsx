import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import {
  crearProducto,
  obtenerProducto,
  editarProductos,
} from "../helpers/productos.queries";

export const FormularioProductos = ({ titulo }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const enOfertaActivo = watch("enOferta");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      obtenerProducto(id).then((respuesta) => {
        const prod = respuesta?.producto || respuesta;
        if (prod && prod.nombre) {
          setValue("nombre", prod.nombre);
          setValue("precio", prod.precio);
          setValue("stock", prod.stock);
          setValue("categoria", prod.categoria);
          setValue("marca", prod.marca);
          setValue("tipoAnimal", prod.tipoAnimal);
          setValue("descripcion", prod.descripcion);
          setValue("ingrediente", prod.ingrediente);
          setValue("caracteristica", prod.caracteristica);
          setValue("enOferta", prod.enOferta);
          setValue("descuento", prod.descuento);
          setValue("esNuevo", prod.esNuevo);
          setValue("destacado", prod.destacado);

          if (prod.detalles) {
            setValue("detalles.etapa", prod.detalles.etapa);
            setValue("detalles.peso", prod.detalles.peso);
            setValue("detalles.cuotas", prod.detalles.cuotas);
            setValue("detalles.sabor", prod.detalles.sabor);
            setValue("detalles.talla", prod.detalles.talla);
            setValue("cuotas", prod.detalles.cuotas);
          }
        }
      });
    }
  }, [id, setValue]);

  // 👇 limpiar descuento si se desactiva oferta
  useEffect(() => {
    if (!enOfertaActivo) {
      setValue("descuento", 0);
    }
  }, [enOfertaActivo, setValue]);

  const onSubmit = async (data) => {
    try {
      // Convertir FileList a Array
      const imagenesArray = data.imagenes ? Array.from(data.imagenes) : [];

      const nuevoProducto = {
        nombre: data.nombre,
        precio: data.precio,
        stock: data.stock,
        categoria: data.categoria,
        marca: data.marca,
        tipoAnimal: data.tipoAnimal,
        descripcion: data.descripcion,
        ingrediente: data.ingrediente,
        caracteristica: data.caracteristica,
        enOferta: Boolean(data.enOferta),
        descuento: data.enOferta ? Number(data.descuento) : 0,
        esNuevo: Boolean(data.esNuevo),
        destacado: Boolean(data.destacado),
        imagenes: imagenesArray,
        detalles: {
          etapa: data.detalles?.etapa || "",
          peso: data.detalles?.peso || "",
          cuotas: data.detalles?.cuotas || data.cuotas || "",
          sabor: data.detalles?.sabor || "",
          talla: data.detalles?.talla || "",
        },
      };
      console.log("Producto a enviar:", nuevoProducto);

      let respuesta;
      if (id) {
        respuesta = await editarProductos(id, nuevoProducto);
      } else {
        respuesta = await crearProducto(nuevoProducto);
      }

      if (
        respuesta &&
        (respuesta.ok || respuesta.status === 200 || !respuesta.error)
      ) {
        Swal.fire({
          title: id ? "¡Producto editado!" : "¡Producto creado!",
          text: id
            ? "El producto se ha editado correctamente"
            : "El producto se ha creado correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then(() => {
          navigate("/admin/productos");
        });
        reset();
      } else {
        Swal.fire({
          title: "Error",
          text:
            respuesta?.mensaje ||
            (id
              ? "No se pudo editar el producto"
              : "No se pudo crear el producto"),
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.error("Error en onSubmit:", error);
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al procesar el producto",
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

        <Form
          className="p-4 shadow-sm bg-white rounded border"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row>
            {/* Columna Izquierda: Datos Principales */}
            <Col lg={8} md={12}>
              <h5 className="text-secondary border-bottom pb-2 mb-3">
                Información Principal
              </h5>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre del producto *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej. Royal Canin Mini Adult 3kg"
                      isInvalid={!!errors.nombre}
                      {...register("nombre", {
                        required: "El nombre del producto es obligatorio",
                        minLength: {
                          value: 3,
                          message: "El nombre debe tener al menos 3 caracteres",
                        },
                        maxLength: {
                          value: 100,
                          message: "El nombre no puede exceder 100 caracteres",
                        },
                      })}
                    />
                    {errors.nombre && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.nombre.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Categoría *</Form.Label>
                    <Form.Select
                      isInvalid={!!errors.categoria}
                      {...register("categoria", {
                        required: "Debes seleccionar una categoría",
                      })}
                    >
                      <option value="">Seleccione una categoría...</option>
                      <option value="Alimentos">Alimentos</option>
                      <option value="Juguetes">Juguetes</option>
                      <option value="Accesorios">Accesorios</option>
                    </Form.Select>
                    {errors.categoria && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.categoria.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Marca *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej. Royal Canin"
                      isInvalid={!!errors.marca}
                      {...register("marca", {
                        required: "La marca es obligatoria",
                        minLength: {
                          value: 2,
                          message: "La marca debe tener al menos 2 caracteres",
                        },
                        maxLength: {
                          value: 50,
                          message: "La marca no puede exceder 50 caracteres",
                        },
                      })}
                    />
                    {errors.marca && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.marca.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Animal *</Form.Label>
                    <Form.Select
                      isInvalid={!!errors.tipoAnimal}
                      {...register("tipoAnimal", {
                        required: "Debes seleccionar el tipo de animal",
                      })}
                    >
                      <option value="">Seleccione un animal...</option>
                      <option value="Perro">Perro</option>
                      <option value="Gato">Gato</option>
                      <option value="Roedor">Roedor</option>
                      <option value="Ave">Ave</option>
                      <option value="Otro">Otro</option>
                    </Form.Select>
                    {errors.tipoAnimal && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.tipoAnimal.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Etapa de Vida *</Form.Label>
                    <Form.Select
                      isInvalid={!!errors.detalles?.etapa}
                      {...register("detalles.etapa", {
                        required: "Debes seleccionar una etapa de vida",
                      })}
                    >
                      <option value="">Seleccione una etapa...</option>
                      <option value="cachorro">Cachorro</option>
                      <option value="adulto">Adulto</option>
                    </Form.Select>
                    {errors.detalles?.etapa && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.detalles.etapa.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <h5 className="text-secondary border-bottom pb-2 mt-2 mb-3 pt-3">
                Detalles Adicionales
              </h5>
              <Row>
                <Col md={3} xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Peso / Present.</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ej: 15"
                      isInvalid={!!errors.detalles?.peso}
                      {...register("detalles.peso", {
                        required: "El peso es obligatorio",
                        min: {
                          value: 0.1,
                          message: "El peso debe ser mayor a 0",
                        },
                        max: {
                          value: 100,
                          message: "El peso no puede exceder 100",
                        },
                      })}
                    />
                    {errors.detalles?.peso && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.detalles.peso.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col md={3} xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Sabor / Aroma</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: Pollo"
                      isInvalid={!!errors.detalles?.sabor}
                      {...register("detalles.sabor", {
                        minLength: {
                          value: 3,
                          message: "El sabor debe tener al menos 3 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message: "El sabor no puede exceder 20 caracteres",
                        },
                      })}
                    />
                    {errors.detalles?.sabor && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.detalles.sabor.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col md={3} xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Talla / Medida</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: XL o 50x40"
                      isInvalid={!!errors.detalles?.talla}
                      {...register("detalles.talla", {
                        minLength: {
                          value: 1,
                          message: "La talla debe tener al menos 1 carácter",
                        },
                        maxLength: {
                          value: 20,
                          message: "La talla no puede exceder 20 caracteres",
                        },
                      })}
                    />
                    {errors.detalles?.talla && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.detalles.talla.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                <Col md={3} xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Cuotas (Cant.)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ej: 3"
                      isInvalid={!!errors.cuotas}
                      {...register("cuotas", {
                        min: {
                          value: 0,
                          message: "Las cuotas no pueden ser negativas",
                        },
                        max: {
                          value: 24,
                          message: "Las cuotas no pueden exceder 24",
                        },
                      })}
                    />
                    {errors.cuotas && (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.cuotas.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </Col>

            {/* Columna Derecha: Tarjeta de Precio, Imagen y Estados */}
            <Col lg={4} md={12}>
              <div className="bg-light p-4 rounded border h-100 d-flex flex-column gap-3">
                <h5 className="text-secondary border-bottom mt-2 mb-1">
                  Datos inportantes
                </h5>
                <div>
                  <Form.Group>
                    <Form.Label className="fw-bold">
                      <i className="bi bi-image me-2"></i>
                      Imagen del producto *
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      isInvalid={!!errors.imagenes}
                      {...register("imagenes", {
                        required: !id ? "Debes seleccionar una imagen" : false,
                      })}
                    />
                    <Form.Text className="d-block mt-1 text-muted">
                      <i className="bi bi-info-circle me-1"></i>
                      Formatos: JPG, PNG, WebP (máx. 3MB)
                    </Form.Text>
                    {errors.imagenes && (
                      <Form.Control.Feedback
                        type="invalid"
                        className="d-block mt-2"
                      >
                        {errors.imagenes.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </div>

                <Row>
                  <Col xl={12} sm={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">
                        Precio de Venta ($) *
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Ej: 12500"
                        isInvalid={!!errors.precio}
                        {...register("precio", {
                          required: "El precio es obligatorio",
                          min: {
                            value: 0.01,
                            message: "El precio debe ser mayor a $0",
                          },
                          max: {
                            value: 900000,
                            message: "El precio no puede exceder $900.000",
                          },
                        })}
                      />
                      {errors.precio && (
                        <Form.Control.Feedback
                          type="invalid"
                          className="d-block"
                        >
                          {errors.precio.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xl={12} sm={6} className="mt-xl-3">
                    <Form.Group>
                      <Form.Label className="fw-bold">
                        Stock Disponible *
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Ej: 30"
                        isInvalid={!!errors.stock}
                        {...register("stock", {
                          required: "El stock es obligatorio",
                          min: {
                            value: 0,
                            message: "El stock no puede ser negativo",
                          },
                          max: {
                            value: 10000,
                            message: "El stock no puede exceder 10.000",
                          },
                        })}
                      />
                      {errors.stock && (
                        <Form.Control.Feedback
                          type="invalid"
                          className="d-block"
                        >
                          {errors.stock.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <div className="mt-auto pt-3 border-top">
                  <Form.Label className="fw-bold">Estados Visuales</Form.Label>
                  <div className="d-flex flex-column gap-2 mt-1">
                    <Form.Check
                      type="switch"
                      id="switch-oferta"
                      label="En Oferta (Resaltado)"
                      {...register("enOferta")}
                    />

                    {/* 🔥 CAMPO DESCUENTO DINÁMICO */}
                    {enOfertaActivo && (
                      <Form.Group>
                        <Form.Label>% Descuento *</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Ej: 20"
                          isInvalid={!!errors.descuento}
                          {...register("descuento", {
                            required: "Debes ingresar un descuento",
                            min: {
                              value: 0,
                              message: "El descuento no puede ser menor a 0%",
                            },
                            max: {
                              value: 90,
                              message: "El descuento no puede ser mayor a 90%",
                            },
                          })}
                        />
                        {errors.descuento && (
                          <Form.Control.Feedback
                            type="invalid"
                            className="d-block"
                          >
                            {errors.descuento.message}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    )}

                    <Form.Check
                      type="switch"
                      id="switch-nuevo"
                      label="Etiqueta: Nuevo"
                      {...register("esNuevo")}
                    />

                    <Form.Check
                      type="switch"
                      id="switch-destacado"
                      label="Destacado en Inicio"
                      {...register("destacado")}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Fila Inferior: Textareas Amplios */}
          <Row className="mt-4 bg-light p-4 rounded border h-100">
            <h5 className="text-secondary border-bottom pb-2 mt-2 mb-3">
              Informacion descriptivas
            </h5>
            <Col lg={4} md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Descripción General</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Describe el producto en detalle (opcional)"
                  isInvalid={!!errors.descripcion}
                  {...register("descripcion", {
                    minLength: {
                      value: 20,
                      message:
                        "La descripción debe tener al menos 20 caracteres",
                    },
                    maxLength: {
                      value: 500,
                      message: "La descripción no puede exceder 500 caracteres",
                    },
                  })}
                />
                {errors.descripcion && (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors.descripcion.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>

            <Col lg={4} md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Características Clave</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Listá las características principales (opcional)"
                  isInvalid={!!errors.caracteristica}
                  {...register("caracteristica", {
                    minLength: {
                      value: 20,
                      message:
                        "Las características deben tener al menos 20 caracteres",
                    },
                    maxLength: {
                      value: 1000,
                      message:
                        "Las características no pueden exceder 1000 caracteres",
                    },
                  })}
                />
                {errors.caracteristica && (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors.caracteristica.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>

            <Col lg={4} md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Ingredientes / Materiales</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Listá los ingredientes o materiales (opcional)"
                  isInvalid={!!errors.ingrediente}
                  {...register("ingrediente", {
                    minLength: {
                      value: 20,
                      message:
                        "Los ingredientes deben tener al menos 20 caracteres",
                    },
                    maxLength: {
                      value: 1000,
                      message:
                        "Los ingredientes no pueden exceder 1000 caracteres",
                    },
                  })}
                />
                {errors.ingrediente && (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors.ingrediente.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Acciones */}
          <div className="text-center mt-3 pt-3 border-top mx-2">
            <Button
              variant="success"
              size="lg"
              className="px-5 fw-bold"
              type="submit"
            >
              <i
                className={id ? "bi bi-save me-2" : "bi bi-plus-circle me-2"}
              ></i>
              {id ? "Guardar cambios" : "Agregar producto"}
            </Button>

            <Button
              variant="outline-danger"
              size="lg"
              className="px-5 fw-bold mx-2"
              onClick={() => navigate("/admin/productos")}
            >
              Cancelar
            </Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};
