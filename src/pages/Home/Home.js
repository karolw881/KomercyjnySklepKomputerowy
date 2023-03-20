import NavBar from "../../Index-components/Navbar";
import Categories from "../../Index-components/Categories";
import Products from "../../Index-components/Products";
import Banner from "../../Index-components/Banner";

const Home = () => {
    return ( 
        <>
        <NavBar />
            <Categories />
            <Banner />
            <Products />
            
        </>
     );
}
 
export default Home;