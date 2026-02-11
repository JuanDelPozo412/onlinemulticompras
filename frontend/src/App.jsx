import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import { Home } from './pages/Home'; 

//components
import {Navbar} from './components/Navbar'
import {ProductCard} from './components/ProductCard'


 function App() {
  return (
    <BrowserRouter>
     <Navbar />  {/* El nav va por fuera de las rutas porque no va a cambiar*/}
     <ProductCard />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
//Esta línea dice: "Este archivo regala la función App a cualquier otro archivo que la quiera usar
export default App;