//Este componente va a recibir estas props : title, price, image
// y le voy a poner un estado interno "isInCart" para saber si lo agrego al carrito

//Paso 1: primero renderizamos datos en el componente: {title} {price} {image}
//Paso 2: en Home armo un array de productos y uso map() para renderizar varias cards
//Paso 3: agregar estado al boton (useState)
//Paso 4: cuando clickeas, cambia el estado y React vuelve a renderizar
//Paso 5: estado inicial -> IMPORTANTE: el estado inicial se usa UNA sola vez (cuando el componente se monta)

//IMPORTANTE: En React, cuando el valor viene de una variable, va con llaves: src={image}, className={buttonClass}, etc
//IMPORTANTE 2: Los Hooks (useState) SOLO se pueden usar adentro del componente (dentro de la funcion ProductCard)

import { useState } from "react"

export function ProductCard({ title, price, image, initialInCart = false }) {

  //estado interno: si esta en el carrito o no
  const [isInCart, setIsInCart] = useState(initialInCart)

  //texto y clase del botón segun el estado
  const buttonText = isInCart ? "Quitar del carrito" : "Agregar al carrito"
  const buttonClass = isInCart ? "btn btn-success" : "btn btn-primary"

  //cuando clickeas, cambia el estado y React vuelve a renderizar
  const handleClick = () => {
    setIsInCart(!isInCart)
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* aca va la variable, no un string con llaves */}
      <img src={image} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        {/* Para que sea vea como un precio: ${price} */}
        <p className="card-text">${price}</p>

        <button className={buttonClass} onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}
