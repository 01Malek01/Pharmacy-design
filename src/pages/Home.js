
import Brands from "../components/Brands";
import Megas from "../components/Megas";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Offers from "../components/Offers";
import ProductsList from "../components/ProductsList";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

function Home(){
    return(
        <>
        <div className="container-fluid">

        <Header />
        <Slider />
        <Megas />
        <Categories />
        <Offers />
        <ProductsList />
        <Brands />
        <Footer />
        </div>

        </>
        





    );
}

export default Home;