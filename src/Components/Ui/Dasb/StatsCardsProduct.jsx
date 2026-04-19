import { Card, Col, Container, Row } from "react-bootstrap";
import "./Stats.css";

export const StatsCardsProduct = ({productos}) => {
  return (
    <Container className="mt-0 mb-4">
      <Row className="g-3">

        <Col md={3}>
          <Card className="h-100 stats-card">
            <Card.Body className="d-flex flex-column justify-content-between align-items-stretch p-0">
              
              <Card.Title className="mb-1 text-muted fs-6 w-100 text-center">
                Total de productos
              </Card.Title>

              <div className="d-flex justify-content-between align-items-center w-100">
                <div>
                  <h3 className="mb-0 fw-bold py-1">{productos.length}</h3>
                  <span className="text-muted fs-6">Unidades</span>
                </div>

                <div className="rounded-circle">
                  <i className="bi bi-box-seam fs-4 icon-stats"></i>
                </div>
              </div>

            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="h-100 stats-card">
            <Card.Body className="d-flex flex-column justify-content-between align-items-stretch p-0">
              
              <Card.Title className="mb-1 text-muted fs-6 w-100 text-center">
                Ventas de hoy
              </Card.Title>

              <div className="d-flex justify-content-between align-items-center w-100">
                <div>
                  <h3 className="mb-0 fw-bold py-1">$ 25.000</h3>
                  <span className="text-muted fs-6">Hoy</span>
                </div>

                <div className="rounded-circle">
                  <i className="bi bi-cash-stack fs-4 icon-stats"></i>
                </div>
              </div>

            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="h-100 stats-card">
            <Card.Body className="d-flex flex-column justify-content-between align-items-stretch p-0">
              
              <Card.Title className="mb-1 text-muted fs-6 w-100 text-center">
                Pedidos realizados
              </Card.Title>

              <div className="d-flex justify-content-between align-items-center w-100">
                <div>
                  <h3 className="mb-0 fw-bold py-1">15</h3>
                  <span className="text-muted fs-6">Pedidos</span>
                </div>

                <div className="rounded-circle">
                  <i className="bi bi-bag-check fs-4 icon-stats"></i>
                </div>
              </div>

            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="h-100 stats-card">
            <Card.Body className="d-flex flex-column justify-content-between align-items-stretch p-0">
              
              <Card.Title className="mb-1 text-muted fs-6 w-100 text-center">
                Bajo stock
              </Card.Title>

              <div className="d-flex justify-content-between align-items-center w-100">
                <div>
                  <h3 className="mb-0 fw-bold py-1">8</h3>
                  <span className="text-muted fs-6">Productos</span>
                </div>

                <div className="rounded-circle">
                  <i className="bi bi-exclamation-triangle fs-4 icon-stats"></i>
                </div>
              </div>

            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};