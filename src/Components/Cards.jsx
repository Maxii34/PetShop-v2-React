import '../Components/EstilosCards.css'

const CardsProductos = (props) => {
  return (
    <div className="card card-wrapper">
      <div className="card product-card h-100">
        <img
          src="/img/agility-dermacontrol1-fc612fc1a7b32d6dc216582637120280-640-0.png"
          alt="Producto"
          loading="lazy"
          className="card-img-top"
        />
        <div className="card-body d-flex text-center flex-column bod-top">
          <p className="card-title fw-bold">
            {props.nombreProducto}
          </p>
          <p className="price-main mt-2 mb-0">{props.precio}</p>
          <p className="price-cash mt-1 mb-1">{props.precioEfectivo} con Efectivo</p>
          <p className="installments mb-3">{props.cuotas} cuotas sin interés de {props.precioCuotas}</p>
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
