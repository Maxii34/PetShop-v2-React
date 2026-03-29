import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom"; // Se utiliza react-router-dom para compatibilidad
import { useState, useEffect } from "react";

export const CarritoModal = ({ handleCloseCarrito, showCarrito }) => {
  // Inicializamos el carrito localmente
  const [carrito, setCarrito] = useState([]);

  // Cada vez que se abre el modal, cargamos el carrito de localStorage
  useEffect(() => {
    if (showCarrito) {
      const storedCart = JSON.parse(localStorage.getItem("carrito")) || [];
      setCarrito(storedCart);
    }
  }, [showCarrito]);

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((prod) => (prod._id || prod.id) !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  const totalCompra = carrito.reduce(
    (acc, item) => acc + item.precio * (item.cantidad || 1),
    0
  );

  return (
    <>
      <Modal show={showCarrito} onHide={handleCloseCarrito} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito de Compras</Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-0">
          {carrito.length === 0 ? (
            <p className="text-center my-4 fs-5 text-muted">El carrito está vacío.</p>
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
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-nombre mb-1 fw-bold">{prod.nombre}</h6>
                      <small className="text-precio text-muted d-block mb-1">
                        Precio unitario: ${prod.precio}
                      </small>
                      <span className="badge bg-secondary">
                        Cantidad: {prod.cantidad || 1}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between w-100 mt-3 mt-sm-0 px-sm-3" style={{ maxWidth: "200px" }}>
                    <p className="text-precio-total mb-0 fw-bold text-success fs-5">
                      ${prod.precio * (prod.cantidad || 1)}
                    </p>
                    <Button 
                      variant="outline-danger" 
                      size="sm" 
                      className="btn-eliminar rounded-circle p-2"
                      onClick={() => eliminarProducto(prod._id || prod.id)}
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

        <Modal.Footer className="d-flex flex-column flex-md-row justify-content-between bg-light">
          <div className="fw-bold fs-4 mb-3 mb-md-0 text-dark">
            Total: <span className="text-success">${totalCompra}</span>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 w-100 w-md-auto">
            {carrito.length > 0 && (
              <Button 
                variant="outline-danger" 
                onClick={vaciarCarrito}
                className="w-100 w-sm-auto"
              >
                Vaciar Carrito
              </Button>
            )}
            
            <Button
              onClick={handleCloseCarrito}
              variant="outline-secondary"
              className="w-100 w-sm-auto"
            >
              Seguir comprando
            </Button>

            <Link
              to="/user/carrito"
              onClick={handleCloseCarrito}
              className="btn btn-success fw-bold w-100 w-sm-auto"
            >
              Ir a Pagar
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
