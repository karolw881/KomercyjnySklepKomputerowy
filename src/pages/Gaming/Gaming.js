import NavBar from "../../Index-components/Navbar";
import Categories from "../../Index-components/Categories";
import Footer from "../../Index-components/Footer";
import Products from "../../Index-components/Products";

const Gaming = () => {
    return ( 
        <>
        <NavBar />
            <Categories />
            <Products kategoria={"Gaming"}/>
            <Footer/>
        </>
    );
}
 
export default Gaming;