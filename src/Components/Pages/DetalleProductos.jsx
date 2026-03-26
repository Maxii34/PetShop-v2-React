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
          {(producto.descripcion || producto.caracteristica || producto.ingrediente) && (
            <div className="mt-4">
              <h4 className="mb-2 fw-semibold text-dark text-capitalize">Información del producto</h4>
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
            <span className="fw-semibold text-dark">{producto.nombre}</span>
          </nav>

          <div className="border-bottom pb-3 mb-3">
            <h4 className="my-2">
              <b>{producto.nombre}</b>
            </h4>
            <p className="fs-3 my-2">
              <b>$ {producto.precio}</b>
            </p>
            <p className="text-success mb-0">
              <b>$ {precioDescuento}, con efectivo. 🤑</b>
            </p>
            <p className="my-1">
              <i className="bi bi-coin"></i> 10% de descuento pagando con
              Efectivo
              <br />
              <small className="d-block mt-1">
                Con transferencia: ${Math.round(producto.precio * 1.05)}{" "}
                <span className="fw-bold text-success">(5% de recargo).</span>
              </small>
            </p>
            <p className="m-1">
              <i className="bi bi-cash"></i> Hasta {producto.cuotas} cuotas{" "}
              <b>SIN</b> interés con tarjeta.
            </p>

            <p className="my-1">
              <i className="bi bi-wallet"></i> 12 cuotas de $
              {Math.round(producto.precio / 12)} o 6 cuotas de ${" "}
              {Math.round(producto.precio / 6)}
            </p>
          </div>

          <p>
            <i className="bi bi-wallet2"></i> Envíos Programados GRATIS con
            compras superiores a $15.000
          </p>

          {/* Sección de envíos y carrito */}
          <div className="border-top pt-3 mt-3">
            <div className="d-flex align-items-center mb-2">
              <Button variant="outline-dark" className="px-3 py-1">
                −
              </Button>
              <span className="mx-2">1</span>
              <Button variant="outline-dark" className="px-3 py-1">
                +
              </Button>
              <Button variant="dark" className="ms-3">
                AGREGAR AL CARRITO
              </Button>
            </div>

            <div className="mb-2">
              <i className="bi bi-truck"></i> Medios de envío
            </div>

            <div className="mb-2">
              <strong>Zonas de Envíos Programados</strong>
              <br />
              <small className="text-muted">
                San Miguel de Tucumán - Yerba Buena - Banda del Río Salí - Tafí
                Viejo - San José - Las Talitas - Lomas de Tafí - Villa Carmela -
                Concepción.
              </small>
            </div>

            <div className="mb-2">
              <strong>Envíos</strong>
              <br />
              <small className="text-muted d-block">
                📦 Envíos programados disponibles de <b>Lunes a Sábados</b>.
                <br />
                ⚠️ Ten en cuenta que los tiempos de entrega pueden variar según
                la demanda.
              </small>
            </div>

            <div>
              <strong>
                Envíos Programados GRATIS con compras superiores a $15.000
              </strong>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};