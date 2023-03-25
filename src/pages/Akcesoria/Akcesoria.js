import NavBar from "../../Index-components/Navbar";
import Categories from "../../Index-components/Categories";
import Footer from "../../Index-components/Footer";
import Products from "../../Index-components/Products";

const Akcesoria = () => {
    return ( 
        <>
        <NavBar />
            <Categories />
            <Products kategoria={"Akcesoria"}/>
            <Footer/>
        </>
    );
}
 
export default Akcesoria;