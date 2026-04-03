import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { listarCarrito, eliminarCarrito } from "../helpers/carrito.queries";
import "./EstilosCards.css";

export const CarritoModal = ({ handleCloseCarrito, showCarrito }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (showCarrito) {
      cargarCarritoBackend();
    }
  }, [showCarrito]);

  const cargarCarritoBackend = async () => {
    try {
      const res = await listarCarrito();
      if (res && res.ok && res.carrito && res.carrito.items) {
        const productosMapeados = res.carrito.items.map((item) => {
          if (
            item.product &&
            typeof item.product === "object" &&
            item.product.nombre
          ) {
            return {
              ...item.product,
              cantidad: item.quantity,
              _id: item.product._id || item.product.id,
            };
          }
          return { ...item, cantidad: item.quantity || item.cantidad || 1 };
        });
        setCarrito(productosMapeados);
      } else {
        setCarrito([]);
      }
    } catch (err) {
      console.error("Error al cargar el carrito:", err);
      setCarrito([]);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      const res = await eliminarCarrito(id);
      if (res && res.ok) {
        cargarCarritoBackend();
      }
    } catch (error) {
      console.error("Error al eliminar el producto", error);
    }
  };

  const totalCompra = carrito.reduce(
    (acc, item) => acc + item.precio * (item.cantidad || 1),
    0
  );

  return (
    <Modal show={showCarrito} onHide={handleCloseCarrito} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Tu Carrito de Compras</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        {carrito.length === 0 ? (
          <p className="text-center my-4 fs-5 text-muted">
            El carrito está vacío.
          </p>
        ) : (
          <ListGroup variant="flush">
            {carrito.map((prod, index) => (
              <ListGroup.Item
                key={prod._id || prod.id || index}
                className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-3"
              >
                <div className="d-flex align-items-center justify-content-start gap-4 w-100">
                  <img
                    src={prod.imagenes ? prod.imagenes[0] : prod.img}
                    alt={prod.nombre}
                    className="imagen-Carrito rounded"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="flex-grow-1">
                    <h6 className="text-nombre mb-1 fw-bold">
                      {prod.nombre}
                    </h6>

                    <small className="text-precio d-block mb-1">
                      Precio unitario: ${prod.precio}
                    </small>

                    <span className="badge bg-secondary">
                      Cantidad: {prod.cantidad || 1}
                    </span>
                  </div>
                </div>

                <div
                  className="d-flex align-items-center justify-content-between w-100 mt-3 mt-sm-0 px-sm-3"
                  style={{ maxWidth: "200px" }}
                >
                  <p className="text-precio-total mb-0">
                    ${prod.precio * (prod.cantidad || 1)}
                  </p>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="btn-eliminar rounded-circle p-2"
                    onClick={() =>
                      eliminarProducto(prod._id || prod.id)
                    }
                    title="Eliminar del carrito"
                  >
                    <BsTrash className="fs-5" />
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>

      <Modal.Footer className="cart-footer">
        <div className="cart-total">
          Total: <span>${totalCompra}</span>
        </div>

        <div className="cart-actions">
          <Link
            to="/"
            onClick={handleCloseCarrito}
            className="btn-continue"
          >
            ← Seguir comprando
          </Link>

          <Link
            to="/user/carrito"
            onClick={handleCloseCarrito}
            className="btn-checkout"
          >
            Ir a pagar →
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  );
};