import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  InputGroup,
  Form,
} from "react-bootstrap";
import { useLocation } from "react-router";
import { Image } from "react-bootstrap";
import { useState } from "react";

export const DetalleProductos = () => {
  const location = useLocation();
  const { producto } = location.state || {};

  // Estado para controlar cuál imagen se muestra
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  const precioDescuento = producto.precio * 0.9;

  // Manejo si no hay producto
  if (!producto) {
    return (
      <section className="my-4">
        <Container>
          <p>No se seleccionó ningún producto</p>
        </Container>
      </section>
    );
  }

  // Obtener array de imágenes (protección si no existe)
  const imagenes = producto.imagenes || [];
  const tieneMultiplesImagenes = imagenes.length > 1;

  return (
    <Container className="my-4">
      <Row className="g-4">
        {/* Columna de imagen y descripción */}
        <Col md={6}>
          {/* Imagen principal */}
          <Image
            src={imagenes[imagenSeleccionada]}
            alt={`Imagen ${imagenSeleccionada + 1} del producto`}
            fluid
            loading="lazy"
            className="mb-3"
            style={{ borderRadius: "8px" }}
          />

          {/* Galería de miniaturas - solo mostrar si hay múltiples imágenes */}
          {tieneMultiplesImagenes && (
            <div className="d-flex gap-2 overflow-auto pb-2">
              {imagenes.map((imagen, index) => (
                <button
                  key={index}
                  onClick={() => setImagenSeleccionada(index)}
                  style={{
                    border:
                      imagenSeleccionada === index
                        ? "3px solid #333"
                        : "2px solid #ddd",
                    borderRadius: "6px",
                    padding: "0",
                    cursor: "pointer",
                    minWidth: "80px",
                    height: "80px",
                    transition: "border-color 0.2s",
                    backgroundColor: "transparent",
                  }}
                >
                  <Image
                    src={imagen}
                    alt={`Miniatura ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Descripción - solo mostrar si hay contenido */}
          {(producto.descripcion ||
            producto.caracteristica ||
            producto.ingrediente) && (
            <div className="mt-4">
              <h4 className="mb-2 fw-semibold text-dark text-capitalize text-muted">
                Información del producto
              </h4>
              <div className="border-top pt-3 mt-3">
                {producto.descripcion && (
                  <p className="fs-6">
                    <b>Descripcion:</b> {producto.descripcion}
                  </p>
                )}
                {producto.caracteristica && (
                  <p className="fs-6">
                    <b>Caracteristicas:</b> {producto.caracteristica}
                  </p>
                )}
                {producto.ingrediente && (
                  <p className="fs-6">
                    <b>Ingredientes:</b> {producto.ingrediente}
                  </p>
                )}
              </div>
            </div>
          )}
        </Col>

        {/* Columna de precios e info */}
        <Col md={6}>
          <nav className="mb-2">
            <a
              href="/index.html"
              className="fs-6 text-muted text-decoration-none"
            >
              Inicio
            </a>{" "}
            &gt;
            <a href="#" className="fs-6 text-muted text-decoration-none">
              {producto.tipoAnimal}
            </a>{" "}
            &gt;
            <a href="#" className="fs-6 text-muted text-decoration-none">
              {producto.categoria}
            </a>{" "}
            &gt;
            <span className="fw-semibold text-dark text-muted">{producto.nombre}</span>
          </nav>

          <div className="border-bottom pb-3 mb-3">
            <h4 className="my-2 fw-semibold">{producto.nombre}</h4>

            {/* Precio principal */}
            <p className="fs-3 my-1 fw-bold text-dark">$ {producto.precio}</p>

            {/* Descuento */}
            <p className="text-success mb-1 fw-semibold">
              🤑 $ {precioDescuento.toFixed(0)} con efectivo
            </p>

            <p className="my-1 small text-muted">
              <i className="bi bi-coin"></i> 10% de descuento pagando en
              efectivo
            </p>

            {/* Transferencia */}
            <p className="my-1 small">
              <small className="text-muted">
                Con transferencia: ${Math.round(producto.precio * 1.05)}{" "}
                <span className="fw-semibold">(5% de recargo)</span>
              </small>
            </p>

            {/* Cuotas */}
            <p className="my-2">
              <i className="bi bi-credit-card"></i> Hasta{" "}
              <b>{producto.detalles.cuotas} cuotas SIN interés</b>
            </p>

            <p className="my-1 small text-muted">
              <i className="bi bi-wallet"></i> 12 cuotas de $
              {Math.round(producto.precio / 12)} o 6 cuotas de $
              {Math.round(producto.precio / 6)}
            </p>
          </div>
          <div className="border-bottom pb-3 mb-3 d-flex flex-wrap gap-2">
            {producto.detalles?.etapa && (
              <>
                <div className="d-flex align-items-center gap-2 card border-0 m-2 shadow-md bg-body-secondary">
                  <span className="fw-semibold text-dark fs-6 text-capitalize text-muted">
                    Etapa:
                  </span>
                  <span className="badge bg-success-subtle text-success-emphasis text-capitalize px-3 py-2">
                    <i className="bi bi-dog me-1"></i>
                    {producto.detalles.etapa}
                  </span>
                </div>
              </>
            )}

            {producto.detalles?.peso && (
              <>
                <div className="d-flex align-items-center gap-2 card border-0 m-2 shadow-md bg-body-secondary">
                  <span className="fw-semibold text-dark fs-6 text-capitalize text-muted">
                    Peso:
                  </span>
                  <span className="badge bg-success-subtle text-success-emphasis px-3 py-2">
                    {producto.detalles.peso}
                  </span>
                </div>
              </>
            )}

            {producto?.stock && (
              <>
                <div className="d-flex align-items-center gap-2 card border-0 m-2 shadow-md bg-body-secondary">
                  <span className="fw-semibold text-dark fs-6 text-capitalize text-muted">
                    Stock disp:
                  </span>
                  <span className="badge bg-success-subtle text-success-emphasis px-3 py-2">
                    {producto.stock} Unidades
                  </span>
                </div>
              </>
            )}

            {producto?.tipoAnimal && (
              <>
                <div className="d-flex align-items-center gap-2 card border-0 m-2 shadow-md bg-body-secondary">
                  <span className="fw-semibold text-dark fs-6 text-capitalize text-muted">
                    Tipo:
                  </span>
                  <span className="badge bg-success-subtle text-success-emphasis px-3 py-2">
                    {producto.tipoAnimal}
                  </span>
                </div>
              </>
            )}
          </div>

          <p>
            <i className="bi bi-wallet2"></i> Envíos Programados GRATIS con
            compras superiores a $15.000
          </p>

          {/* Sección de compra */}
          <div className="border-top pt-3 mt-3">
            {/* CTA principal */}
            <Button
              className="w-75 py-2 fw-semibold shadow-md"
              variant="success"
            >
              <i className="bi bi-bag me-2"></i>
              Comprar ahora
            </Button>

            {/* CTA secundario */}
            <Button
              className="w-75 mt-2 py-2 fw-semibold shadow-md"
              variant="outline-dark"
            >
              Agregar al carrito
            </Button>

            {/* Envíos */}
            <div className="mt-4 small border-top pt-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-truck fs-5"></i>
                <strong>Envíos</strong>
              </div>

              <p className="text-muted mb-2">
                📍 San Miguel de Tucumán, Yerba Buena, Tafí Viejo y zonas
                cercanas.
              </p>

              <p className="text-muted mb-2">
                📦 Entregas de <b>Lunes a Sábados</b> en franjas horarias como
                <b> 08:00–13:00</b> o <b>18:00–22:00</b>. Los horarios se
                coordinan según disponibilidad.
              </p>

              <p className="fw-semibold text-success mb-0">
                🚚 Envío GRATIS en compras superiores a $17.000
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
