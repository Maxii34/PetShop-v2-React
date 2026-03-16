// Sidebar.jsx
import React from 'react';

export const Sidebar = () => {
    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col min-h-screen">
            <div className="p-6 text-xl font-bold border-b border-slate-700">
                Admin Panel
            </div>
            
            <nav className="flex-1 p-4 space-y-4">
                {/* Opción 1: Agregar productos */}
                <div className="flex items-center p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors duration-200">
                    <span className="mr-3">➕</span> Agregar productos
                </div>
                
                {/* Opción 2: Ver productos agregados */}
                <div className="flex items-center p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors duration-200">
                    <span className="mr-3">📦</span> Ver productos agregados
                </div>
                
                {/* Opción 3: Listado de usuarios */}
                <div className="flex items-center p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors duration-200">
                    <span className="mr-3">👥</span> Listado de usuarios
                </div>
            </nav>
        </aside>
    );
};