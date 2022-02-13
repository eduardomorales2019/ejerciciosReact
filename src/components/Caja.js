import React from "react";
import "./styles/caja.css";
import { v4 as uuidv4 } from "uuid";
import MutateFunction from "./MutandoEstadoConfuncion/MutateFunction";
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
    this.state = { cantidadCerveza: 0, cantidad: 0, id: uuidv4 };
  }

  handleQuantity = (event) => {
    this.setState({ cantidad: this.state.cantidad + 1 });
  };
  handleOnchange = (event) => {
    const filter = this.props.articulosCaja.filter(
      (element) =>
        (element = "cerveza"
          ? console.log("Soy cerveza")
          : console.log("No los soy "))
    );

    console.log(filter);
  };

  render() {
    return (
      <div>
        <h1 className="h1">Caja</h1>
        {this.props.articulosCaja.map((producto) => (
          <div className="clase">
            <div className="product_container">
              <button
                // onChange={this.handleOnchange}
                onClick={this.handleOnchange}
                className="boton"
              >
                {producto}
              </button>
              <p className="number__quantity">{this.state.cantidad}</p>
            </div>
          </div>
        ))}

        <MutateFunction />
      </div>
    );
  }
}

export default Caja;
