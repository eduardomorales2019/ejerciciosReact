import React from "react";
import "./styles/NativeEvent.css";
class NativeEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { evento: "hola" };
    this.push = this.push.bind(this);
  }
  push = (evento) => {
    // const eventonormal = console.log(evento, "Soy event");
    const eventoPantalla = console.log(evento.nativeEvent, "soy Event NAtive");
    this.setState({ evento: "dodod" });
  };

  //  ===========
  render() {
    return (
      <div className="wrapper">
        <h1> el evento es :{<p>{this.state.evento}</p>}</h1>
        {/* <h1>native event, console</h1> */}
        <button className="botonNative" onClick={this.push}>
          Pushing
        </button>
      </div>
    );
  }
}

export default NativeEvent;
