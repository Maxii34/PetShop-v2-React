import { CardsCarousel } from "../index.jsx";
import "aos/dist/aos.css";
import AOS from "aos"; 
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const ContenedorCards = ({ productos }) => {
  useEffect(() => {
  AOS.init({
    duration: 1000, //
    });
}, []);

  const productosEnOferta = productos?.filter((producto) => producto.enOferta === true) || [];

  return (
    <>
      <Container>
        <div className="my-5">
          <h4 className="text-center fs-2 mb-4">¡Ofertas Exclusivas para Vos! 🛍️</h4>
          <Row className="g-4 justify-content-center">
            {productosEnOferta.map((producto, index) => (
              <Col 
                xs={12} sm={6} md={4} lg={3} 
                key={producto._id} 
                className="d-flex align-items-stretch"
                data-aos="zoom-in" 
                data-aos-delay={`${300 + Math.min(index * 100, 1000)}`}
              >
                <CardsCarousel producto={producto} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};
