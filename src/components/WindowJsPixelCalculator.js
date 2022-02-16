import React from "react";
import "./styles/WindowPixelCalculator.css";
class PixelCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
    this.showingpointer = this.showingpointer.bind(this);
  }

  showingpointer = (event) => {
    const posicionX = event.clientX;
    const posicionY = event.clientY;

    this.setState({ x: posicionX, y: posicionY });
  };

  render() {
    return (
      <div onMouseMove={this.showingpointer} className="main__wrapper">
        <h1>
          Calculador de pixeles en Pantalla
          <p>soy X : {this.state.x}</p>
          <p>soy Y: {this.state.y}</p>
        </h1>
      </div>
    );
  }
}

export default PixelCalculator;
