import CarouselComponente from "../Carousel";
import ContainerGrid from "../ContainerGrid";
import ContenedorCards from "../ContenedorCards";
import MuralInstagran from "../MuralInstagran";


const Inicio = ({productos, productosOferta }) => {
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

export default Inicio;