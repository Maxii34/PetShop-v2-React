import Carousel from "react-bootstrap/Carousel";
import {
  ContaiGridCarousel_01,
  ContaiGridCarousel_02,
  ContaiGridCarousel_03,
} from "./ContaiGridCarousel";
import { Container } from "react-bootstrap";

const CarouselProductos = () => {
  return (
    <Container fluid>
      <h4 className="text-center fs-2 my-4">PROMOCIONES IMPERDIBLES🎉</h4>
      <Carousel slide={false}>
        <Carousel.Item>
          <ContaiGridCarousel_01 />
        </Carousel.Item>
        <Carousel.Item>
          <ContaiGridCarousel_02 />
        </Carousel.Item>
        <Carousel.Item>
          <ContaiGridCarousel_03 />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselProductos;
