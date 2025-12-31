import { BsTrash, BsPlus, BsDash } from "react-icons/bs";
import "./EstilosCards.css";


export const CarritoProductos = () => {
  return (
    <>
      <div className="card-producto d-flex align-items-center justify-content-between">
        {/* SECCIÓN 1: Imagen y Texto */}
        <div className="d-flex align-items-center gap-3">
          {/* Contenedor circular de la imagen */}
          <div className="img-circular">
            <img
              src="https://images.pexels.com/photos/11671275/pexels-photo-11671275.jpeg"
              alt="Producto"
            />
          </div>

          {/* Título y Variante */}
          <div>
            <h6 className="mb-1 fw-bold text-dark">Alimento Premium Gato</h6>
            <small className="text-muted fw-normal">Tamaño: 3kg</small>
          </div>
        </div>

        {/* SECCIÓN 2: Selector de Cantidad (La "Pastilla") */}
        <div className="selector-cantidad">
          <button className="btn-qty">
            <BsDash />
          </button>
          <span className="qty-numero">1</span>
          <button className="btn-qty">
            <BsPlus />
          </button>
        </div>

        {/* SECCIÓN 3: Precio y Eliminar */}
        <div className="d-flex align-items-center gap-4">
          <span className="precio-final">$15.99</span>
          <button className="btn-eliminar-item">
            <BsTrash size={18} />
          </button>
        </div>
      </div>
    </>
  );
};
