import { Link } from "react-router";

const ItemProductos = ({itemProducto, fila}) => {
  return (
    <tr className="text-center align-middle shadow">
      <td>{fila}</td>
      <td>{itemProducto.nombreProducto}</td>
      <td>{itemProducto.precioOriginal}</td>
      <td>{itemProducto.marca}</td>
      <td>
        <img
          src={itemProducto.imagen}
          className="img-fluid rounded table-img"
          alt="Nombre del Producto"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
          loading="lazy"
        />
      </td>
      <td>{itemProducto.categoria}</td>
      <td>{itemProducto.peso}</td>
      <td>{itemProducto.stock}</td>
      <td>
        <div className="d-flex justify-content-center gap-1">
          <Link className="me-lg-2 btn btn-warning" to="/editar">
            <i className="bi bi-pencil-square"></i>
          </Link>
          <button className="me-lg-2 btn btn-danger shadow" >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemProductos;
