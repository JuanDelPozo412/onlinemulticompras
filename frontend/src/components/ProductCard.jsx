//Este componente va a recibir estas props : title, price, image
// y le voy a poner un estado interno ''isInCart'' para saber si lo agrego al carrito

//Primer paso : primero renderizamos datos en el componente {title} {price} {image}
//Segundo paso : en Home armo un array de productos y uso map() para renderizar varias cards
//Tercer Paso : Agregar estado al boton (useState)



export function ProductCard({title, price, image}) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="{image}}" className="card-img-top" alt="{title}" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <a href="#" className="btn btn-primary">Agregar al carrito</a>
      </div>
    </div>
  )
}
