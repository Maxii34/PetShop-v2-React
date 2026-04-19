import { useEffect } from "react";
import { CarouselComponente, ContainerGrid, ContenedorCards, MuralInstagran } from "../index.jsx";
import { listarProductos as obtenerProductosApi } from "../helpers/productos.queries.js";

export function Inicio({productos, setProductos, handleShowCarrito }) {

    const cargarProductos = async () => {
        const listado = await obtenerProductosApi();
        if (listado) {
            setProductos(listado);
        }
    }

    useEffect(() => {
        cargarProductos();
    }, []);

    return (
        <section>
            <CarouselComponente />
            <div className=" container-fluid mt-5">
                <ContainerGrid  productos={productos} handleShowCarrito={handleShowCarrito} />
                <ContenedorCards productos={productos} handleShowCarrito={handleShowCarrito} />
            </div>
            <MuralInstagran />
        </section>
    );
};
