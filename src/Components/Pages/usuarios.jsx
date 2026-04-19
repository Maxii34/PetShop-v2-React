import { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { BsTrash, BsEye } from "react-icons/bs";
import Swal from "sweetalert2";
import { listarUsuarios, eliminarUsuario } from "../helpers/queries.js";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => { 
    setLoading(true);
    const respuesta = await listarUsuarios();
    if (respuesta && respuesta.ok) {
      setUsuarios(respuesta.usuarios);
    } else if (respuesta && Array.isArray(respuesta)) {
      setUsuarios(respuesta);
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudieron cargar los usuarios.",
        icon: "error",
      });
    }
    setLoading(false);
  };

  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este usuario?",
      text: "¡No podrás deshacer esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, ¡eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarUsuario(id);
        if (respuesta) {
          Swal.fire("¡Eliminado!", "El usuario ha sido eliminado.", "success");
          cargarUsuarios();
        } else {
          Swal.fire("Error", "No se pudo eliminar el usuario.", "error");
        }
      }
    });
  };

  const verData = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setUsuarioSeleccionado(null);
  };

  return (
    <section className="container my-4" id="topLine">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-md-items-center">
        <div className="mb-3 mb-md-0">
          <h1 className="mb-0 display-5">Listado de usuarios.</h1>
          <small className="text-muted">
            Gestiona los usuarios registrados en el sistema.
          </small>
        </div>
      </div>
      <hr />

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr className="text-center align-middle">
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((usuario, index) => (
                <tr
                  key={usuario._id || usuario.id}
                  className="text-center align-middle"
                >
                  <td>{index + 1}</td>
                  <td>{usuario.nombreUsuario || usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.rol || "Usuario"}</td>
                  <td>
                    <span
                      className={`badge ${
                        usuario.estado === "Inactivo" || usuario.estado === false
                          ? "bg-danger"
                          : "bg-success"
                      }`}
                    >
                      {usuario.estado === "Inactivo" || usuario.estado === false
                        ? "Inactivo"
                        : "Activo"}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        variant="info"
                        className="text-light shadow d-flex align-items-center"
                        onClick={() => verData(usuario)}
                        title="Ver Data"
                      >
                        <BsEye size={18} />
                      </Button>
                      <Button
                        variant="danger"
                        className="shadow d-flex align-items-center"
                        onClick={() => handleEliminar(usuario._id || usuario.id)}
                        title="Eliminar"
                      >
                        <BsTrash size={18} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No hay usuarios registrados.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}

      {/* Modal para ver detalles del usuario */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {usuarioSeleccionado && (
            <div className="d-flex flex-column gap-2">
              <p>
                <strong>ID:</strong>{" "}
                {usuarioSeleccionado._id || usuarioSeleccionado.id}
              </p>
              <p>
                <strong>Nombre:</strong>{" "}
                {usuarioSeleccionado.nombreUsuario || usuarioSeleccionado.nombre}
              </p>
              <p>
                <strong>Email:</strong> {usuarioSeleccionado.email}
              </p>
              <p>
                <strong>Rol:</strong>{" "}
                {usuarioSeleccionado.rol || "No asignado"}
              </p>
              <p>
                <strong>Estado:</strong>{" "}
                {usuarioSeleccionado.estado === "Inactivo" ||
                usuarioSeleccionado.estado === false
                  ? "Inactivo"
                  : "Activo"}
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
