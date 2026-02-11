import { ProductCard } from "../components/ProductCard" // importo la card

// array de productos para usar en la card 
   const products = [
  { id: 1,
    title: "Auriculares", 
    price: 2500, 
    image: "https://via.placeholder.com/300" },

  { id: 2,
   title: "Mouse", 
   price: 1800, 
   image: "https://via.placeholder.com/300" }
]
export const Home = () => {
 // Si products tiene 3 productos, map va a crear 3 <ProductCard />. 
return (  
    <div className="container mt-4 d-flex gap-3 flex-wrap">
      {products.map(p => (
        <ProductCard
          key={p.id}
          title={p.title}
          price={p.price}
          image={p.image}
        />
      ))}
    </div>
  )
}  