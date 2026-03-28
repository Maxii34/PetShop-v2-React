import { BsTrash, BsPlus, BsDash } from "react-icons/bs";
import "./EstilosCards.css";
import { useState } from "react";

export const CarritoProductos = ({ producto, setProductox }) => {
  const [cantidad, setCantidad] = useState(1);


  const handleCantidad = (operacion) => {
    if (operacion === "sumar") {
      setCantidad(cantidad + 1);
      setProductox(cantidad + 1);
    } else if (operacion === "restar" && cantidad > 1) {
      setCantidad(cantidad - 1);
      setProductox(cantidad - 1);
    }
  };
  return (
    <>
      <div className="card-producto d-flex align-items-center justify-content-between">
        {/* SECCIÓN 1: Imagen y Texto */}
        <div className="d-flex align-items-center gap-2">
          {/* Contenedor circular de la imagen */}
          <div className="img-circular">
            <img src={producto.imagenes[0]} alt="Producto" />
          </div>

          <div>
            <h6 className="mb-1 fw-bold text-dark">
              {producto.nombre || "Producto no encontrado"}
            </h6>
            <small className="text-muted fw-normal">
              Peso: {producto.detalles.peso || ""}
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
          <span className="precio-final">$ {producto.precio}</span>
          <button className="eliminar-item">
            <BsTrash size={19} />
          </button>
        </div>
      </div>
    </>
  );
};
