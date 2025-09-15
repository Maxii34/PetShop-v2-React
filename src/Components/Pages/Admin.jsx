import { Link } from "react-router";
import { Table } from "react-bootstrap";
import ItemProductos from "../Productos/ItemProductos";


const Administrador = ({ productos, borrarProducto }) => {
  return (
    <section className="container my-4">
      <div className="d-flex justify-content-between align-content-center">
        <h1>Productos disponibles</h1>
        <div>
          <Link to="/crear" className="btn btn-primary shadow m-1">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center align-middle">
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Marca</th>
            <th>URL de imagen</th>
            <th>Categoria</th>
            <th>Peso (kg)</th>
            <th>Stock disp.</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((itemProducto, indice) => (
            <ItemProductos 
            itemProducto={itemProducto}
            borrarProducto={borrarProducto}
            key={itemProducto.id}
            fila={indice + 1}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
