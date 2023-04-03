import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import Products from "../../Components/Products";


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