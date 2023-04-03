import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import Products from "../../Components/Products";

const Smartfony = () => {
    return (
        <>
            <NavBar />
            <Categories />
            <Products kategoria={"Smartfony"} />
            <Footer />
        </>
    );
}

export default Smartfony;