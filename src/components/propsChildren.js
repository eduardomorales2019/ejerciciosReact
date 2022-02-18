import React from "react";

class Hijo extends React.Component {
  super(props) {
    console.log(props);
  }

  render() {
    console.log(this.props);
    console.log(this.props.children);
    const estilos = {
      color: this.props.color,
      //   border: "solid 2px black ",
      border: this.props.borderi,
    };

    const estilos2 = {
      fontFamily: "arial",
      color: "green",
      border: "solid 2px orange",
      margin: "0 auto",
      width: "300px",
    };
    return (
      <div>
        <h1 style={estilos}>UsandoPropsChildrens</h1>
        <h2 style={estilos2}>Son: {this.props.children}</h2>
      </div>
    );
  }
}
// ===============

class ChildrenComponen extends React.Component {
  state = { color: "pink", border: "solid 2px blue" };
  render() {
    return (
      <div>
        componente creado con props.children para su renderizado , ojo solo
        ponerlos enmedio de el inicio y cierre de cada apertura
        {/* <Hijo color={this.state.color} borderi={this.state.border} /> */}
        <Hijo color={this.state.color} borderi={this.state.border}>
          super="hola mundo "
        </Hijo>
      </div>
    );
  }
}

export default ChildrenComponen;
