import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { BiCreditCard } from "react-icons/bi"; // Agregamos un icono de tarjeta
import "./EstilosCards.css";

export const CardsProductos = () => {
  return (
    <div className="card card-wrapper product-card border-0 shadow-sm h-100">
      {/* Imagen: Agregué 'object-fit-contain' para que no se recorte feo si la imagen es irregular */}
      <div
        style={{ height: "200px", overflow: "hidden" }}
        className="p-3 position-relative"
      >
        <img
          className="card-img-top w-100 h-100"
          src=""
          alt="Producto"
          style={{ objectFit: "contain" }}
          loading="lazy"
        />
      </div>

      <div className="card-body d-flex flex-column text-center pt-0">
        <h5
          className="card-title fw-bold text-dark text-truncate mb-3"
          title="Nombre Alimento Completo"
        >
          Nombre Alimento
        </h5>

        <div className="mb-4">
          <h3 className="mb-2 fw-bolder text-dark">$ 45.000</h3>

          <div
            className="d-inline-block bg-light text-primary px-2 py-1 rounded-2 mb-2"
            style={{ fontSize: "0.85rem", fontWeight: "600" }}
          >
            <BiCreditCard className="me-1" />3 cuotas s/int de $11.300
          </div>

          <div className="text-success small fw-semibold">
            <span
              className="text-muted fw-normal text-decoration-none"
              style={{ fontSize: "0.8rem" }}
            >
              Efectivo:{" "}
            </span>
            $ 43.000
          </div>
        </div>

        <div className="mt-auto d-flex justify-content-center gap-2 ">
          <Link
            className="btn btn-custom flex-grow-1 d-flex justify-content-center align-items-center"
            style={{ fontSize: "0.9rem" }}
          >
            <RiMoneyDollarCircleFill className="fs-5 me-1" /> Comprar
          </Link>
          <Link
            to="/detalle"
            state={{ producto: "producto" }}
            className="btn btn-eye d-flex align-items-center justify-content-center bg-light text-dark border"
            title="Ver más"
          >
            <MdVisibility className="fs-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
