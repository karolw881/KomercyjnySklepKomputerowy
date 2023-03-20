import Home from './pages/Home/Home';
import Komputery from './pages/Komputery/Komputery';
import Smartfony from './pages/Smartfony/Smartfony';
import Gaming from './pages/Gaming/Gaming';
import Podzespoly from './pages/Podzespoly/Podzespoly';
import Peryferia from './pages/Peryferia/Peryferia';
import Telewizory from './pages/Telewizory/Telewizory';
import Akcesoria from './pages/Akcesoria/Akcesoria';
import { Route, Routes } from 'react-router-dom';
import Promocje from './pages/Promocje/Promocje';


function App() {

    

    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/Komputery" element={ <Komputery /> } />
                <Route path="/Smartfony" element={ <Smartfony /> } />
                <Route path="/Gaming" element={ <Gaming /> } />
                <Route path="/Podzespoly" element={<Podzespoly/>}/>
                <Route path="/Peryferia" element={<Peryferia/>}/>
                <Route path="/Telewizory" element={<Telewizory/>}/>
                <Route path="/Akcesoria" element={<Akcesoria/>}/>
                <Route path="/Promocje" element={<Promocje/>}/>
            </Routes>
        
        </>
    );
}

export default App;
