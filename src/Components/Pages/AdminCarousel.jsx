import { Link } from "react-router";
import { Button, Table } from "react-bootstrap";
import ItemCarousel from "../Productos/ItemCarousel";
import ProductoObjetoCR from "../../data/ProductosObjetoCR";
import Swal from "sweetalert2";
import { useState } from "react";

const AdminCarousel = ({
  productosOferta,
  setProductosOferta,
  borrarProductoCR,
}) => {
  const productosPrueba = () => {
    if (Array.isArray(ProductoObjetoCR) && ProductoObjetoCR.length > 0) {
      setProductosOferta(ProductoObjetoCR);
      Swal.fire({
        title: "¡Éxito!",
        text: "Los productos de prueba se cargaron correctamente.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "No se encontraron productos para cargar.",
        icon: "error",
      });
    }
  };

  const borrarTodo = () => {
    Swal.fire({
      title: "¿Estás seguro de borrar todo.?",
      text: "¡No podrás deshacer esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, ¡borrar todo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setProductosOferta([]);
        Swal.fire(
          "¡Borrado!",
          "Todos los productos han sido eliminados.",
          "success"
        );
      }
    });
  };

  const [visible, setVisible] = useState(10);

  const mostrarMas = () => {
    setVisible((prev) => prev + 5); // suma 5 más cada vez
  };

  const mostrarMenos = () => {
    setVisible((prev) => (prev > 10 ? prev - 5 : 10));
    top();
  };

  const restablecer = () => {
    setVisible(10); // vuelve al estado inicial en lugar de restar
    top();
  };

  const top = () => {
    const seccion = document.getElementById("topLine");
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="topLine" className="container my-4">
      {/* Encabezado */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-md-items-center">
        <div className="mb-3 mb-md-0">
          <h1 className="mb-0">Panel de productos disponibles</h1>
          <small className="text-muted">
            Gestión de productos disponibles
            <strong>"vista pública en carrousel."</strong>
          </small>
        </div>
        <div className="d-flex gap-2 flex-wrap mt-2 mt-md-0">
          <Link to="crear" className="btn btn-primary shadow">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button variant="danger" className="shadow" onClick={borrarTodo}>
            <i className="bi bi-trash"></i>
          </Button>
          <Button
            variant="info"
            className="text-light shadow"
            onClick={productosPrueba}
          >
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
          {productosOferta.slice(0, visible).map((itemProductosC, indice) => (
            <ItemCarousel
              itemProductosC={itemProductosC}
              borrarProductoCR={borrarProductoCR}
              key={itemProductosC.id}
              fila={indice + 1}
            />
          ))}
        </tbody>
      </Table>

      {/* Botones de paginación visual */}
      <div className="text-center mt-3">
        {visible < productosOferta.length ? (
          <div
            id="mostarmenos"
            className=" d-flex justify-content-center align-content-center"
          >
            <Button
              variant="primary"
              className="shadow mx-1"
              onClick={mostrarMas}
            >
              Ver más
            </Button>
            <Button
              variant="danger"
              className="shadow mx-1"
              onClick={mostrarMenos}
            >
              Ver menos
            </Button>
          </div>
        ) : (
          <div className=" d-flex justify-content-center align-content-center">
            <Button
              variant="primary"
              className="shadow mx-1"
              onClick={mostrarMenos}
            >
              Ver menos
            </Button>
            <Button
              variant="danger"
              className="shadow mx-1"
              onClick={restablecer}
            >
              Restablecer
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminCarousel;
