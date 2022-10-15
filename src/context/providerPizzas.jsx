import { createContext, useState, useEffect } from "react";

const PizzasContext = createContext();

const ProviderPizzas = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);

    const getPizzas = async () => {
        const res = await fetch("/pizzas.json");
        const pizzas = await res.json();
        setPizzas(pizzas);
    };

    useEffect(() => {
        getPizzas();
    }, []);


    const addCart = ({ id, price, name, img }) => {
        const productoIndex = carrito.findIndex((p) => p.id === id);
        const producto = { id, price, name, img, count: 1 };

        if (productoIndex >= 0) {
            carrito[productoIndex].count++;
            setCarrito([...carrito, producto]);
        } else {
            setCarrito([...carrito, producto]);
        }
    };

    const increment = (i) => {
        carrito[i].count++;
        setCarrito([...carrito]);
    };

    const decrement = (i) => {
        const { count } = carrito[i];
        if (count === 1) {
            carrito.splice(i, 1);
        } else {
            carrito[i].count--;
        }
        setCarrito([...carrito]);
    };


    console.log(carrito);
    return (
        <PizzasContext.Provider
        value={{ pizzas, carrito, setCarrito, addCart, increment, decrement }}>
            {children}
        </PizzasContext.Provider>
    );

};


export { ProviderPizzas };

export default PizzasContext;