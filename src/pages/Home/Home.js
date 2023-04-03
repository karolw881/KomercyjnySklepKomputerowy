import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Products from "../../Components/Products";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";

const Home = () => {
    return ( 
        <>
            <NavBar />
            <Categories />
            <Banner />
            <h1>Polecane produkty</h1>
            <Products kategoria={"Polecane"}/>
            <Footer/>
        </>
     );
}
 
export default Home;