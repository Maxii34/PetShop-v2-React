import React from "react";

const ItemProductos = () => {
  return (
    <tr class="text-center align-middle">
      <td>1</td>
      <td>Nombre del Producto</td>
      <td>$99.99</td>
      <td>
        <img
          src="https://via.placeholder.com/100"
          class="img-fluid rounded table-img"
          alt="Nombre del Producto"
          loading="lazy"
        />
      </td>
      <td>Categoría</td>
      <td>
        <div class="d-flex justify-content-center gap-2">
          <a class="me-lg-2 btn btn-warning" href="/admin/editar">
            <i class="bi bi-pencil-square"></i>
          </a>
          <a class="btn btn-danger btn-sm shadow" href="">
            <i class="bi bi-trash"></i>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default ItemProductos;
