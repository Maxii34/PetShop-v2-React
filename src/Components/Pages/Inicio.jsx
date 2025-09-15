import CarouselComponente from "../Carousel";
import CarouselProductos from "../CarouselProductos";
import ContainerGrid from "../ContainerGrid";
import MuralInstagran from "../MuralInstagran";


const Inicio = () => {
    return (
        <section>
            <CarouselComponente />
            <div>
                <ContainerGrid />
                <CarouselProductos />
            </div>
            <MuralInstagran />
        </section>
    );
};

export default Inicio;