import React from "react";
import "./elegirComponteClick.css";
class ComponenteClick extends React.Component {
  constructor() {
    super();

    this.state = {
      Sodas: [
        { name: "cocacola", price: 8000 },
        { name: "Sprite ", price: 2000 },
        { name: "fanta", price: 4000 },
        { name: "Fanta-fresa", price: 8000 },
        { name: "Pepsi", price: 6000 },
        { name: "Seven-Up", price: 3000 },
        { name: "DoctorPepper", price: 4000 },
        { name: "Cherry-Pepsi", price: 8000 },
        { name: "gold-pepsi", price: 8000 },
        { name: "akari-sprite", price: 8000 },
        { name: "pessi-fresa", price: 8000 },
        { name: "pessi-naranja ", price: 8000 },
      ],
      frutaSeleccionada: {},
    };
    // this.select = this.select.bind(this);
  }
  // ! AQUI EL PONER EL BIND DIRECTO EN EL UNCLICK . PODEMOS ACCEDER AL EVENTO Y AL SODITA QUE SE ESTA ITERADO.
  select = (sodita, event) => {
    this.setState({ frutaSeleccionada: sodita });
    console.log("Soy lo que s eecoge", sodita);
    console.log(this.state.frutaSeleccionada);

    //? HAY QUE SELECCIONAR LA  SODITA PARA DARLE SU ESTADO

    console.log(this.state);
  };

  render() {
    return (
      <div className="Container">
        {/* <h1>React Component</h1> */}
        {this.state.Sodas.map((sodita, index) => (
          <button
            key={index}
            onClick={this.select.bind(this, sodita)}
            className="button_tag"
          >
            {sodita.name}- $ {sodita.price}
          </button>
        ))}
      </div>
    );
  }
}

export default ComponenteClick;
