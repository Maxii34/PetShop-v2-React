import { useEffect } from "react";
import { CarouselComponente, ContainerGrid, ContenedorCards, MuralInstagran } from "../index.jsx";

export function Inicio({productos, productosOferta, setProductos }) {

    const listarProductos = async () => {
        const listado = await listarProductos();
        if (listado) {
            setProductos(listado);
        }
    }

    useEffect(() => {
        listarProductos();
    }, []);

    return (
        <section>
            <CarouselComponente />
            <div className=" container-fluid mt-5">
                <ContainerGrid  productos={productos} />
                <ContenedorCards productosOferta={productosOferta}/>
            </div>
            <MuralInstagran />
        </section>
    );
};
