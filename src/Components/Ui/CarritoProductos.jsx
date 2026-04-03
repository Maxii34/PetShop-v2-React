import { BsTrash, BsPlus, BsDash } from "react-icons/bs";
import "./EstilosCards.css";

export const CarritoProductos = ({
  producto,
  actualizarCantidad,
  eliminarProducto,
}) => {
  const cantidad = producto.cantidad || 1;

  const handleCantidad = (operacion) => {
    if (operacion === "sumar") {
      actualizarCantidad(producto._id || producto.id, cantidad + 1);
    } else if (operacion === "restar" && cantidad > 1) {
      actualizarCantidad(producto._id || producto.id, cantidad - 1);
    }
  };

  return (
    <>
      <div className="card-producto d-flex align-items-center justify-content-between">
        {/* SECCIÓN 1: Imagen y Texto */}
        <div className="d-flex align-items-center gap-2">
          <div className="img-circular">
            <img
              src={producto.imagenes?.[0] || producto.img}
              alt="Producto"
            />
          </div>

          <div>
            <h6 className="mb-1 fw-bold text-dark">
              {producto.nombre}
            </h6>
            <small className="text-muted fw-normal">
              Peso: {producto.detalles?.peso || producto.peso}
            </small>
          </div>
        </div>

        <div className="selector-cantidad">
          <button className="btn-qty" onClick={() => handleCantidad("restar")}>
            <BsDash />
          </button>
          <span className="qty-numero">{cantidad}</span>
          <button className="btn-qty" onClick={() => handleCantidad("sumar")}>
            <BsPlus />
          </button>
        </div>

        <div className="d-flex align-items-center gap-2 mx-1">
          <span className="precio-final">$ {producto.precio * cantidad}</span>
          <button
            className="eliminar-item bg-transparent border-0 text-danger"
            title="Eliminar producto"
            onClick={() => eliminarProducto(producto._id || producto.id)}
          >
            <BsTrash size={19} />
          </button>
        </div>
      </div>
    </>
  );
};
