import { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom";
import Navbar from "../components/navbar";
import PizzasContext from "../context/providerPizzas";
import Emoji from "../components/emojis";

const Detalle = () => {
    const [pizzaDetail, setPizzaDetail] = useState({});
    const { pizzas, addCart } = useContext(PizzasContext);
    const { id } = useParams();

    const obtenerDatos = () => {
        const datosPizza = pizzas.find((pizzas) => pizzas.id === id);
        setPizzaDetail(datosPizza);
    };

    useEffect(() => {
        obtenerDatos();
    }, [pizzas]);


    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="card mb-3 estilos">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img
                                src={pizzaDetail.img}
                                className="img-fluid estilos rounded-start"
                                alt={pizzaDetail.name}
                                />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">
                                    {pizzaDetail.name}
                                </h5>
                                <p className="card-text">{pizzaDetail.desc}</p>
                                <ul>
                                    {pizzaDetail.ingredients?.map((ingredient, i) => (
                                    <ol key={i}>
                                    <Emoji symbol="🍕"/> {ingredient}
                                    </ol>
                                    ))}
                                </ul>
                                <div className="d-flex justify-content-around">
                                    <h4>Precio: ${pizzaDetail.price}</h4>
                                    <button 
                                    className="btn btn-danger"
                                    onClick={() => addCart(pizzaDetail)}
                                    >
                                        Añadir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Detalle;