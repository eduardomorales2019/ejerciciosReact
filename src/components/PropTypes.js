import React from "react";
import propTypes from "prop-types";

const noop = () => {
  //   console.log("hola  hola ");
};

class SonProfile extends React.Component {
  // ======================================

  //! DEFINIR, VARIOS TIPOS DE DATOS. VER DOCUMENTACION. SE PUED EESPECOFICAR LOS TIPO DE DATOS.
  static propTypes = {
    nombree: propTypes.string,
    anotes: propTypes.number,
  };
  // ======================================
  //? ===================================================================================
  //   SINATXIS COMPONENETES ESTATES.
  //  const  comp = () => ()
  //  Comp.defaultProps = {}

  //? ======================================

  // ES COMPONENETES ESTATALES , SE PUEDE USAR CUANDO SE ESTA DESARROLANDO EL PROPIO COMPONENTE., SIN PROPS, Y SIN SALIR DEL PROPIO COMPONENTE .
  static defaultProps = {
    name: "Eduardo",
    age: 40,
    placeOfBirth: "Hololu",
    // aqui introduzco la funcion en el default props.
    hello: noop,
  };
  state = {};

  hola = () => {
    this.props.hello();
  };

  render() {
    console.log(this.props);
    console.log(propTypes);

    const { nombree, anotes } = this.props;
    console.log(nombree);
    console.log(anotes);
    return (
      <div>
        <h1>Name:{this.props.name} </h1>
        <h3>{propTypes.nombree}</h3>
        <h3>{propTypes.anotes}</h3>
        <button onClick={this.hola}> Soy saluda </button>
      </div>
    );
  }
}

export default SonProfile;
