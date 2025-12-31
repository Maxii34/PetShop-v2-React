import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import "./EstilosCards.css";

export const Canvas = ({ handleClose3, show3, placement = "start" }) => {

  return (
    <>
      <Offcanvas show={show3} onHide={handleClose3} placement={placement} className="shadow nav-pri">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold fs-4">Categorías</Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body className="p-0">
          
          {/* Usamos 'flush' para quitar bordes externos del acordeón */}
          <Accordion flush defaultActiveKey="0" className="acordeon-verde">
            
            {/* --- SECCIÓN PERROS --- */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Perros</Accordion.Header>
              <Accordion.Body className="p-0 py-2">
                <h6 className="text-muted text-uppercase small fw-bold px-3 mt-2 mb-1">Alimentos</h6>
                
                <Link to="/categoria/perros/pedigree" className="opcion-lateral" onClick={handleClose3}>Pedigree</Link>
                <Link to="/categoria/perros/dog-chow" className="opcion-lateral" onClick={handleClose3}>Dog Chow</Link>
                <Link to="/categoria/perros/eukanuba" className="opcion-lateral" onClick={handleClose3}>Eukanuba</Link>
                <Link to="/categoria/perros/pro-plan" className="opcion-lateral" onClick={handleClose3}>Pro Plan</Link>
                <Link to="/categoria/perros/royal-canin" className="opcion-lateral" onClick={handleClose3}>Royal Canin</Link>
                
                <hr className="my-2 opacity-25 mx-3"/>
                
                <h6 className="text-muted text-uppercase small fw-bold px-3 mt-2 mb-1">Accesorios</h6>
                <Link to="/categoria/perros/collares" className="opcion-lateral" onClick={handleClose3}>Collares y Correas</Link>
                <Link to="/categoria/perros/camas" className="opcion-lateral" onClick={handleClose3}>Camas y Mantas</Link>
                <Link to="/categoria/perros/juguetes" className="opcion-lateral" onClick={handleClose3}>Juguetes</Link>
              </Accordion.Body>
            </Accordion.Item>

            {/* --- SECCIÓN GATOS --- */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Gatos</Accordion.Header>
              <Accordion.Body className="p-0 py-2">
                <h6 className="text-muted text-uppercase small fw-bold px-3 mt-2 mb-1">Alimentos</h6>
                <Link to="/categoria/gatos/agility" className="opcion-lateral" onClick={handleClose3}>Agility</Link>
                <Link to="/categoria/gatos/excellent" className="opcion-lateral" onClick={handleClose3}>Excellent</Link>
                <Link to="/categoria/gatos/pro-plan" className="opcion-lateral" onClick={handleClose3}>Pro Plan</Link>

                <hr className="my-2 opacity-25 mx-3"/>

                <h6 className="text-muted text-uppercase small fw-bold px-3 mt-2 mb-1">Accesorios</h6>
                <Link to="/categoria/gatos/rascadores" className="opcion-lateral" onClick={handleClose3}>Rascadores</Link>
                <Link to="/categoria/gatos/piedras" className="opcion-lateral" onClick={handleClose3}>Piedras Sanitarias</Link>
              </Accordion.Body>
            </Accordion.Item>

            {/* --- SECCIÓN OTROS --- */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Otros Animales</Accordion.Header>
              <Accordion.Body className="p-0 py-2">
                <Link to="/categoria/aves" className="opcion-lateral" onClick={handleClose3}>Aves</Link>
                <Link to="/categoria/peces" className="opcion-lateral" onClick={handleClose3}>Peces</Link>
                <Link to="/categoria/roedores" className="opcion-lateral" onClick={handleClose3}>Roedores</Link>
                
                <hr className="my-2 opacity-25 mx-3"/>
                
                <Link to="/categoria/varios" className="opcion-lateral" onClick={handleClose3}>Accesorios Variados</Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};