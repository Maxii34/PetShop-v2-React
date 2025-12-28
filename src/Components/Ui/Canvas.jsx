import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

export const Canvas = ({ handleClose3, show3, placement = "start" }) => {

  // Estilo para los links: parecen texto pero funcionan como botones
  const linkStyle = "text-decoration-none text-dark d-block py-1 ps-2 hover-bg-light";

  return (
    <>
      <Offcanvas show={show3} onHide={handleClose3} placement={placement} className="shadow nav-pri">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Categorías</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          
          <Accordion flush defaultActiveKey="0">
            {/* SECCIÓN PERROS */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Perros</Accordion.Header>
              <Accordion.Body>
                <h6 className="text-muted fw-bold mt-2">Alimentos Balanceados</h6>
                {/* Nota: onClick={handleClose3} cierra el menú al elegir una opción */}
                <Link  className={linkStyle} onClick={handleClose3}>Pedigree</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Dog Chow</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Eukanuba</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Pro Plan</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Royal Canin</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Nutrique</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Vital Can</Link>
                
                <hr className="my-2"/>
                
                <h6 className="text-muted fw-bold">Accesorios</h6>
                <Link  className={linkStyle} onClick={handleClose3}>Collares y Correas</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Camas y Mantas</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Juguetes</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Transportadoras</Link>
              </Accordion.Body>
            </Accordion.Item>

            {/* SECCIÓN GATOS */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Gatos</Accordion.Header>
              <Accordion.Body>
                <h6 className="text-muted fw-bold mt-2">Alimentos Balanceados</h6>
                <Link  className={linkStyle} onClick={handleClose3}>Agility</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Excellent</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Eukanuba</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Nutrique</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Pro Plan</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Perfomans</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Vital Can</Link>

                <hr className="my-2"/>

                <h6 className="text-muted fw-bold">Accesorios</h6>
                <Link  className={linkStyle} onClick={handleClose3}>Comederos</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Transportes</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Arena sanitarias</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Juguetes y Rascadores</Link>
              </Accordion.Body>
            </Accordion.Item>

            {/* SECCIÓN OTROS */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Otros</Accordion.Header>
              <Accordion.Body>
                <Link  className={linkStyle} onClick={handleClose3}>Aves</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Peces</Link>
                <Link  className={linkStyle} onClick={handleClose3}>Roedores</Link>
                
                <hr className="my-2"/>
                
                <Link  className={linkStyle} onClick={handleClose3}>Accesorios Variados</Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

