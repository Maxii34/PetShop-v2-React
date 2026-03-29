import { Col, Container, Row } from "react-bootstrap";
import { CarritoProductos, SectorPagos } from "../index.jsx";
import { useLocation } from "react-router";
import { useState } from "react";

export const CarritoPagos = ({titulo}) => {
  const location = useLocation();
  const stateProducto = location.state?.producto;
  
  // Usamos un estado para los productos así podemos actualizar las cantidades desde CarritoProductos
  const [productos, setProductos] = useState(() => {
    const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];
    // Si viene de comprar directo, array de 1. Sino, el carrito.
    return stateProducto ? [{ ...stateProducto, cantidad: 1 }] : carritoLocal;
  });

  // Función para que CarritoProductos pueda actualizar la cantidad de un ítem
  const actualizarCantidad = (id, nuevaCantidad) => {
    const nuevosProductos = productos.map((p) => {
      if ((p._id || p.id) === id) {
        return { ...p, cantidad: nuevaCantidad };
      }
      return p;
    });
    setProductos(nuevosProductos);
    // Solo actualizamos storage si no es una compra directa aislada
    if (!stateProducto) {
      localStorage.setItem("carrito", JSON.stringify(nuevosProductos));
    }
  };

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((p) => (p._id || p.id) !== id);
    setProductos(nuevosProductos);
    if (!stateProducto) {
      localStorage.setItem("carrito", JSON.stringify(nuevosProductos));
    }
  };

  return (
    <>
      <Container>
        {titulo === "Carrito" && (
          <div className="my-3 border-2 border-bottom text-center">
            <h1 className="fw-bolder text-dark text-muted display-6">Tu Carrito de Compras</h1>
            <span className="text-muted">
              Revisa tus articulos antes de finalizar la compra.
            </span>
          </div>
        )}

        {titulo === "Compra" && (
          <div className="my-3 border-2 border-bottom text-center">
            <h1 className="fw-bolder text-dark text-muted display-6">Finalizar Compra</h1>
            <span className="text-muted">
              Revisa tus articulos antes de finalizar la compra.
            </span>
          </div>
        )}

        <div className="d-flex flex-column my-1 border-1 border-bottom">
          <Row>
            <Col md={12} lg={8} className="my-4 d-flex flex-column gap-3">
              {productos.length > 0 ? (
                productos.map((prod) => (
                  <CarritoProductos
                    key={prod._id || prod.id}
                    producto={prod}
                    actualizarCantidad={actualizarCantidad}
                    eliminarProducto={eliminarProducto}
                  />
                ))
              ) : (
                <div className="text-center mt-5 text-muted">
                  <h4>No hay productos aquí.</h4>
                </div>
              )}
            </Col>
            <Col md={12} lg={4} className="my-4">
              <SectorPagos productos={productos} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
