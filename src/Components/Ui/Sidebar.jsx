import { NavLink } from "react-router"; 
import { BsPlusCircle, BsBoxSeam, BsPeople } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <aside
      className="sidebar-custom d-flex flex-column shadow"
      style={{ minHeight: "100vh", position: "sticky", top: 0 }}
    >
      <div className="p-4 fs-4 fw-bold border-bottom border-secondary border-opacity-25">
        Admin Panel
      </div>

      <nav className="flex-grow-1 p-3 d-flex flex-column gap-2 mt-3">
        {/* Opción 1: Agregar productos */}
        <NavLink
            to="/admin/crear"
            className={({ isActive }) =>
              `text-decoration-none p-3 rounded d-flex align-items-center sidebar-link ${isActive ? "active" : ""}`
            }
        >
          <BsPlusCircle className="me-3 fs-5" /> Agregar productos
        </NavLink>

        {/* Opción 2: Ver productos agregados */}
        <NavLink
            to="/admin/productos"
            className={({ isActive }) =>
              `text-decoration-none p-3 rounded d-flex align-items-center sidebar-link ${isActive ? "active" : ""}`
            }
        >
          <BsBoxSeam className="me-3 fs-5" /> Ver productos agregados
        </NavLink>

        {/* Opción 3: Listado de usuarios */}
        <div className="text-decoration-none p-3 rounded d-flex align-items-center sidebar-link">
          <BsPeople className="me-3 fs-5" /> Listado de usuarios
        </div>
      </nav>
    </aside>
  );
};