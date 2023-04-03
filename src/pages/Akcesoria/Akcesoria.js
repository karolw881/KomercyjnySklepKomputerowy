import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import Products from "../../Components/Products";

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