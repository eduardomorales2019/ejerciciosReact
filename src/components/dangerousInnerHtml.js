import React from "react";

// por segurdiad react, escapa todo el html por seguridad .

// ! por tal razon hay que usar ka propiedad. dangerouslySetInnerHTML con un objeto y  dentro __html: y lo que queremos renderar.

class Marcado extends React.Component {
  state = {
    marcado: `<h1>soy un html</h1>
	<br/>
	<hr/>
	<a href="#">algun link</a>
	
	`,
  };
  render() {
    return (
      <div>
        <h1>[dangerouslySetInnerHTML= {{ __html: this.state.marcado }}]=</h1>
      </div>
    );
  }
}

export default Marcado;
