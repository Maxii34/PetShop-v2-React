import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { BsTrash, BsPlus, BsDash, BsCartCheck } from "react-icons/bs";
import { NavLink } from "react-router";

export const CarritoModal = ({ handleCloseCarrito, showCarrito }) => {
  const productos = [
    {
      id: 1,
      nombre: "Camiseta React",
      precio: 2500,
      cantidad: 2,
      img: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      nombre: "Auriculares Dev",
      precio: 15000,
      cantidad: 1,
      img: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      nombre: "Stickers JS",
      precio: 500,
      cantidad: 5,
      img: "https://via.placeholder.com/50",
    },
  ];

  const totalCompra = productos.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <>
      <Modal show={showCarrito} onHide={handleCloseCarrito} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito de Compras</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {productos.length === 0 ? (
            <p className="text-center">El carrito está vacío.</p>
          ) : (
            <ListGroup variant="flush">
              {productos.map((prod) => (
                <ListGroup.Item
                  key={prod.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={prod.img}
                      alt={prod.nombre}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                    <div>
                      <h6 className="m-0">{prod.nombre}</h6>
                      <small className="text-muted">${prod.precio} c/u</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <span className="fw-bold">{prod.cantidad}</span>
                  </div>

                  <div className="text-end" style={{ minWidth: "80px" }}>
                    <p className="m-0 fw-bold">
                      ${prod.precio * prod.cantidad}
                    </p>
                  </div>

                  <Button variant="danger" size="sm">
                    <BsTrash />
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <div className="fw-bold fs-5">Total: ${totalCompra}</div>
          <div>
            <NavLink to={"/carrito"} variant="secondary" className="me-2">
              Ir a la pagina
            </NavLink>
            <Button
              variant="secondary"
              onClick={handleCloseCarrito}
              className="me-2"
            >
              Seguir comprando
            </Button>
            <Button variant="primary">
              <BsCartCheck className="me-2" />
              Finalizar Compra
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
