import '../EstilosCards.css';

// Antes de props. usar sintaxis desestructuración 
const CardsCarousel = ({productosOferta}) => {
  const precioCuotas = productosOferta.precioEfectivo / productosOferta.cuotas;

  return (
    <div className="card card-wrapper">
      <div className="card product-card h-100">
        <img
          className="card-img-top"
          src={productosOferta.imagen || null}   
          alt={productosOferta.alt} 
          loading="lazy"
        />
        <div className="card-body d-flex text-center flex-column bod-top">
          <p className="card-title fw-bold">{productosOferta.nombreproducto}</p>
          <p className="price-main mt-2 mb-0"> ${productosOferta.precioOriginal}</p>
          <p className="price-cash mt-1 mb-1"> ${productosOferta.precioEfectivo} con Efectivo</p>
          <p className="installments mb-3">{productosOferta.cuotas} cuotas sin interés de $ {precioCuotas.toFixed(2)}</p>
          <div className="mt-auto d-flex justify-content-center">
            <a href="#" className="btn btn-custom mx-1 flex-shrink-0">COMPRAR</a>
            <a href="" className="btn btn-eye mx-1 text-decoration-none text-dark flex-shrink-0">
              <i className="bi bi-eye me-1"></i> VER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCarousel;
