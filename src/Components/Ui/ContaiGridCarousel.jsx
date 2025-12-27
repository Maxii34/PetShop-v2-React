import { CardsCarousel } from "../index.jsx";

//Componente de la sesión  1 del carousel
export const ContaiGridCarousel = ({productosOferta}) => {
  return (
    <div className="grid-container">
      <CardsCarousel productosOferta={productosOferta}/>
    </div>
  );
};


