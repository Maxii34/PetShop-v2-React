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

export const DetalleProductos = () => {
  const location = useLocation();
  const { producto } = location.state || {};
  console.log(producto);

  const precioCuotas = producto.precioEfectivo / producto.cuotas;

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

  return (
    <Container className="my-4">
      <Row className="g-4">
        {/* Columna de imagen y descripción */}
        <Col md={6}>
          <Image
            src={producto.imagenes?.[0]}
            alt="Imagen del producto"
            fluid
            loading="lazy"
            className="mb-3"
          />
          <div>
            <p className="fs-6">
              <b>Descripcion:</b> {producto.descripcion}
            </p>
            <p className="fs-6">
              <b>Caracteristicas:</b> {producto.caracteristica}
            </p>
            <p className="fs-6">
              <b>Ingredientes:</b> {producto.ingrediente}
            </p>
          </div>
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
            <span className="fw-semibold text-dark">
              {producto.nombre}
            </span>
          </nav>

          <div className="border-bottom pb-3 mb-3">
            <h4 className="my-2">
              <b>{producto.nombre}</b>
            </h4>
            <p className="fs-3 my-2">
              <b>${producto.precio}</b>
            </p>
            <p className="text-success mb-0">
              <b>${producto.precio}, con efectivo. 🤑</b>
              <br />
              <small className="d-block mt-1">
                Con transferencia: ${Math.round(producto.precio * 1.05)}{" "}
                (5% de recargo).
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
            <p className="my-1">
              <i className="bi bi-coin"></i> 10% de descuento pagando con
              Efectivo
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


