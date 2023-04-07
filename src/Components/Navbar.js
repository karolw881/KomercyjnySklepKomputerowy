import '../Index-css/Banner.css';
import './Categories';
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { MdAccountCircle } from 'react-icons/md'
import { HiClipboardList } from 'react-icons/hi'
import { BsFillCartFill } from 'react-icons/bs'
import { BsSearch} from 'react-icons/bs'
import {FaIcon} from 'react-icons/fa'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { observer } from "mobx-react";
import globalStore from '../Store/GlobalStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';


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

                <div className="searchbar">
                <input
                    type="text"
                    placeholder="Czego szukasz?"
                     />
                     
                </div>  

                <div className="search-icon">
                    <BsSearch/>
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
                    <div className='nav-icon'><BsFillCartFill /></div>
                    <div className='nav-option'>Panel admina</div>
                </div></Link>}

                {isLogged && <Link style={{marginTop:"-2vh"}}>
                <div className="flex-container">
                    
                    <div className='nav-icon'>
                    <IconButton onClick={logOut} aria-label="delete" size="large">
                    <LogoutIcon fontSize='inherit' />
                  </IconButton></div>
                  <div className='nav-option'>Wyloguj</div>
                  </div></Link>
                }
                
            </div>
        </nav>
        
        

    );
})

export default NavBar;