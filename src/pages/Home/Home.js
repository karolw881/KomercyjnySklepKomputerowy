import NavBar from "../../Index-components/Navbar";
import Categories from "../../Index-components/Categories";
import Products from "../../Index-components/Products";
import Banner from "../../Index-components/Banner";
import Footer from "../../Index-components/Footer";

const Home = () => {
    return ( 
        <>
            <NavBar />
            <Categories />
            <Banner />
            <h1>Polecane produkty</h1>
            <Products />
            <Footer/>
        </>
     );
}
 
export default Home;