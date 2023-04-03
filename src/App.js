import Home from './pages/Home/Home';
import Komputery from './pages/Komputery/Komputery';
import Smartfony from './pages/Smartfony/Smartfony';
import Gaming from './pages/Gaming/Gaming';
import Podzespoly from './pages/Podzespoly/Podzespoly';
import Peryferia from './pages/Peryferia/Peryferia';
import Telewizory from './pages/Telewizory/Telewizory';
import Akcesoria from './pages/Akcesoria/Akcesoria';
import Promocje from './pages/Promocje/Promocje';
import Pomoc from './pages/Pomoc/Pomoc';
import Konto from './pages/Konto/Konto';
import Lista from './pages/Lista/Lista';
import Koszyk from './pages/Koszyk/Koszyk';
import Rejestracja from './pages/Rejestracja/Rejestracja';
import Test from './pages/Test/Test';
import { Route, Routes } from 'react-router-dom';



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
                <Route path="/Pomoc" element={<Pomoc/>}/>
                <Route path="/Konto" element={<Konto/>}/>
                <Route path="/Lista" element={<Lista/>}/>
                <Route path="/Koszyk" element={<Koszyk/>}/>
                <Route path="/Rejestracja" element={<Rejestracja/>}/>
                <Route path="/Test" element={<Test/>}/>
            </Routes>
            
        
        </>
    );
}

export default App;
