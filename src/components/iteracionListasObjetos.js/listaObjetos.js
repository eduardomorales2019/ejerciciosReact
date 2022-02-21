import React from "react";
import "./listaObjetos.css";
class Listaa extends React.Component {
  state = {
    productos: [
      {
        id: 1,
        name: "camisa bluBay",
        colors: ["#467367", "#05fd88", "#a706ee"],
        price: 20,
      },
      {
        id: 2,
        name: "camisa GreenBay",
        colors: ["#467367", "#05fd88", "#a706ee"],
        price: 20,
      },
      {
        id: 3,
        name: "camisa redBay",
        colors: ["#467367", "#05fd88", "#a706ee"],
        price: 20,
      },
      {
        id: 4,
        name: "camisa yellowBay",
        colors: ["#467367", "#05fd88", "#a706ee"],
        price: 20,
      },
      {
        id: 5,
        name: "camisa BlackBay",
        colors: ["#467367", "#05fd88", "#a706ee"],
        price: 20,
      },
    ],
  };
  render() {
    return (
      <div className="container__camisas">
        <h1>Lista de Objetos.😡. </h1>
        <h2>
          {this.state.productos.map((produ, index) => {
            return (
              <div key={index}>
                <p>
                  $ {produ.price} ⚫️ {produ.name}
                </p>
                <div>
                  {produ.colors.map((color, index) => {
                    return (
                      <span
                        key={index}
                        style={{
                          width: "43px",
                          height: "43px",
                          borderRadius: "1px",
                          border: "1px solid gray",
                          display: "inline-block",
                          margin: ".2em",
                          backgroundColor: color,
                        }}
                      ></span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </h2>
      </div>
    );
  }
}

export default Listaa;
