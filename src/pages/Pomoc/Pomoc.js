
import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import './Pomoc.css'

import { Link } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DevicesIcon from '@mui/icons-material/Devices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CachedIcon from '@mui/icons-material/Cached';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';


const Pomoc = () => {
    return ( 
        <>
        <NavBar/>
        <Categories/>
        <h1>Centrum pomocy</h1>
            <h2>W jaki sposób możemy ci pomóc?</h2>
        <div className="help-nav">

            <Link to="/help-FAQ">
                <div className="flex-container">
                    <div className="nav-icon"><HelpIcon/></div>
                    <div className='nav-option'>Najczęściej zadawane pytania</div>
                </div>
            </Link>
            <Link to="/help-zamowienia">
                <div className="flex-container">
                    <div className="nav-icon"><LocalShippingIcon/></div>
                    <div className='nav-option'>Zamówienia i wysyłka</div>
                </div>
            </Link>
            <Link to="/help-produkty">
                <div className="flex-container">
                    <div className="nav-icon"><DevicesIcon/></div>
                    <div className='nav-option'>Produkty</div>
                </div>
            </Link>
            <Link to="/help-ubezpieczenia">
                <div className="flex-container">
                    <div className="nav-icon"><HealthAndSafetyIcon/></div>
                    <div className='nav-option'>Ubezpieczenia</div>
                </div>
            </Link>
            <Link to="/help-reklamacje">
                <div className="flex-container">
                    <div className="nav-icon"><CachedIcon/></div>
                    <div className='nav-option'>Reklamacje i zwroty</div>
                </div>
            </Link>
            <Link to="/help-kontakt">
                <div className="flex-container">
                    <div className="nav-icon"><ContactSupportIcon/></div>
                    <div className='nav-option'>Kontakt i salony</div>
                </div>
            </Link>
            <Link to="/help-inne">
                <div className="flex-container">
                    <div className="nav-icon"><HelpCenterIcon/></div>
                    <div className='nav-option'>Inne</div>
                </div>
            </Link>
        </div>
        <Footer/>
        </>
    );
}
 
export default Pomoc;