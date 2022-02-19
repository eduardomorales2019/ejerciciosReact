import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Caja from "../src/components/Caja";
import ErrorBondary from "./utils/ErrorBundary";
// import ErrorBondary from "./utils/ErrorBundary";
// import PortalModal from "./components/Portalmodal";

class Modal extends React.Component {
  render() {
    console.log(this.props);
    const estilos = {
      height: "300px",
      background:
        "linear-gradient(-45deg,  #0072ff, #00c6ff,pink,red,magenta,blue,yellow,green)",
      padding: "1em",
      boxSizing: "border-box",
      width: "50%",
      margin: "0 auto",
      marginButton: "30px",
      marginTop: "30px",
      marginBottom: "30px",
    };
    if (!this.props.visible) return null;
    return ReactDOM.createPortal(
      <div style={estilos}>
        <h2>Soy modal </h2>
        <h1>{this.props.children}</h1>
      </div>,
      document.getElementById("modal-root")
    );
  }
}
// ===========
class App extends React.Component {
  state = { visible: false, count: 0 };
  // ==========

  //! con component did munt se renderiza el componente.
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ count: this.state.count + 1 });
  //   });
  //}
  mostrar = () => {
    this.setState({ visible: true });
  };
  cerrar = () => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <div className="App">
        <ErrorBondary>
          <button onClick={this.mostrar}>Muestra el portal </button>
          <Modal visible={this.state.visible}>
            soy children
            <br></br>
            <button onClick={this.cerrar}> cerrar Portal </button>
            {this.state.count}
          </Modal>
          {/* <PortalModal>
          hola como estas desde las children de portal 😡
        </PortalModal> */}
        </ErrorBondary>
        <Caja />
      </div>
    );
  }
}

export default App;
