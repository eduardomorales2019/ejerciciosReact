import React from "react";
import "../styles/ObjectVideo.css";

class ObjectVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {
        title: "super Titulo",
        likes: 0,
      },
    };
  }

  // CON ESTE METODO CAMBIA EL COMPONENTE  Y DESAPARECE EL TITULO. ENTONCES HAY QUE  HACER USO DEL SPREAD OP
  add = (event) => {
    this.setState({
      video: {
        ...this.state.video,
        likes: this.state.video.likes + 1,
      },
    });
  };

  // ! copia bien todo el objeto y despues en prev state.
  agregarParaBuenRender = () => {
    this.setState((prevState) => ({
      video: {
        ...this.state.video,
        likes: prevState.video.likes + 1,
      },
    }));
  };

  frontMaster = () => {
    var person = [];
    var plea = "wouldshe";
    person.name = "Mrs White";
    person[plea] = " o would never ";
    person["plor"] = "";

    console.log(person);
    console.log(plea);
    console.log(person.name);
    console.log(person[plea]);
    console.log(person.length);
  };

  render() {
    return (
      <div className="container_Boton">
        <span>
          componente que en donde actualizqmos el estado con un una copia del
          obeto con un un ... s.operator, para que se puedan renderizar tanto
          .titulo como . clicks y no haya problema en el rendrrizado{" "}
        </span>
        <h1>{this.state.video.title}</h1>
        <button onClick={this.frontMaster}>
          {this.state.video.likes}
          <br></br>
          <span>add</span>
        </button>
        {/* <button onClick={this.agregarParaBuenRender}>
          {this.state.video.likes}
          <br></br>
          <span>buenRender</span>
        </button> */}
      </div>
    );
  }
}

export default ObjectVideo;
