import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Importamos la grilla de React Bootstrap
import { FaCreditCard, FaRegCreditCard, FaLock, FaTruck, FaMapMarkerAlt } from 'react-icons/fa';
import { SiMercadopago, SiVisa, SiMastercard } from 'react-icons/si';


export const CheckoutPagos = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentMethodMP, setPaymentMethodMP] = useState('mercadopago');

  return (
    <Container className="py-5 checkout-container" fluid="md">
      
      {/* Título y Pasos */}
      <div className="mb-4">
        <h2 className="fw-bold mb-3">Finalizar Compra</h2>
        <div className="d-flex text-muted small">
          <span className="text-success fw-bold">1. Carrito</span>
          <span className="mx-2"> &gt; </span>
          <span className="text-dark fw-bold">2. Datos y Pago</span>
          <span className="mx-2"> &gt; </span>
          <span>3. Confirmación</span>
        </div>
      </div>

      {/* Usamos <Row> en lugar de <div className="row"> */}
      <Row className="g-4">
        
        {/* COLUMNA IZQUIERDA: FORMULARIO */}
        <Col lg={8}>
          
          {/* Sección 1: Datos de Envío */}
          <Card className="p-4 mb-4 card-checkout">
            <h5 className="fw-bold mb-4 d-flex align-items-center">
              <span className="bg-light p-2 rounded-circle me-3 text-warning">
                <FaMapMarkerAlt />
              </span>
              Dirección de Envío
            </h5>
            
            {/* Grilla interna para el formulario */}
            <Row className="g-3">
              <Col md={6}>
                <label className="form-label text-muted small">Nombre Completo</label>
                <input type="text" className="form-control input-custom" placeholder="Ej: Juan Pérez" />
              </Col>
              <Col md={6}>
                <label className="form-label text-muted small">Teléfono</label>
                <input type="tel" className="form-control input-custom" placeholder="+54 9 11..." />
              </Col>
              <Col xs={12}>
                <label className="form-label text-muted small">Dirección</label>
                <input type="text" className="form-control input-custom" placeholder="Calle, número, piso..." />
              </Col>
              <Col md={6}>
                <label className="form-label text-muted small">Ciudad</label>
                <input type="text" className="form-control input-custom" />
              </Col>
              <Col md={6}>
                <label className="form-label text-muted small">Código Postal</label>
                <input type="text" className="form-control input-custom" />
              </Col>
            </Row>
          </Card>

          {/* Sección 2: Método de Pago */}
          <Card className="p-4 card-checkout">
            <h5 className="fw-bold mb-4 d-flex align-items-center">
              <span className="bg-light p-2 rounded-circle me-3 text-warning">
                <FaRegCreditCard />
              </span>
              Método de Pago
            </h5>

            <div className="d-flex gap-3 mb-4">
              <div 
                className={`rounded p-3 w-50 d-flex align-items-center gap-2 payment-option ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <FaCreditCard className="text-warning fs-4" />
                <div>
                  <h6 className="m-0 fw-bold">Tarjeta Crédito/Débito</h6>
                  <small className="text-muted">Promociones bancarias</small>
                </div>
              </div>
              
              <div 
                className={`rounded p-3 w-50 d-flex align-items-center gap-2 payment-option ${paymentMethod === 'mercadopago' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('mercadopago')}
              >
                <SiMercadopago className="text-primary fs-4" />
                <div>
                  <h6 className="m-0 fw-bold">Mercado Pago</h6>
                  <small className="text-muted">Dinero en cuenta / QR</small>
                </div>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="bg-light p-3 rounded-3">
                <div className="d-flex justify-content-end gap-2 mb-3 text-muted fs-4">
                  <SiVisa /> <SiMastercard />
                </div>
                
                <div className="mb-3">
                  <label className="form-label small text-muted">Número de Tarjeta</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0"><FaCreditCard className="text-muted"/></span>
                    <input type="text" className="form-control border-start-0 ps-0 input-custom" placeholder="0000 0000 0000 0000" />
                  </div>
                </div>

                <Row>
                  <Col md={6} className="mb-3">
                    <label className="form-label small text-muted">Nombre del Titular</label>
                    <input type="text" className="form-control input-custom" placeholder="Como figura en la tarjeta" />
                  </Col>
                  <Col md={3} className="mb-3">
                    <label className="form-label small text-muted">Vencimiento</label>
                    <input type="text" className="form-control input-custom" placeholder="MM/AA" />
                  </Col>
                  <Col md={3} className="mb-3">
                    <label className="form-label small text-muted">CVC</label>
                    <div className="input-group">
                       <input type="text" className="form-control input-custom" placeholder="123" />
                       <span className="input-group-text bg-white border-0 text-muted"><FaLock size={12}/></span>
                    </div>
                  </Col>
                </Row>
                
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" id="saveCard" />
                  <label className="form-check-label small text-muted" htmlFor="saveCard">
                    Guardar tarjeta para futuras compras
                  </label>
                </div>
              </div>
            )}
          </Card>
        </Col>

        {/* COLUMNA DERECHA: RESUMEN */}
        <Col lg={4}>
          <Card className="p-4 sticky-top card-checkout" style={{ top: '20px' }}>
            <h4 className="fw-bold mb-4">Resumen del Pedido</h4>
            
            <div className="d-flex justify-content-between mb-2 text-muted">
              <span>Subtotal (3 items)</span>
              <span>$77.99</span>
            </div>
            <div className="d-flex justify-content-between mb-2 text-muted">
              <span>Envío Estimado <FaTruck className="ms-1"/></span>
              <span>$5.00</span>
            </div>
            <div className="d-flex justify-content-between mb-4 text-success">
              <span>Descuento</span>
              <span>-$0.00</span>
            </div>

            <hr className="text-muted my-4" />

            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="h5 fw-bold m-0">Total</span>
              <div>
                <span className="small text-muted d-block text-end fw-normal">IVA incluido</span>
                <span className="h3 fw-bold m-0">$82.99</span>
              </div>
            </div>

            <button className="btn-checkout-primary shadow-sm">
              <FaLock size={14} /> PAGAR AHORA
            </button>
            
            <div className="mt-3 text-center">
              <small className="text-muted d-flex justify-content-center align-items-center gap-2">
                <FaLock size={12} /> Pagos procesados de forma segura
              </small>
            </div>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};