import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { BiCreditCard } from "react-icons/bi";
import "./EstilosCards.css";

export const CardsProductos = ({ producto }) => {
  console.log(producto);

  const precioDividido = (producto.precio / 3).toFixed(0);
  const precioEfectivo = producto.precio * 0.9;

  return (
    <div className="card card-wrapper product-card border-0 shadow-sm h-100">
      <div
        style={{ height: "200px", overflow: "hidden" }}
        className="p-3 position-relative"
      >
        <img
          className="card-img-top w-100 h-100"
          src={producto.imagenes[0]}
          alt="Producto"
          style={{ objectFit: "contain" }}
          loading="lazy"
        />
      </div>

      <div className="card-body d-flex flex-column text-center pt-0">
        <h5
          className="card-title fw-bold text-dark mb-3"
          title={producto.nombre}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "48px",
          }}
        >
          {producto.nombre}
        </h5>

        <div className="mb-4">
          <h3 className="mb-2 fw-bolder text-dark">$ {producto.precio}</h3>

          <div
            className="d-inline-block bg-light text-primary px-2 py-1 rounded-2 mb-2"
            style={{ fontSize: "0.85rem", fontWeight: "600" }}
          >
            <BiCreditCard className="me-1" />3 cuotas s/int de <br /> ${" "}
            {precioDividido}
          </div>

          <div className="text-success small fw-semibold">
            <span
              className="text-muted fw-normal text-decoration-none"
              style={{ fontSize: "0.8rem" }}
            >
              Efectivo:{" "}
            </span>
            $ {precioEfectivo}
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
