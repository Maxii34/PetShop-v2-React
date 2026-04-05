import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiCreditCard } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa6";
import "./EstilosCards.css";
import Swal from "sweetalert2";
import { crearCarrito } from "../helpers/carrito.queries";

export const CardsCarousel = ({ producto, handleShowCarrito }) => {
  // Porcentaje de descuento
  const porcentajeDescuento = producto.descuento || 0;

  // Precio con descuento aplicado (10% de descuento si paga efectivo)
  const precioConDescuento = Math.floor(producto.precio * 0.9);

  // Precio en 3 cuotas
  const precioDividido = Math.floor(precioConDescuento / 3);

  // Precio efectivo (10% descuento)
  const precioEfectivo = Math.floor(precioConDescuento);

  // 🔥 ACÁ
  const badgeStyle = {
    top: "10px",
    right: "10px",
    zIndex: 10,
    fontSize: "0.8rem",
  };

  const agregarAlCarrito = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Evita que se propague al Link padre

    try {
      // 1. Obtenemos el usuario del sessionStorage
      const usuario = JSON.parse(sessionStorage.getItem("usuariokey"));
      const usuarioId = usuario ? usuario._id || usuario.id : null;

      if (!usuarioId) {
        Swal.fire({
          icon: "warning",
          title: "Atención",
          text: "Debes iniciar sesión para agregar productos al carrito",
        });
        return;
      }
      const nuevoCarrito = {
        user: usuarioId,
        items: [
          {
            product: producto._id,
            quantity: 1,
          },
        ],
      };

      // 2. Enviamos la petición al backend
      const respuesta = await crearCarrito(nuevoCarrito);
      if (respuesta && respuesta.ok) {
        console.log(respuesta);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Producto agregado",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });

        // 3. Mostramos el carrito visualmente
        handleShowCarrito();
      } else {
        throw new Error("Error en la respuesta del backend");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al agregar al carrito",
      });
    }
  };

  return (
    <div className="card card-wrapper product-card h-100">
      {/* Contenedor clickeable con Link */}
      <Link
        to="/user/detalle"
        state={{
          producto,
          precioOriginal: producto.precio,
          precioDescuento: precioConDescuento, 
          precioOferta: precioConDescuento,
          precioDividido: precioDividido,
          precioEfectivo: precioEfectivo,
        }}
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
            {producto.enOferta && producto.descuento > 0 ? (
              <span
                className="position-absolute badge rounded-pill bg-danger"
                style={badgeStyle}
              >
                -{producto.descuento}% OFF
              </span>
            ) : producto.esNuevo ? (
              <span
                className="position-absolute badge rounded-pill bg-success"
                style={badgeStyle}
              >
                ¡Nuevo!
              </span>
            ) : null}
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
            <div className="d-flex justify-content-center">
              <h3 className="mb-2 fw-bolder text-dark precio-Card">
                <span className="text-muted fs-6 me-2">
                  {porcentajeDescuento > 0 && (
                    <span className="text-decoration-line-through ms-1 text-danger">
                      ${producto.precio.toLocaleString("es-AR")}
                    </span>
                  )}
                </span>
                ${precioConDescuento.toLocaleString("es-AR")}
              </h3>
            </div>

            <div
              className="d-inline-block bg-light text-primary rounded-2 mb-2"
              style={{ fontSize: "0.85rem", fontWeight: "600" }}
            >
              <BiCreditCard className="me-1" />3 cuotas s/int de{" "}
              <br className="d-none text-md-block" /> ${" "}
              {precioDividido.toLocaleString("es-AR")}
            </div>

            <div className="text-success small fw-semibold">
              <span
                className="text-muted fw-normal text-decoration-none"
                style={{ fontSize: "0.8rem" }}
              >
                En efectivo:
              </span>
              $ {precioEfectivo.toLocaleString("es-AR")}
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
          onClick={agregarAlCarrito}
        >
          {" "}
          <FaCartArrowDown className="fs-5 me-1" /> Agregar
        </button>
      </div>
    </div>
  );
};