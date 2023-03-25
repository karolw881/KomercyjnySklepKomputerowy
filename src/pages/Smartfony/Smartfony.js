import NavBar from "../../Index-components/Navbar";
import Categories from "../../Index-components/Categories";
import Footer from "../../Index-components/Footer";
import Products from "../../Index-components/Products";

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