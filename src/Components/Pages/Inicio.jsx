import CarouselComponente from "../Carousel";
import CarouselProductos from "../CarouselProductos";
import ContainerGrid from "../ContainerGrid";
import MuralInstagran from "../MuralInstagran";


const Inicio = ({productos}) => {
    return (
        <section>
            <CarouselComponente />
            <div>
                <ContainerGrid  productos={productos}/>
                <CarouselProductos />
            </div>
            <MuralInstagran />
        </section>
    );
};

export default Inicio;