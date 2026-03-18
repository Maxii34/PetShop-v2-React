import { Link } from "react-router";
import Swal from "sweetalert2";
import { BsTrash, BsPencil } from "react-icons/bs";
import "./productos.css";

export const ItemProductos = ({ itemProducto, fila }) => {
  console.log(itemProducto);
  // 1. Helper para formatear dinero (hace que se vea profesional)
  const formatoMoneda = (valor) => {
    return new Intl.NumberFormat("es-AR", {
      // Cambia 'es-AR' según tu país
      style: "currency",
      currency: "ARS",
    }).format(valor);
  };

  // 2. Lógica para el color del Stock (Alerta visual)
  const stockBajo = itemProducto.stock < 5; 

  const eliminarProducto = () => {
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
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO: Hacer petición al backend para eliminar el producto
        /*
        const response = await api.delete(`/productos/${itemProducto.id}`);
        if(response.ok) {
        */
        Swal.fire({
          title: "¡Eliminado!",
          text: "El producto ha sido borrado exitosamente.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        /* } */
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
            src={itemProducto.imagenes }
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
            to={`editar/${itemProducto.id}`}
            title="Editar producto"
          >
            <BsPencil size={18} />
          </Link>

          <button
            className="btn-icono btn-eliminar-item"
            onClick={eliminarProducto}
            title="Eliminar producto"
          >
            <BsTrash size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};
