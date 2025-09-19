import CardsCarousel from "./CardsCarousel";

//Componente de la sesión  1 del carousel
const ContaiGridCarousel = ({productosOferta}) => {
  return (
    <div className="grid-container">
      <CardsCarousel productosOferta={productosOferta}/>
    </div>
  );
};

export default ContaiGridCarousel
