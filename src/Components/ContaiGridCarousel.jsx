import CardsCarousel from "./CardsCarousel";

//Componente de la sesión  1 del carousel
export const ContaiGridCarousel_01 = () => {
  return (
    <div className="grid-container">
      <CardsCarousel
        nombreProductoCC=""
        precioCC=""
        precioEfectivoCC=""
        precioCuotasCC=""
      />
      <CardsCarousel />
      <CardsCarousel />
    </div>
  );
};

//Componente de la sesión  2 del carousel
export const ContaiGridCarousel_02 = () => {
  return (
    <div className="grid-container">
      <CardsCarousel />
      <CardsCarousel />
      <CardsCarousel />
      <CardsCarousel />
    </div>
  );
};

//Componente de la sesión  3 del carousel
export const ContaiGridCarousel_03 = () => {
  return (
    <div className="grid-container">
      <CardsCarousel />
      <CardsCarousel />
      <CardsCarousel />
      <CardsCarousel />
      <CardsCarousel />
    </div>
  );
};
