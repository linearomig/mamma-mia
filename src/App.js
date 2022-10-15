import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/home";
import { ProviderPizzas } from "./context/providerPizzas";
import Detalle from "./views/detalle";
import Carrito from "./views/carrito";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <ProviderPizzas>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="pizzas/:id" element={ <Detalle /> }/> 
          <Route path="/carrito" element={ <Carrito /> }/>
        </Routes>
      </ProviderPizzas>
    </BrowserRouter>
  );
}

export default App;
