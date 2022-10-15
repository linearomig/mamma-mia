import React from "react";
import "../styles/header.css";

const Header = () => {
    return (
        <div className="header d-flex flex-column justify-content-center text-white">
            <h1>¡Pizzería Mamma Mia!</h1>
            <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
            <hr className="w-75 mx-auto"/>
        </div>
    );
    };
    
    export default Header;