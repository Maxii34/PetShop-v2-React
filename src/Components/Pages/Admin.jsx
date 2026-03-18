import { Link } from "react-router";
import { Button, Table } from "react-bootstrap";
import { ItemProductos } from "../index.jsx";
import productosObj from "../../data/ProductosObjeto";
import Swal from "sweetalert2";
import { useState } from "react";
import {
  BsFileEarmarkPlus,
  BsTrash,
  BsDatabaseFillAdd,
} from "react-icons/bs";

export function Admin({ productos, setProductos }) {
  const productosPrueba = () => {
    if (Array.isArray(productosObj) && productosObj.length > 0) {
      setProductos(productosObj);
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
        setProductos([]);
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
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-md-items-center">
        <div className="mb-3 mb-md-0">
          <h1 className="mb-0 display-5">Listado de productos agregados.</h1>
          <small className="text-muted">
            Agrega nuevos productos desde el Botom
            <strong className="">"Agregar Productos"</strong>
          </small>
        </div>
        <div className="d-flex gap-2 flex-wrap mt-2 mt-md-0">
          {/* Botón Agregar Productos */}
          <Link
            to="crear"
            className="btn btn-agregar shadow d-flex align-items-center"
          >
            <BsFileEarmarkPlus size={20} className="me-2" />
            Agregar Productos
          </Link>

          {/* Botón Borrar Todo */}
          <Button
            variant="danger"
            className="shadow d-flex align-items-center"
            onClick={borrarTodo}
            title="Borrar todo"
          >
            <BsTrash size={20} />
          </Button>

          {/* Botón Cargar Datos Prueba */}
          <Button
            variant="info"
            className="text-light shadow d-flex align-items-center"
            onClick={productosPrueba}
            title="Cargar datos de prueba"
          >
            <BsDatabaseFillAdd size={20} />
          </Button>
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
          {productos.slice(0, visible).map((itemProducto, indice) => (
            <ItemProductos
              itemProducto={itemProducto}
              key={itemProducto.id}
              fila={indice + 1}
            />
          ))}
        </tbody>
      </Table>
      <div className="text-center mt-3">
        {visible < productos.length ? (
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
}
