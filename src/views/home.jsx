import Navbar from "../components/navbar";
import Header from "../components/header";
import Card from "../components/card";


const Home = () => {
    return (
        <>
        <Navbar />
        <Header />
        <div className="container my-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <Card />
            </div>
        </div>
        </>
    );
};

export default Home;