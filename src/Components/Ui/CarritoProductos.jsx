import { BsTrash, BsPlus, BsDash } from "react-icons/bs";
import "./EstilosCards.css";


export const CarritoProductos = () => {
  return (
    <>
          <div className="card-producto d-flex align-items-center justify-content-between">
            {/* SECCIÓN 1: Imagen y Texto */}
            <div className="d-flex align-items-center gap-2">
              {/* Contenedor circular de la imagen */}
              <div className="img-circular">
                <img
                  src="https://images.pexels.com/photos/11671275/pexels-photo-11671275.jpeg"
                  alt="Producto"
                />
              </div>

              <div>
                <h6 className="mb-1 fw-bold text-dark">
                  Alimento Premium Gato
                </h6>
                <small className="text-muted fw-normal">Tamaño: 3kg</small>
              </div>
            </div>

            <div className="selector-cantidad">
              <button className="btn-qty">
                <BsDash />
              </button>
              <span className="qty-numero">1</span>
              <button className="btn-qty">
                <BsPlus />
              </button>
            </div>

            <div className="d-flex align-items-center gap-2 mx-1">
              <span className="precio-final">$150.990</span>
              <button className="btn-eliminar-item">
                <BsTrash size={19} />
              </button>
            </div>
          </div>
    </>
  );
};
