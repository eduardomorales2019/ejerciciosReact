import React from "react";

const user = {
  nombre: "eduardo",
  edad: 41,
  paisNacimiento: "Mexico",
  social: {
    facebook: "edumorales.facebook",
    instagram: "edumoralaes.instagram",
  },
};

console.log(user);

// const { nombre, edad } = user;
// console.log(nombre, edad);

// const { facebook, instagram } = user.social;

// console.log("mi face es: " + facebook + "y mi instagram es : " + instagram);

// ! aqui es una destrcuturacion anidada. con objetos
const {
  edad,
  paisNacimiento,
  social: { facebook },
} = user;

console.log(edad, paisNacimiento, facebook);

//? arra destructuring.

const orden = ["pizza", "tee", "pay"];
console.log(orden);

const [comida, bebida, postre] = orden;
console.log(comida, bebida, postre);
// ============
class Destructi extends React.Component {
  render() {
    return (
      <div>
        <h1>hola</h1>
      </div>
    );
  }
}
export default Destructi;
