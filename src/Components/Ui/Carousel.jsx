import Carousel from "react-bootstrap/Carousel";

export const CarouselComponente = () => {
  return (
    <Carousel slide={false} className="shadow">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="First slide"
          loading="lazy"
          style={{ height: "350px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Second slide"
          loading="lazy"
          style={{ height: "350px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Third slide"
          loading="lazy"
          style={{ height: "350px", objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};


