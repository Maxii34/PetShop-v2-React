import Carousel from "react-bootstrap/Carousel";
import ContaiGridCarousel from "./ContaiGridCarousel";
import { Container } from "react-bootstrap";

const CarouselProductos = ({productosOferta}) => {
  return (
    <Container fluid>
      <h4 className="text-center fs-2 my-4">PROMOCIONES IMPERDIBLES🎉</h4>
      <Carousel slide={false}>
        
        <Carousel.Item>
          <ContaiGridCarousel productosOferta={productosOferta}/>
        </Carousel.Item>

      </Carousel> 
    </Container>
  );
};

export default CarouselProductos;
