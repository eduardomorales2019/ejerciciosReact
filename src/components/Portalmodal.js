import React from "react";
import ReactDOM from "react-dom";
// fuear del nodo principal, actuan como si fuera el arbor principal. . modal o ventana flotante.  ya que no hay que montarlo en la pantalla principal.

// ! importante usar el react. Dom, que serian en el return del render.LINEA 9
// ! como segundo parametro recibe el puntero a donde dirigilo, con usn document.get element y con el id que se le dio en html princpial.

class PortalModal extends React.Component {
  render() {
    if (this.props.visible) return null;

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

    return ReactDOM.createPortal(
      <div style={estilos}>
        <h1>soy portal </h1>
        <h2>{this.props.children}</h2>
      </div>,
      document.getElementById("modal-root")
    );
  }
}

export default PortalModal;
