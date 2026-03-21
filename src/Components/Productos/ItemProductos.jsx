import { Link } from "react-router";
import Swal from "sweetalert2";
import { BsTrash, BsPencil } from "react-icons/bs";
import "./productos.css";
import { eliminarProducto } from "../helpers/productos.queries";

export const ItemProductos = ({ itemProducto, fila, cargarProductos }) => {
  const formatoMoneda = (valor) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(valor);
  };
  const stockBajo = itemProducto.stock < 5;

  const eliminarProductos = () => {
    Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      focusCancel: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await eliminarProducto(itemProducto._id);
        if (response && response.ok) {
          Swal.fire({
            title: "¡Eliminado!",
            text: "El producto ha sido borrado exitosamente.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          await cargarProductos();
        } else {
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar el producto.",
            icon: "error",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      }
    });
  };

  return (
    <tr className="align-middle border-bottom transition-effect hover-row">
      {/* Índice: Color atenuado */}
      <td className="text-secondary fw-light">{fila}</td>

      {/* Nombre: Alineado a la izquierda y negrita */}
      <td className="text-start fw-semibold text-dark">
        {itemProducto.nombre}
      </td>

      {/* Precio: Formateado correctamente */}
      <td className="font-monospace text-nowrap">
        {formatoMoneda(itemProducto.precio)}
      </td>

      <td className="text-muted small text-center">{itemProducto.marca}</td>

      {/* Imagen: Con borde sutil y placeholder por seguridad */}
      <td>
        <div className="d-flex justify-content-center">
          <img
            src={itemProducto.imagenes[0]}
            className="rounded border bg-white p-1"
            alt="Productos PetShop"
            style={{ width: "45px", height: "45px", objectFit: "contain" }}
            loading="lazy"
          />
        </div>
      </td>

      {/* Categoría: Estilo Badge minimalista */}
      <td>
        <span className="badge bg-light text-secondary border fw-normal px-2 py-1">
          {itemProducto.categoria}
        </span>
      </td>

      <td className="text-center">{itemProducto.detalles.peso} kg</td>

      {/* Stock: Rojo si es bajo, Verde si es alto */}
      <td
        className={`fw-bold ${
          stockBajo ? "text-danger" : "text-success"
        } text-center`}
      >
        {itemProducto.stock} u.
      </td>

      {/* Acciones */}
      <td>
        <div className="d-flex justify-content-center gap-2">
          <Link
            className="btn-icono btn-editar-item"
            to={`/admin/editar/${itemProducto._id}`}
            title="Editar producto"
          >
            <BsPencil size={18} />
          </Link>

          <button
            className="btn-icono btn-eliminar-item"
            onClick={eliminarProductos}
            title="Eliminar producto"
          >
            <BsTrash size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};
