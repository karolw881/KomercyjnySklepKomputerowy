import NavBar from "../../Index-components/Navbar";
import Categories from "../../Index-components/Categories";
import Footer from "../../Index-components/Footer";
import Products from "../../Index-components/Products";


const komputery = () => {
    return ( 
        <>
            <NavBar />
            <Categories />
            <Products kategoria={"Komputery"}/>
            <Footer/>
        </>
     );
}
 
export default komputery;