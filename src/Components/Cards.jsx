import { Link } from "react-router";
import "../Components/EstilosCards.css";

// Antes de props. usar sintaxis desestructuración
const CardsProductos = ({ producto }) => {
  const precioCuotas = producto.precioEfectivo / producto.cuotas;



  return (
    <div className="card card-wrapper">
      <div className="card product-card h-100">
        <img
          className="card-img-top"
          src={producto.imagen || null}
          alt={producto.alt}
          loading="lazy"
        />
        <div className="card-body d-flex text-center flex-column bod-top">
          <p className="card-title fw-bold">{producto.nombreProducto}</p>
          <p className="price-main mt-2 mb-0"> ${producto.precioOriginal}</p>
          <p className="price-cash mt-1 mb-1">
            {" "}
            ${producto.precioEfectivo} con Efectivo
          </p>
          <p className="installments mb-3">
            {producto.cuotas} cuotas sin interés de $ {precioCuotas.toFixed(2)}
          </p>
          <div className="mt-auto d-flex justify-content-center">
            <Link className="btn btn-custom mx-1 flex-shrink-0">COMPRAR</Link>
            <Link
              to="/detalle"
              state={{ producto: producto }}
              className="btn btn-eye mx-1 text-decoration-none text-dark flex-shrink-0"
            >
              <i className="bi bi-eye me-1"></i> VER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProductos;
