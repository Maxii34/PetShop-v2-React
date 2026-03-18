import { Link } from "react-router";
import { Button, Table } from "react-bootstrap";
import { ItemProductos } from "../index.jsx";
import Swal from "sweetalert2";
import { useState } from "react";

export function Admin({ productos, setProductos }) {

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
        <div className="mb-3 mb-md-0 w-100">
          <h1 className="mb-0 display-5 text-center w-100">Listado de productos agregados.</h1>
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
