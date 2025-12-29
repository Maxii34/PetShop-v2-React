import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const CarritoModal = ({ handleCloseCarrito, showCarrito }) => {
    return (
        <>
            <Modal show={showCarrito} onHide={handleCloseCarrito}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCarrito}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseCarrito}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
};