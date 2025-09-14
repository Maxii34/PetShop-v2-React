import React from "react";

const ItemProductos = () => {
  return (
    <tr className="text-center align-middle">
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
        <div className="d-flex justify-content-center gap-2">
          <a className="me-lg-2 btn btn-warning" href="/editar">
            <i className="bi bi-pencil-square"></i>
          </a>
          <a className="btn btn-danger btn-sm shadow" href="">
            <i className="bi bi-trash"></i>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default ItemProductos;
