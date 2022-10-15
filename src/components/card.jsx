import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PizzasContext from "../context/providerPizzas";
import { formatNumber } from "../plus/formatNumber";
import Emoji from "./emojis";

const Card = () => {
  const { pizzas, addCart } = useContext(PizzasContext);
  const navigate = useNavigate();

  return (
    <>
    {pizzas.map((pizza) => (
      <div className="card p-2 mt-3">
        <img className="card-img-top" src={pizza.img} alt="" />
        <div className="card-body">
            <h4 className="card-title text-capitalize"> Pizza {pizza.name}</h4>
            <hr />
            <p className="card-text">
              <b>Ingredientes:</b>
            </p>

            <ul>
              {pizza.ingredients.map((ingredient, i) => (
                <ol key={i}>
                <Emoji symbol="🍕"/> {ingredient}
                </ol>
              ))}
            </ul>
        </div>

        <h2 className="text-center text-dark pb-3">
          Precio: ${formatNumber(pizza.price)}
        </h2>

          <div className="d-flex justify-content-around mb-4">
            <button
                to={`pizza/${pizza.id}`}
                className="btn btn-info text-white"
                onClick={() => navigate(`/pizzas/${pizza.id}`)}
                >
                  Ver Más
                </button>

                <button 
                  className="btn btn-danger"
                  onClick={() => addCart(pizza)}
                  >
                    Añadir
                  </button>
          </div>
        </div>
      
    ))}
    </>
  );
};

export default Card;