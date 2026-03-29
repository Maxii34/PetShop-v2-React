import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiCreditCard } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa6";
import "./EstilosCards.css";
import Swal from "sweetalert2";

export const CardsProductos = ({ producto, handleShowCarrito }) => {

  const precioDividido = (producto.precio / 3).toFixed(0);
  const precioEfectivo = producto.precio * 0.9;

  const agregarAlCarrito = () => {
    handleShowCarrito();
  }

  return (
    <div className="card card-wrapper product-card h-100">
      {/* Contenedor clickeable con Link */}
      <Link
        to="/user/detalle"
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
            src={producto.imagenes[0]}
            alt="Producto"
            style={{ objectFit: "contain" }}
            loading="lazy"
          />
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
        <Link
          className="btn btn-buy flex-grow-1 d-flex justify-content-center align-items-center"
          to="/user/comprar"
          state={{ producto }}
          style={{ fontSize: "0.9rem" }}
          onClick={(e) => {
            e.stopPropagation(); // Evita que se propague al Link padre
          }}
        >
          <RiMoneyDollarCircleFill className="fs-5 me-1" /> Comprar
        </Link>
        <button
          className="btn btn-add-cart flex-grow-1 d-flex align-items-center justify-content-center bg-light text-dark border"
          title="Agregar al carrito"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); // Evita que se propague al Link padre
            
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            const tokenIdentificador = producto._id || producto.id;
            const existe = carrito.find(item => (item._id || item.id) === tokenIdentificador);
            
            if(existe) {
              existe.cantidad = (existe.cantidad || 1) + 1;
            } else {
              carrito.push({ ...producto, cantidad: 1 });
            }
            
            localStorage.setItem("carrito", JSON.stringify(carrito));
            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Producto agregado',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });

            handleShowCarrito();
          }}
        > <FaCartArrowDown className="fs-5 me-1" /> Agregar
        </button>
      </div>
    </div>
  );
};