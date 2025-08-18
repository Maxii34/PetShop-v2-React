import { Container } from "react-bootstrap";
import CardsProductos from "./Cards";
import CuchaImg from "../assets/Imagenes/cucha(2).png"


const ContainerGrid = () => {
  return (
    <Container fluid>
      <div className="grid-container">
        <CardsProductos
          imagen={CuchaImg}
          alt="Aro Supremo Antiestres"
          nombreProducto="Aro Supremo Antiestres"
          precio="$37.500,00"
          precioEfectivo="$33.300,00"
          cuotas="3"
          precioCuotas="$11.750,00"
        />
        <CardsProductos
          imagen={CuchaImg}
          alt="Aro Supremo Antiestres"
          nombreProducto="Aro Supremo Antiestres"
          precio="$37.500,00"
          precioEfectivo="$33.300,00"
          cuotas="3"
          precioCuotas="$11.750,00"
        />
        <CardsProductos
          imagen={CuchaImg}
          alt="Aro Supremo Antiestres"
          nombreProducto="Aro Supremo Antiestres"
          precio="$37.500,00"
          precioEfectivo="$33.300,00"
          cuotas="3"
          precioCuotas="$11.750,00"
        />
        <CardsProductos
          imagen={CuchaImg}
          alt="Aro Supremo Antiestres"
          nombreProducto="Aro Supremo Antiestres"
          precio="$37.500,00"
          precioEfectivo="$33.300,00"
          cuotas="3"
          precioCuotas="$11.750,00"
        />
        <CardsProductos
          imagen={CuchaImg}
          alt="Aro Supremo Antiestres"
          nombreProducto="Aro Supremo Antiestres"
          precio="$37.500,00"
          precioEfectivo="$33.300,00"
          cuotas="3"
          precioCuotas="$11.750,00"
        />

      </div>
    </Container>
  );
};

export default ContainerGrid;
