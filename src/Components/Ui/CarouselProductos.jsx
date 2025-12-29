import Carousel from "react-bootstrap/Carousel";
import { ContaiGridCarousel } from '../index.jsx';
import { Container } from "react-bootstrap";

export const CarouselProductos = () => {
  return (
    <Container fluid>
      <h4 className="text-center fs-2 my-4">PROMOCIONES IMPERDIBLES🎉</h4>
      <Carousel slide={false}>
        
        <Carousel.Item>
          <ContaiGridCarousel/>
        </Carousel.Item>

      </Carousel> 
    </Container>
  );
};


