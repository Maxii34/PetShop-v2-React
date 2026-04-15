import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Va arriba cada vez que cambia la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // podés cambiar a "smooth" si querés animación
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;