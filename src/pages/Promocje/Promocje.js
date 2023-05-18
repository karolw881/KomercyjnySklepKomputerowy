import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import Products from "../../Components/Products";

const Promocje = () => {
    return ( 
        <>
        <NavBar/>
        <Categories/>
        <Products kategoria={"Promocje"}/>
        <Footer/>
        </>
    );
}
 
export default Promocje;