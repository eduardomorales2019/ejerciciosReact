import React from "react";
import "./ObjectKey.css";

class ObjectKey extends React.Component {
  state = {
    user: {
      name: "Eduardo  Morales",
      country: "Zimgague",
      age: 43,
    },
  };
  render() {
    const { user } = this.state;
    console.log(user, "soy user ");

    //!=========================================================================
    // ? OBJECT  KEY
    const usuari = Object.keys(user);
    console.log(usuari, "soy usuari");
    //! Nos crea el ARRAY QYE YA PODEMOS ITERAR. =========================================================================

    return (
      <div>
        <h1>Soy Object Keys</h1>
        <h2>
          {usuari.map((uso, index) => {
            return (
              <div key={uso}>
                <p className="objectKey">
                  {/* PARA PODER ENTRAR EN LA PROPIEDAD HAY QUE USAR EL CORHCTE , YA QUE EN EL CURSO DE FRONT END MASTER EXPLICA PROPIEDADES  */}
                  {uso}: {user[uso]}
                </p>
              </div>
            );
          })}
        </h2>
      </div>
    );
  }
}

export default ObjectKey;
