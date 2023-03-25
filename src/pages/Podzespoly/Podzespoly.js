import NavBar from "../../Index-components/Navbar";
import Categories from "../../Index-components/Categories";
import Footer from "../../Index-components/Footer";
import Products from "../../Index-components/Products";


const Podzespoly = () => {
    return ( 
        <>
        <NavBar />
            <Categories />
            <Products kategoria={"Podzespoly"}/>
            <Footer/>
        </>
    );
}
 
export default Podzespoly;