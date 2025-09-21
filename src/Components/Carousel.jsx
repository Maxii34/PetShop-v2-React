import Carousel from "react-bootstrap/Carousel";

const CarouselComponente = () => {
  return (
    <Carousel slide={false} className="shadow">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4214919/pexels-photo-4214919.jpeg"
          alt="First slide"
          loading="lazy"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/13953689/pexels-photo-13953689.jpeg"
          alt="Second slide"
          loading="lazy"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/25283877/pexels-photo-25283877.jpeg"
          alt="Third slide"
          loading="lazy"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponente;
