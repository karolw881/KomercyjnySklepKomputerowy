import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import Products from "../../Components/Products";

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