import { Link } from "react-router";
import { Button, Table } from "react-bootstrap";

const AdminCarousel = () => {
  return (
    <section className="container my-4">
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center">
        <h1>Productos disponibles</h1>
        <div>
          <Link to="crear" className="btn btn-primary shadow m-1">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button variant="danger" className="me-lg-2 shadow m-1">
            <i className="bi bi-trash"></i>
          </Button>
          <Button variant="info" className="text-light shadow">
            <i className="bi bi-database-fill-up"></i>
          </Button>
        </div>
      </div>

      <hr />

      {/* Tabla - solo una fila de ejemplo visual */}
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center align-middle">
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Marca</th>
            <th>URL de imagen</th>
            <th>Categoría</th>
            <th>Peso (kg)</th>
            <th>Stock disp.</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>

      {/* Botones de paginación visual */}
      <div className="text-center mt-3">
        <div className="d-flex justify-content-center align-items-center">
          <Button variant="primary" className="shadow mx-1">
            Ver más
          </Button>
          <Button variant="danger" className="shadow mx-1">
            Ver menos
          </Button>
          <Button variant="secondary" className="shadow mx-1">
            Restablecer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdminCarousel;
