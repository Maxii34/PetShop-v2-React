import CarouselComponente from "../Ui/Carousel";
import ContainerGrid from "../Ui/ContainerGrid";
import ContenedorCards from "../ContenedorCards";
import MuralInstagran from "../Ui/MuralInstagran";


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
