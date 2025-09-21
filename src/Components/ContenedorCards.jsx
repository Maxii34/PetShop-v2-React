import CardsCarousel from "../Components/Productos/CardsCarousel";

const ContenedorCards = ({ productosOferta }) => {
  return (
    <>
      <div className="my-5">
        <h4 className="text-center fs-2 ">
          ¡Ofertas Exclusivas para Vos! 🛍️
        </h4>
        <div className="divContenedor-cards">
          {productosOferta.map((itemProducto, index) => (
            <div className="div-1" key={index}>
              <CardsCarousel itemProducto={itemProducto} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContenedorCards;
