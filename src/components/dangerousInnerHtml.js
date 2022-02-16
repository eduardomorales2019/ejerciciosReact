import React from "react";

// por segurdiad react, escapa todo el html por seguridad .

// ! por tal razon hay que usar ka propiedad. dangerouslySetInnerHTML con un objeto y  dentro __html: y lo que queremos renderar.

// sanitizar las entradas!!!!

class Marcado extends React.Component {
  state = {
    marcado: `
	
	<br/>
	<h1>soy un html react </h1>
	<hr/>
	<a href="#">algun link</a>
	
	`,
  };
  render() {
    return (
      <div>
        {/* <h1>dangerouslySetInnerHTML={{ __html: this.state.marcado }}=</h1> */}
        <div dangerouslySetInnerHTML={{ __html: this.state.marcado }}></div>
      </div>
    );
  }
}

export default Marcado;
