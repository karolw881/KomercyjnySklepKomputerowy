import Categories from './Index-components/Categories';
import NavBar from './Index-components/Navbar';
import Banner from './Index-components/Banner';
import Products from './Index-components/Products';
import Home from './pages/Home';
import Komputery from './pages/Komputery';
import { Route, Routes } from 'react-router-dom';


function App() {

    

    return (
        <>
       
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/Komputery" element={ <Komputery /> } />
            </Routes>
        
        </>
    );
}

export default App;
