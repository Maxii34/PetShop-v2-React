import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { BsTrash, BsPlus, BsDash, BsCartCheck } from "react-icons/bs";
import { Link } from "react-router";

export const CarritoModal = ({ handleCloseCarrito, showCarrito }) => {
  const productos = [
    {
      id: 1,
      nombre: "Camiseta React",
      precio: 2500,
      cantidad: 2,
      img: "https://images.pexels.com/photos/11671275/pexels-photo-11671275.jpeg",
    },
    {
      id: 2,
      nombre: "Auriculares Dev",
      precio: 15000,
      cantidad: 1,
      img: "https://images.pexels.com/photos/11671275/pexels-photo-11671275.jpeg",
    },
    {
      id: 3,
      nombre: "Stickers JS",
      precio: 500,
      cantidad: 5,
      img: "https://images.pexels.com/photos/11671275/pexels-photo-11671275.jpeg",
    },
  ];

  const totalCompra = productos.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <>
      <Modal show={showCarrito} onHide={handleCloseCarrito} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito de Compras</Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-0">
          {productos.length === 0 ? (
            <p className="text-center">El carrito está vacío.</p>
          ) : (
            <ListGroup variant="flush">
              {productos.map((prod) => (
                <ListGroup.Item
                  key={prod.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center justify-content-evenly gap-3">
                    <img
                      src={prod.img}
                      alt={prod.nombre}
                      className="imagen-Carrito"
                    />
                    <div>
                      <h6 className="text-nombre">{prod.nombre}</h6>
                      <small className="text-precio">${prod.precio} c/u</small>
                      <div>
                        <span className="text-cantidad">
                          Cantidad: {prod.cantidad}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center gap-3"
                    style={{ minWidth: "80px" }}
                  >
                    <p className="text-precio-total">
                      ${prod.precio * prod.cantidad}
                    </p>
                  </div>

                  <Button variant="danger" size="sm" className="btn-eliminar">
                    <BsTrash />
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <div className="fw-bold fs-5">Total: ${totalCompra}</div>
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 w-100">
            <Button
              variant="secondary"
              onClick={handleCloseCarrito}
              className="btn-seguir w-100 w-sm-auto"
            >
              Seguir comprando
            </Button>

            <Button
              as={Link}
              to="/carrito"
              variant="primary"
              className="btn-finalizar w-100 w-sm-auto"
            >
              Finalizar Compra
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
