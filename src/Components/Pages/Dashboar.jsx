import { Sidebar } from "../Ui/Sidebar";


export const Dashboard = () => {
    return (
        // CLAVE: 'flex' hace que el Sidebar y Products se pongan lado a lado
        // 'h-screen' asegura que ocupen todo el alto de la pantalla
        // 'bg-gray-100' da el color de fondo general
        <div className="flex h-screen bg-gray-100">
            
            {/* Componente Izquierdo */}
            <Sidebar /> 

            {/* Componente Derecho (Contenido) */}

        </div>
    );
};