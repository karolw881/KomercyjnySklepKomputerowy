import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import { observer } from "mobx-react";
import { useEffect, useState } from 'react';
import { BsFillCartFill, BsSearch } from 'react-icons/bs';
import { HiClipboardList } from 'react-icons/hi';
import { MdAccountCircle } from 'react-icons/md';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';
import '../Index-css/Banner.css';
import globalStore from '../Store/GlobalStore';
import logo from '../images/logo.png';
import SearchBar from './SearchBar';
import './Categories';


const NavBar = observer(() => {

    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {

        } else {
          setIsLogged(true);

          if(user.rola === "admin")
            setIsAdmin(true);

        }
      }, []);

      function logOut()
    {
        localStorage.removeItem('user');
        globalStore.setUser(null);
        setIsLogged(false);
        window.location.reload();
    }

    return (
        <nav className="navbar">

            <div className="logo">
                <img id='logo' src={logo} />
            </div>

            <div className="logo-title">
                <h1><Link to="/"> Y-kom </Link></h1>
            </div>
            

            <div className="links">

                
                <div className="searchbar" style={{marginRight:"-50px"}}>
                
                     <SearchBar />
                </div>  

            

                <Link to="/Pomoc">
                    <div className="flex-container">
                        <div className='nav-icon'><TfiHeadphoneAlt /></div>
                        <div className='nav-option'>Pomoc i kontakt</div>
                    </div>
                </Link>
                <Link to="/Konto"><div className="flex-container">
                    <div className='nav-icon'><MdAccountCircle /></div>
                    <div className='nav-option'>Konto</div>
                </div></Link>
                <Link to="/Lista"><div className="flex-container">
                    <div className='nav-icon'><HiClipboardList /></div>
                    <div className='nav-option'>Twoje listy</div>
                </div></Link>
                <Link to="/Koszyk"><div className="flex-container">
                    <div className='nav-icon'><BsFillCartFill /></div>
                    <div className='nav-option'>Koszyk</div>
                </div></Link>

                {isAdmin && <Link to="/PanelAdmina"><div className="flex-container">
                    <div className='nav-icon'><AdminPanelSettingsIcon /></div>
                    <div className='nav-option'>Panel admina</div>
                </div></Link>}

                {isLogged && <Link style={{marginTop:"-8px"}}>
                <div className="flex-container">
                    <IconButton className='nav-icon' onClick={logOut} aria-label="delete" size="large">
                    <LogoutIcon fontSize='inherit' />
                    </IconButton>
                    <div className="nav-option">Wyloguj</div>
                  </div></Link>
                }
                
            </div>
        </nav>
        
        

    );
})

export default NavBar;