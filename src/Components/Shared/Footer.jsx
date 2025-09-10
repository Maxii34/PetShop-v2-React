import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="pt-2 border-top footer-color color-footer">
      <Container>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 mb-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Categorías</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block mb-2"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block mb-2"
                >
                  Quienes Somos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block mb-2"
                >
                  Trabajá con nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block mb-2"
                >
                  Cómo Comprar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block mb-2"
                >
                  Política de Devolución
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block mb-2"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none d-block">
                  Términos y condiciones consulta online
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 col-lg-4 mb-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Contáctanos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-whatsapp me-2"></i>54-3456673456
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>PetShopApolo@gmail.com
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i> Sucursales en: San Miguel
                de Tucumán - Yerba Buena - Tafí Viejo - Banda del Río Salí
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 col-lg-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Sigamos conectados</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="icono-redes shadow">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="icono-redes shadow">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="icono-redes shadow">
                <i className="bi bi-tiktok fs-5"></i>
              </a>
              <a href="#" className="icono-redes shadow">
                <i className="bi bi-github fs-5"></i>
              </a>
            </div>
          </div>

          <div className="container py-4 text-center text-md-start">
            <div className="row">
              <div className="col-12">
                <h6 className="fw-bold mb-3">Medios de pago</h6>
                <div className="d-flex flex-wrap gap-2 align-items-center">
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="Visa"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/mastercard.png"
                    alt="MasterCard"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/amex.png"
                    alt="American Express"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/diners-club.png"
                    alt="Diners Club"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/bank-card-back-side.png"
                    alt="Cabal"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/bank-card-front-side.png"
                    alt="Naranja"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pie-footer py-4 shadow nav-sec">
        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center small">
          <p className="mb-0 text-light">
            &copy; Copyright Apolo PetShop - 2025 Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
