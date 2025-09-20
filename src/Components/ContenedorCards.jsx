import CardsCarousel from "../Components/Productos/CardsCarousel";

const ContenedorCards = ({ productosOferta }) => {
  return (
    <>
      <h4 className="text-center fs-2 my-4">PROMOCIONES IMPERDIBLES 🎉</h4>
      <div className="divContenedor-cards">
        {productosOferta.map((itemProducto, index) => (
          <div className="div-1" key={index}>
            <CardsCarousel itemProducto={itemProducto} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContenedorCards;
