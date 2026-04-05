import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router";
import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";

export const DetalleProductos = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);
  const [precioDescuento, setPrecioDescuento] = useState(0);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  useEffect(() => {
    // Obtener datos del state
    const state = location.state;

    console.log("Estado recibido:", state); // DEBUG

    if (state && state.producto) {
      setProducto(state.producto);
      setPrecioDescuento(state.precioDescuento || state.producto.precio * 0.9);
    } else {
      console.warn("No hay producto en el state");
      // Redirigir si no hay producto después de 2 segundos
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  // ✅ Valores calculados CORRECTAMENTE
  const precioOriginal = producto?.precio || 0;
  
  // Verificar si realmente hay descuento (compara si precioDescuento es diferente al original)
  const tieneDescuento = precioDescuento && precioDescuento < precioOriginal;
  
  // Precio con descuento (solo si realmente hay descuento)
  const precioConDescuento = tieneDescuento ? precioDescuento : precioOriginal;
  
  // Precio en efectivo: 10% descuento sobre el precio base
  const precioEnEfectivo = Math.round(precioConDescuento * 0.9);
  
  // Precio con transferencia: 5% recargo sobre el precio base
  const precioConTransferencia = Math.round(precioConDescuento * 1.05);
  
  // Precio en cuotas (sobre el precio con descuento)
  const precioPor3Cuotas = Math.round(precioConDescuento / 3);
  const precioPor6Cuotas = Math.round(precioConDescuento / 6);
  const precioPor12Cuotas = Math.round(precioConDescuento / 12);

  // Obtener array de imágenes
  const imagenes = producto?.imagenes || [];
  const tieneMultiplesImagenes = imagenes.length > 1;

  // Manejo si no hay producto (mientras se carga)
  if (!producto) {
    return (
      <section className="my-4">
        <Container>
          <div className="text-center">
            <p className="fs-5 text-muted">Cargando producto...</p>
            <p className="small text-danger">
              Si no carga, serás redirigido al inicio
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <Container className="my-4">
      <Row className="g-4">
        {/* Columna de imagen y descripción */}
        <Col md={6}>
          {/* Imagen principal */}
          {imagenes.length > 0 ? (
            <Image
              src={imagenes[imagenSeleccionada]}
              alt={`Imagen ${imagenSeleccionada + 1} del producto`}
              fluid
              loading="lazy"
              className="mb-3"
              style={{ borderRadius: "8px" }}
            />
          ) : (
            <div
              style={{
                height: "300px",
                borderRadius: "8px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className="text-muted">Sin imagen disponible</p>
            </div>
          )}

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
            <a href="/" className="fs-6 text-muted text-decoration-none">
              Inicio
            </a>
            {" > "}
            <a href="#" className="fs-6 text-muted text-decoration-none">
              {producto.tipoAnimal || "Categoría"}
            </a>
            {" > "}
            <a href="#" className="fs-6 text-muted text-decoration-none">
              {producto.categoria || "Subcategoría"}
            </a>
            {" > "}
            <span className="fw-semibold text-dark text-muted">
              {producto.nombre}
            </span>
          </nav>

          <div className="border-bottom pb-3 mb-3">
            <h4 className="my-2 fw-semibold">{producto.nombre}</h4>

            {/* Precio principal - Muestra el precio con descuento */}
            <div className="d-flex justify-content-start align-items-center gap-2">
              {/* Si tiene descuento, muestra el precio original tachado */}
              {tieneDescuento && (
                <span className="text-decoration-line-through text-danger fs-6">
                  ${precioOriginal.toLocaleString("es-AR")}
                </span>
              )}
              {/* Precio actual (con descuento si lo hay) */}
              <h3 className="mb-0 fw-bolder text-dark">
                ${precioConDescuento.toLocaleString("es-AR")}
              </h3>
            </div>

            {/* Descuento en efectivo */}
            <p className="text-success mb-1 fw-semibold mt-2">
              🤑 $ {precioEnEfectivo.toLocaleString("es-AR")} con efectivo
            </p>

            <p className="my-1 small text-muted">
              <i className="bi bi-coin"></i> 10% de descuento pagando en
              efectivo
            </p>

            {/* Transferencia */}
            <p className="my-1 small">
              <small className="text-muted">
                Con transferencia: ${precioConTransferencia.toLocaleString("es-AR")}{" "}
                <span className="fw-semibold">(5% de recargo)</span>
              </small>
            </p>

            {/* Cuotas */}
            <p className="my-2">
              <i className="bi bi-credit-card"></i> Hasta{" "}
              <b>{producto?.detalles?.cuotas || 3} cuotas SIN interés</b>
            </p>

            <p className="my-1 small text-muted">
              <i className="bi bi-wallet"></i> 3 cuotas de $
              {precioPor3Cuotas.toLocaleString("es-AR")}, 6 cuotas de $
              {precioPor6Cuotas.toLocaleString("es-AR")} o 12 cuotas de $
              {precioPor12Cuotas.toLocaleString("es-AR")}
            </p>
          </div>

          <div className="border-bottom pb-3 mb-3 d-flex flex-wrap gap-2">
            {producto.detalles?.etapa && (
              <div className="d-flex align-items-center gap-2 card border-0 m-2 shadow-md bg-body-secondary">
                <span className="fw-semibold text-dark fs-6 text-capitalize text-muted">
                  Etapa:
                </span>
                <span className="badge bg-success-subtle text-success-emphasis text-capitalize px-3 py-2">
                  <i className="bi bi-dog me-1"></i>
                  {producto.detalles.etapa}
                </span>
              </div>
            )}

            {producto.detalles?.peso && (
              <div className="d-flex align-items-center gap-2 card border-0 m-2 shadow-md bg-body-secondary">
                <span className="fw-semibold text-dark fs-6 text-capitalize text-muted">
                  Peso:
                </span>
                <span className="badge bg-success-subtle text-success-emphasis px-3 py-2">
                  {producto.detalles.peso}
                </span>
              </div>
            )}

            {producto?.stock && (
              <div className="d-flex align-items-center gap-2 card border-0 m-2 shadow-md bg-body-secondary">
                <span className="fw-semibold text-dark fs-6 text-capitalize text-muted">
                  Stock disp:
                </span>
                <span className="badge bg-success-subtle text-success-emphasis px-3 py-2">
                  {producto.stock} Unidades
                </span>
              </div>
            )}

            {producto?.tipoAnimal && (
              <div className="d-flex align-items-center gap-2 card border-0 m-2 shadow-md bg-body-secondary">
                <span className="fw-semibold text-dark fs-6 text-capitalize text-muted">
                  Tipo:
                </span>
                <span className="badge bg-success-subtle text-success-emphasis px-3 py-2">
                  {producto.tipoAnimal}
                </span>
              </div>
            )}
          </div>

          <p>
            <i className="bi bi-wallet2"></i> Envíos Programados GRATIS con
            compras superiores a $15.000
          </p>

          {/* Sección de compra */}
          <div className="border-top pt-3 mt-3">
            {/* CTA principal */}
            <Link
              className="w-75 py-2 fw-semibold shadow-md btn btn-success"
              state={{ producto }}
              to="/user/comprar"
            >
              <i className="bi bi-bag me-2"></i>
              Comprar ahora
            </Link>

            {/* CTA secundario */}
            <Link
              className="w-75 mt-2 py-2 fw-semibold shadow-md btn btn-outline-dark"
              to="/user/carrito"
              state={{ producto }}
            >
              Agregar al carrito
            </Link>

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