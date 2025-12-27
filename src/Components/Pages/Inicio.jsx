import { CarouselComponente, ContainerGrid, ContenedorCards, MuralInstagran } from "../index.jsx";


export function Inicio({productos, productosOferta }) {
    return (
        <section>
            <CarouselComponente />
            <div>
                <ContainerGrid  productos={productos} />
                <ContenedorCards productosOferta={productosOferta}/>
            </div>
            <MuralInstagran />
        </section>
    );
};
