import React from "react";
import "./appComponent.css";
const ImagenesSource = [
  {
    author: {
      name: "EduMor",
      avatar:
        "https://media.istockphoto.com/photos/illustration-of-happy-smiling-businessman-in-suit-with-laptop-sitting-picture-id1248415323?k=20&m=1248415323&s=612x612&w=0&h=mpz6fKC488an1F9dNcZ22zYENnpL-_xI5uVuZcuWihQ=",
    },
    source:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    views: 200,
    id: 1,
  },
  {
    author: {
      name: "MorAu",
      avatar:
        "https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?k=20&m=1226886130&s=612x612&w=0&h=fGcntDfKtd9fLO4QsgcYE3uUS3vuwKZSSl38NXFyC9A=",
    },
    source:
      "https://images.pexels.com/photos/40992/man-iraq-men-portrait-40992.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    views: 400,
    id: 2,
  },
  {
    author: {
      name: "Mortero",
      avatar:
        "https://media.istockphoto.com/photos/get-out-of-here-3d-illustration-picture-id1334079935?k=20&m=1334079935&s=612x612&w=0&h=IIEBx8NgmezfqifYwTlrzJASoJ1XsKb40asaOQ5CGSU=",
    },
    source:
      "https://images.pexels.com/photos/8033001/pexels-photo-8033001.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    views: 5000,
    id: 3,
  },
  {
    author: {
      name: "Martin Lutero ",
      avatar:
        "https://media.istockphoto.com/photos/3d-illustrationbusinessman-billy-clothed-like-a-superhero-picture-id1171477969?k=20&m=1171477969&s=612x612&w=0&h=Fvt-sTJ48VHAU42qhzWqX3FaLGQZ3Wvuqxs_3ZPPWoQ=",
    },
    source:
      "https://media.istockphoto.com/photos/3d-cartoon-woman-working-on-laptop-and-lying-down-on-floor-picture-id1305370867?k=20&m=1305370867&s=612x612&w=0&h=9UmEvBoL3KmW9r6DzEbrKzvqL8DCAfQJpzb3qQOCqKE=",
    views: "",
    id: 4,
  },
  {
    author: {
      name: "Edward Johnson ",
      avatar:
        "https://media.istockphoto.com/photos/friendly-punk-rocker-with-spikey-hair-has-a-vacant-office-chair-3d-picture-id1164388918?k=20&m=1164388918&s=612x612&w=0&h=yNC_fqeT4Nv7GQ3v2mdJ7FjwHfNAvsoulzzc2366t94=",
    },
    source:
      "https://images.pexels.com/photos/8027800/pexels-photo-8027800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    views: 300,
    id: 5,
  },
];

// ! ESTE VA A SER EL COMPONENTE A ITERAR:
// ==================
class Sonimage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="Sonimage__Container">
        <h1>Componente Iterado </h1>
        <div>
          <img className="imgSource" src={this.props.image.source} alt="user" />
          <p>{this.props.image.author.name}</p>
        </div>
        <img
          className="imgAvatar"
          src={this.props.image.author.avatar}
          alt="imagen "
        />

        <div>
          <span> views: {this.props.image.views}</span>
        </div>
      </div>
    );
  }
}
// ==================

class ComponentJS extends React.Component {
  render(props) {
    return (
      <div className="MainFrame__Container ">
        {/* <p>Iteracion de componentes. </p> */}
        {ImagenesSource.map((image) => {
          console.log(image);
          return <Sonimage key={image.id} image={image} />;
        })}
      </div>
    );
  }
}

export default ComponentJS;
