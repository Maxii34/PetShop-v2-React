import '../Ui/EstilosCards.css';

// Antes de props. usar sintaxis desestructuración 
export const CardsCarousel = () => {
 

  return (
    <div className="card card-wrapper">
      <div className="card product-card h-100">
        <img
          className="card-img-top"
          src="https://images.pexels.com/photos"   
          alt="Card image cap"
          loading="lazy"
        />
        <div className="card-body d-flex text-center flex-column bod-top">
          <p className="card-title fw-bold"> </p>
          <p className="price-main mt-2 mb-0"> $</p>
          <p className="price-cash mt-1 mb-1"> $ con Efectivo</p>
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


