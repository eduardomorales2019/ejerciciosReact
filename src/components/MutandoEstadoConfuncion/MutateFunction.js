import React from "react";

// SET STATE ES ASYNCRONO YA QUE NO CAMBIA AUTOMATICAMENTE.

class MutateFunction extends React.Component {
  state = { cantidad: 0 };
  render() {
    return (
      <div>
        <button>Contador de clicks{this.state.cantidad}</button>
      </div>
    );
  }
}

export default MutateFunction;
