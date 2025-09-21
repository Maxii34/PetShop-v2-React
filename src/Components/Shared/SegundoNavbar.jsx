import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navsegundo = () => {
  return (
    <Navbar className="nav-sec">
      <Container>
        <Nav className="w-100 d-flex justify-content-center align-items-center">
          <NavDropdown
            title={<span className="text-light">Perros</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Header className="text-dark text-muted fs-5">
              Alimentos Balanceados
            </NavDropdown.Header>
            <NavDropdown.Item>Pedigree</NavDropdown.Item>
            <NavDropdown.Item>Dog Chow</NavDropdown.Item>
            <NavDropdown.Item>Eukanuba</NavDropdown.Item>
            <NavDropdown.Item>Pro Plan</NavDropdown.Item>
            <NavDropdown.Item>Royal Canin</NavDropdown.Item>
            <NavDropdown.Item>Nutrique</NavDropdown.Item>
            <NavDropdown.Item>Vital Can</NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Header className="text-dark text-muted fs-5">
              Accesorios
            </NavDropdown.Header>
            <NavDropdown.Item>Collares y Correas</NavDropdown.Item>
            <NavDropdown.Item>Camas y Mantas</NavDropdown.Item>
            <NavDropdown.Item>Juguetes</NavDropdown.Item>
            <NavDropdown.Item>Transportadoras</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<span className="text-light">Gatos</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Header className="text-dark text-muted fs-5">
              Alimentos Balanceados
            </NavDropdown.Header>
            <NavDropdown.Item>Agility</NavDropdown.Item>
            <NavDropdown.Item>Excellent</NavDropdown.Item>
            <NavDropdown.Item>Eukanuba</NavDropdown.Item>
            <NavDropdown.Item>Nutrique</NavDropdown.Item>
            <NavDropdown.Item>Pro Pan</NavDropdown.Item>
            <NavDropdown.Item>Perfomans</NavDropdown.Item>
            <NavDropdown.Item>Vital Can</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Header className="text-dark text-muted fs-5">
              Accesorios
            </NavDropdown.Header>
            <NavDropdown.Item>Comederos</NavDropdown.Item>
            <NavDropdown.Item>Transportes</NavDropdown.Item>
            <NavDropdown.Item>Arena satitarias</NavDropdown.Item>
            <NavDropdown.Item>Juquetes y Rascadores</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<span className="text-light">Otros</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item>Aves</NavDropdown.Item>
            <NavDropdown.Item>Peces</NavDropdown.Item>
            <NavDropdown.Item>Roedores</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Accesorios Variados</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#action1" className="text-light">
            Promociones
          </Nav.Link>
          <Nav.Link href="#action1" className="text-light d-none d-lg-block">
            Nuevos Productos
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navsegundo;
