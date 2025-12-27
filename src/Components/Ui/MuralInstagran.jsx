import { Button } from "react-bootstrap";

export const MuralInstagran = () => {
  return (
    <section className="instagram-section my-5">
      <div className="mural text-center">
        <h4>
          <i className="bi bi-instagram"></i> Apolo PetShop
        </h4>
        <p className="p-mural">
          Ofertas, tips y mucho más en nuestro Instagram 🐾
        </p>
        <div>
          <Button  className=" shadow" variant="dark">
            Seguir en Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};


