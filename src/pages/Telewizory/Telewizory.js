import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import Products from "../../Components/Products";

const Telewizory = () => {
    return ( 
        <>
        <NavBar />
            <Categories />
            <Products kategoria={"Telewizory"}/>
            <Footer/>
        </>
    );
}
 
export default Telewizory;