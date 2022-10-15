import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { formatNumber } from "../plus/formatNumber";
import PizzasContext from "../context/providerPizzas";
import "../styles/navbar.css";
import Emoji from "./emojis";

const Navbar = () => {
    const { carrito } = useContext(PizzasContext);
    const total = carrito.reduce(
        (valorAnterior, {count, price}) => (valorAnterior + price) * count, 0
    );

    return (
        <div className="navbar text-white py-3" >
            <div className="container d-block">
                <div className="d-flex justify-content-between">
                    <NavLink to="/" className="logo-nombre mx-1 mb-0 text-white text-decoration-none">
                        <h4 className="mb-0">
                        <Emoji symbol="🍕"/> Pizzería Mamma Mia!
                        </h4>
                    </NavLink>
                    <NavLink to="/carrito" className="logo-nombre mx-1 mb-0 text-white text-decoration-none">
                        <h4 className="mb-0">
                        Total: ${formatNumber(total)}
                        </h4>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;