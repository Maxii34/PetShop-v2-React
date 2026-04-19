import { CardsCarousel } from "../index.jsx";
import AOS from "aos"; 
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ContaiGridCarousel = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    });
}, []);
  return (
    <div data-aos="zoom-in" data-aos-delay="300">
    <div>
      <CardsCarousel />
    </div>
    </div>
  );
};


