import { Col, Container, Row } from "react-bootstrap";
import { CarritoProductos, SectorPagos } from "../index.jsx";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { eliminarCarrito } from "../helpers/carrito.queries";

export const CarritoPagos = ({titulo}) => {
  const location = useLocation();

  const stateProducto = location.state?.producto;
  const statePrecioConDescuento = location.state?.precioConDescuento;
  
  // Usamos un estado para los productos así podemos actualizar las cantidades desde CarritoProductos
  const [productos, setProductos] = useState(() => {
    // Si viene de comprar directo, array de 1. Sino, vacío hasta cargar.
    return stateProducto ? [{ ...stateProducto, cantidad: 1, precioConDescuento: statePrecioConDescuento }] : [];
  });

  useEffect(() => {
    if (!stateProducto) {
      cargarCarritoBackend();
    }
  }, [stateProducto]);

  const cargarCarritoBackend = async () => {
    try {
      const { listarCarrito } = await import("../helpers/carrito.queries");
      const res = await listarCarrito();
      if (res && res.ok && res.carrito && res.carrito.items) {
        const productosMapeados = res.carrito.items.map(item => {
           if (item.product && typeof item.product === 'object' && item.product.nombre) {
             return { ...item.product, cantidad: item.quantity, _id: item.product._id || item.product.id };
           }
           return { ...item, cantidad: item.quantity || item.cantidad || 1 };
        });
        setProductos(productosMapeados);
      }
    } catch(err) {
      console.error(err);
    }
  };

  // Función para que CarritoProductos pueda actualizar la cantidad de un ítem
  const actualizarCantidad = (id, nuevaCantidad) => {
    const nuevosProductos = productos.map((p) => {
      if ((p._id || p.id) === id) {
        return { ...p, cantidad: nuevaCantidad };
      }
      return p;
    });
    setProductos(nuevosProductos);
    // TODO: Idealmente también enviar al backend la nueva cantidad
  };

  const eliminarProducto = async (id) => {
    const nuevosProductos = productos.filter((p) => (p._id || p.id) !== id);
    setProductos(nuevosProductos);
    if (!stateProducto) {
      try {
        await eliminarCarrito(id);
      } catch (error) {
        console.error(error);
      }
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
