import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiCreditCard } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa6";

import "./EstilosCards.css";

export const CardsCarousel = ({ producto }) => {
  if (!producto) return null;

  const precioDividido = Math.floor(producto.precio / 3);
  const precioEfectivo = Math.floor(producto.precio * 0.9);

  return (
    <div className="card card-wrapper product-card h-100">
      {/* Contenedor clickeable con Link */}
      <Link
        to="/detalle"
        state={{ producto }}
        className="text-decoration-none text-dark"
        style={{ cursor: "pointer" }}
      >
        <div
          style={{ height: "200px", overflow: "hidden" }}
          className="p-3 position-relative"
        >
          <img
            className="card-img-top w-100 h-100"
            src={producto?.imagenes?.[0] || ""}
            alt={producto?.nombre || "Producto"}
            style={{ objectFit: "contain" }}
            loading="lazy"
          />
          {/* --- AQUÍ ESTÁ EL BADGE --- */}
          <span
            className="position-absolute badge rounded-pill bg-danger"
            style={{
              top: "10px", 
              right: "10px", 
              zIndex: 10,
              fontSize: "0.8rem", // Tamaño de la letra
            }}
          >
            20% OFF
          </span>
        </div>

        <div className="card-body d-flex flex-column text-center pt-0">
          <h5
            className="card-title text-dark mb-3"
            title={producto.nombre}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "40px",
            }}
          >
            {producto.nombre}
          </h5>

          <div className="mb-4">
            <h3 className="mb-2 fw-bolder text-dark precio-Card">$ {producto.precio}</h3>

            <div
              className="d-inline-block bg-light text-primary rounded-2 mb-2"
              style={{ fontSize: "0.85rem", fontWeight: "600" }}
            >
              <BiCreditCard className="me-1" />3 cuotas s/int de <br className="d-none text-md-block" /> ${" "}
              {precioDividido}
            </div>

            <div className="text-success small fw-semibold">
              <span
                className="text-muted fw-normal text-decoration-none"
                style={{ fontSize: "0.8rem" }}
              >
                En efectivo:  
              </span>
               $ {precioEfectivo}
            </div>
          </div>
        </div>
      </Link>

      {/* Botones fuera del Link */}
      <div className="card-body d-flex justify-content-center gap-2 pt-0">
        <button
          className="btn btn-buy flex-grow-1 d-flex justify-content-center align-items-center"
          style={{ fontSize: "0.9rem" }}
          onClick={(e) => {
            e.stopPropagation(); // Evita que se propague al Link padre
            // Aquí va la lógica de compra
          }}
        >
          <RiMoneyDollarCircleFill className="fs-5 me-1" /> Comprar
        </button>
        <button
          className="btn btn-add-cart flex-grow-1 d-flex align-items-center justify-content-center bg-light text-dark border"
          title="Agregar al carrito"
          onClick={(e) => {
            e.stopPropagation(); // Evita que se propague al Link padre
            // Aquí va la lógica de agregar al carrito
          }}
        > <FaCartArrowDown className="fs-5 me-1" /> Agregar
        </button>
      </div>
    </div>
  );
};
