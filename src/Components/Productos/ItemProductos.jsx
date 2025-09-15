import React from "react";
import { Link } from "react-router";

const ItemProductos = () => {
  return (
    <tr className="text-center align-middle shadow">
      <td>1</td>
      <td>Nombre del Producto</td>
      <td>$99.99</td>
      <td>
        <img
          src="https://via.placeholder.com/100"
          className="img-fluid rounded table-img"
          alt="Nombre del Producto"
          loading="lazy"
        />
      </td>
      <td>Categoría</td>
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
