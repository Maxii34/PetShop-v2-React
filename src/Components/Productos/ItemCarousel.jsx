import { Link } from "react-router";

const ItemCarousel = () => {
  return (
    <tr className="text-center align-middle shadow">
      <td>1</td>
      <td>Nombre del producto</td>
      <td>32500</td>
      <td>Marca Ejemplo</td>
      <td>
        <img
          src="https://via.placeholder.com/80"
          className="img-fluid rounded table-img"
          alt="Producto ejemplo"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
          loading="lazy"
        />
      </td>
      <td>Alimentos</td>
      <td>3kg</td>
      <td>45</td>
      <td>
        <div className="d-flex justify-content-center gap-1">
          <Link className="me-lg-2 btn btn-warning shadow" to="editar">
            <i className="bi bi-pencil-square"></i>
          </Link>
          <button className="me-lg-2 btn btn-danger shadow">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemCarousel;
