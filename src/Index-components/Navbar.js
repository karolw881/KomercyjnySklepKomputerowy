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
import { useState } from 'react';
import globalStore from "../../Store/GlobalStore";
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';


const NavBar = observer(() => {

    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) 
          setIsLogged(true);
      }, []);

      const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;
    
      const handleOpen = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };

      function logInAlert()
      {
        if(!setIsLogged)
        {
            handleOpen({
                vertical: 'top',
                horizontal: 'center',
              });
        }

        else
        {
            navigate("/Lista");
        }
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
                <Link onClick={logInAlert}><div className="flex-container">
                    <div className='nav-icon'><HiClipboardList /></div>
                    <div className='nav-option'>Twoje listy</div>
                </div></Link>
                <Link to="/Koszyk"><div className="flex-container">
                    <div className='nav-icon'><BsFillCartFill /></div>
                    <div className='nav-option'>Koszyk</div>
                </div></Link>
            </div>
            <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
        </nav>
        
        

    );
})

export default NavBar;