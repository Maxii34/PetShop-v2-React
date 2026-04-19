import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { CardsProductos } from "./Cards";
import AOS from "aos";
import "aos/dist/aos.css";
import "./EstilosCards.css";

export const ContainerGrid = ({ handleShowCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const ListarBack = import.meta.env.VITE_BACKEND_API_PRODUCTOS;

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const fetchProductos = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`${ListarBack}?page=${page}&limit=10`);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();

      // Verificar si es un array (respuesta actual del backend)
      if (Array.isArray(data)) {
        // Backend devuelve directamente un array
        if (page === 1) {
          setProductos(data);
        } else {
          setProductos((prev) => [...prev, ...data]);
        }
        
        setCurrentPage(page);
        setTotalPages(Math.ceil(data.length / 10)); // Aproximado
        setHasMore(data.length > 0);
      } else if (data && data.data && Array.isArray(data.data)) {
        // Backend devuelve estructura con pagination
        if (page === 1) {
          setProductos(data.data);
        } else {
          setProductos((prev) => [...prev, ...data.data]);
        }
        
        setCurrentPage(data.pagination.currentPage);
        setTotalPages(data.pagination.totalPages);
        setHasMore(data.pagination.hasMore);
      } else {
        throw new Error("Respuesta del servidor inválida");
      }

      AOS.refreshHard();
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setProductos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos(1);
  }, []);

  const mostrarMas = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      fetchProductos(nextPage);
    }
  };

  const mostrarMenos = () => {
    fetchProductos(1);
    document.getElementById("InicioCards")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container fluid>
      <div id="InicioCards" className="my-2">
        <h1 className="text-center fw-bold display-5 fs-2">
          Lo mejor para tus compañeros peludos 🐾✨
        </h1>
      </div>

      <div className="grid-container">
        {productos.map((itemProducto, indice) => (
          <div
            key={itemProducto._id}
            data-aos="fade-up"
            data-aos-delay={(indice % 10) * 100}
          >
            <CardsProductos
              producto={itemProducto}
              handleShowCarrito={handleShowCarrito}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-3">
        {hasMore ? (
          <Button
            className="btn-grid btn-grid--more"
            onClick={mostrarMas}
            disabled={loading}
          >
            Ver más
          </Button>
        ) : (
          <Button className="btn-grid btn-grid--less" onClick={mostrarMenos}>
            Ver menos
          </Button>
        )}
      </div>
    </Container>
  );
};
