import '../Components/EstilosCards.css'

// Antes de props. usar sintaxis desestructuración 
const CardsProductos = ({imagen, alt, nombreProducto, precio, precioEfectivo, cuotas, precioCuotas}) => {
  return (
    <div className="card card-wrapper">
      <div className="card product-card h-100">
        <img
          className="card-img-top"
          src={imagen}   
          alt={alt}
          loading="lazy"
        />
        <div className="card-body d-flex text-center flex-column bod-top">
          <p className="card-title fw-bold">
            {nombreProducto}
          </p>
          <p className="price-main mt-2 mb-0">{precio}</p>
          <p className="price-cash mt-1 mb-1">{precioEfectivo} con Efectivo</p>
          <p className="installments mb-3">{cuotas} cuotas sin interés de {precioCuotas}</p>
          <div className="mt-auto d-flex justify-content-center">
            <a href="#" className="btn btn-custom mx-1 flex-shrink-0">
              COMPRAR
            </a>
            <a
              href=""
              className="btn btn-eye mx-1 text-decoration-none text-dark flex-shrink-0"
            >
              <i className="bi bi-eye me-1"></i> VER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProductos;
