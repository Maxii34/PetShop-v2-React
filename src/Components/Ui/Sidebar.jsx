// Sidebar.jsx
import React from 'react';

export const Sidebar = () => {
    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col">
            <div className="p-6 text-xl font-bold border-b border-slate-800">
                AdminPanel
            </div>
            
            <nav className="flex-1 p-4 space-y-2">
                <div className="flex items-center p-3 rounded text-dark hover:bg-slate-800 cursor-pointer">
                     Dashboard
                </div>
                {/* Item Activo */}
                <div className="flex items-center p-3 rounded bg-indigo-600 text-dark shadow-md cursor-pointer">
                    📦 Productos
                </div>
                <div className="flex items-center p-3 rounded text-dark hover:bg-slate-800 cursor-pointer">
                    👥 Usuarios
                </div>
            </nav>
        </aside>
    );
};