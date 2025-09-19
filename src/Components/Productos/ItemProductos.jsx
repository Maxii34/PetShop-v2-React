import { Link } from "react-router";
import Swal from "sweetalert2";

const ItemProductos = ({ itemProducto, fila, borrarProducto }) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar?",
      text: "No se puede revertir este paso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        if (borrarProducto(itemProducto.id)) {
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto eliminado correctamente`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <tr className="text-center align-middle shadow">
      <td>{fila}</td>
      <td>{itemProducto.nombreProducto}</td>
      <td>{itemProducto.precioOriginal}</td>
      <td>{itemProducto.marca}</td>
      <td>
        <img
          src={itemProducto.imagen || null}
          className="img-fluid rounded table-img"
          alt={itemProducto.alt}
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
          loading="lazy"
        />
      </td>
      <td>{itemProducto.categoria}</td>
      <td>{itemProducto.peso}</td>
      <td>{itemProducto.stock}</td>
      <td>
        <div className="d-flex justify-content-center gap-1">
          <Link className="me-lg-2 btn btn-warning shadow" to={`editar/${itemProducto.id}`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <button className="me-lg-2 btn btn-danger shadow" onClick={eliminarProducto}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemProductos;
