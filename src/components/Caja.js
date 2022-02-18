import React from "react";
import "./styles/caja.css";
import { v4 as uuidv4 } from "uuid";
import MutateFunction from "./MutandoEstadoConfuncion/MutateFunction";
import ObjectVideo from "./MutandoEstadoConfuncion/Objectvideo";
import SpreadOperatorProps from "./MutandoEstadoConfuncion/SpreadOperatorPropsPassing";
import PixelCalculator from "./WindowJsPixelCalculator";
import NativeEvent from "./NativeEvent";
import PertinenciaEventosReact from "./PertinenciaEventosReact";
import ComponentePadre from "./ComponentehijoAPadre";
import Marcado from "./dangerousInnerHtml";
import ErrorBondary from "../utils/ErrorBundary";
import ChildrenComponen from "./propsChildren";
import Destructi from "./destructuring";

class Caja extends React.Component {
  static defaultProps = {
    articulosCaja: [
      "cerveza",
      "cocacola",
      "fanta",
      "seven up",
      "fanta cherry ",
      "fanta Limon",
      "cafe",
      "cafeCon leche",
      "agua 500ml",
      "agua 1 lts",
      "pepsi",
      "Sprite",
      "gatorade",
      "Vino blanco",
      "Vino tinto",
      "Vino tinto",
      "Vino tinto",
      "Vino tinto",
    ],
  };
  constructor(props) {
    super(props);
    this.state = { cantidadCerveza: 0, cantidad: 0, id: uuidv4() };
  }

  handleQuantity = (event) => {
    this.setState({ cantidad: this.state.cantidad + 1 });
  };

  handleOnchange = (event) => {
    const Copia = [...this.props.articulosCaja];
    console.log(Copia, "Soy copia ");
    const InnerHtml = event.target.innerHTML;
    console.log(InnerHtml);

    const filtrado = Copia.filter(Encontrarbotones);
    function Encontrarbotones(articulo) {
      return articulo === InnerHtml;
    }
    console.log(filtrado);
  };

  // const newArticulos = Copia.filter(Checkarticulo);
  // function Checkarticulo(art) {
  //   return art === "";
  // }
  // console.log(newArticulos);

  // console.log(newArticulos, "soy articulo separado ");
  // Copia.forEach((ele, index) => {
  //   console.log(`${ele} is on the ${index}`);
  // });

  handleInfo = (event) => {
    const valor = event.currentTarget;
    console.log(valor, "soy valor");
    const data = console.log(data.set.producto);
  };

  handleOnchangew = (event) => {
    let productoo = document.getElementById("boton");
    const arraySinA = productoo.dataset.producto;
    console.log(arraySinA);
    var newArreglo = [arraySinA.split(",")];
    console.log(newArreglo);
    console.log(newArreglo[0][2]);
    console.log(event.currentTarget);
    return newArreglo;
  };

  render() {
    return (
      <div>
        <h1 className="h1">Caja</h1>

        {this.props.articulosCaja.map((producto) => (
          <div className="clase">
            <div key={producto.id} className="product_container">
              <button
                id="boton"
                data-producto={this.props.articulosCaja}
                onClick={this.handleOnchange}
                // onClick={this.handleOnchangew}
                // onClick={this.handleInfo}
                className="boton"
              >
                {<p key={producto.id}> {producto}</p>}
              </button>
              <p className="number__quantity">{this.state.cantidad}</p>
            </div>
          </div>
        ))}
        <Destructi />
        <ChildrenComponen />
        <ErrorBondary>
          <Marcado />
        </ErrorBondary>
        <ComponentePadre />
        <PertinenciaEventosReact />
        <NativeEvent />
        <PixelCalculator />
        <SpreadOperatorProps />
        <ObjectVideo />
        <MutateFunction />
      </div>
    );
  }
}

export default Caja;
