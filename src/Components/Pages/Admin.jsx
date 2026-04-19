import { Link } from "react-router";
import { Button, Table, Spinner, Container } from "react-bootstrap";
import { ItemProductos } from "../index.jsx";
import Swal from "sweetalert2";
import { useState } from "react";
import { listarProductos } from "../helpers/productos.queries.js";
import { useEffect } from "react";
import { StatsCardsProduct } from "../Ui/Dasb/StatsCardsProduct";


export function Admin({ productos, setProductos }) {
  const [visible, setVisible] = useState(10);
  const [cargando, setCargando] = useState(true);

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

  const cargarProductos = async () => {
    setCargando(true);
    const respuesta = await listarProductos();
    if (respuesta) {
      setProductos(respuesta);
    }
    setCargando(false);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <> <Container>
      <div className="mb-4" style={{backgroundColor: "#e6e7e6", borderRadius: "10px", padding: "8px"}}>
        <h2 className="text-center text-muted">Estadisticas de productos</h2>
        <StatsCardsProduct productos={productos} />
        <span className="text-center text-muted px-2">Fecha: {new Date().toLocaleDateString()}</span>
      </div>
      
      <section id="topLine" className="container mt-1">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-md-items-center">
          <div className="mb-3 mb-md-0 w-100">
            <h1 className="mb-0 text-center w-100 text-muted">
              Productos recientemente agregados
            </h1>
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
            {cargando ? (
              <tr>
                <td colSpan="9" className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                  <span className="ms-2">Cargando productos...</span>
                </td>
              </tr>
            ) : productos.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-5">
                  No hay productos guardados disponibles.
                </td>
              </tr>
            ) : (
              productos
                .slice(0, visible)
                .map((itemProducto, indice) => (
                  <ItemProductos
                    itemProducto={itemProducto}
                    key={itemProducto._id}
                    fila={indice + 1}
                    cargarProductos={cargarProductos}
                  />
                ))
            )}
          </tbody>
        </Table>
        {!cargando && productos.length > 0 && (
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
        )}
      </section>
      </Container>
    </>
  );
}
