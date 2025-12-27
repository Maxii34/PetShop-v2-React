import { CardsCarousel } from "../index.jsx";

export const ContenedorCards = () => {
  return (
    <>
      <div className="my-5">
        <h4 className="text-center fs-2 ">¡Ofertas Exclusivas para Vos! 🛍️</h4>
        <div className="divContenedor-cards">
          <div className="div-1">
            <CardsCarousel/>
          </div>
        </div>
      </div>
    </>
  );
};
