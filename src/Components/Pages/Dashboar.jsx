import { Sidebar } from "../Ui/Sidebar";

export const Dashboard = () => {
    return (
        // CLAVE: 'flex' hace que el Sidebar y el contenido se pongan lado a lado
        // 'min-h-screen' asegura que ocupen todo el alto de la pantalla
        // 'bg-gray-100' da el color de fondo general al dashboard
        <div className="flex min-h-screen bg-gray-100">
            
            {/* Componente Izquierdo (Panel Lateral) */}
            <Sidebar /> 

            {/* Componente Derecho (Contenido Principal) */}
            <main className="flex-1 p-8">
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Panel de Administración</h1>
                    <p className="text-gray-600 mb-8">
                        Seleccione una opción en el menú lateral para gestionar la información.
                    </p>
                    
                    {/* Contenedor de marcador de posición para el contenido sin lógica */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center text-gray-400">
                        Área de contenido
                    </div>
                </div>
            </main>

        </div>
    );
};