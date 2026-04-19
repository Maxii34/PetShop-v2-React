import { Outlet } from "react-router";
import { Sidebar } from "../Ui/Sidebar";

export const Dashboard = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", minHeight: "100vh" }}>
            
            {/* Componente Izquierdo (Panel Lateral) */}
            <div className="bg-white text-dark">
                <Sidebar /> 
            </div>

            {/* Componente Derecho (Contenido Principal) */}
            <main className="bg-light p-4 p-md-5">
                <div className="bg-white rounded shadow-sm p-4 p-md-5 h-100" style={{ minHeight: "80vh", overflowY: "auto" }}>
                    {/* El Outlet renderizará la sub-ruta actual, por ejemplo el componente Admin, crear, etc. */}
                    <Outlet />
                </div>
            </main>

        </div>
    );
};