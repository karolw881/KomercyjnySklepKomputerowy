import '../Index-css/Banner.css';
import './Categories';
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { MdAccountCircle } from 'react-icons/md'
import { HiClipboardList } from 'react-icons/hi'
import { BsFillCartFill } from 'react-icons/bs'
import { BsSearch} from 'react-icons/bs'
import {FaIcon} from 'react-icons/fa'
import logo from '../images/logo.png'



const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="logo">
                <img id='logo' src={logo} />
            </div>

            <div className="logo-title">
                <h1><a href="/"> X-kom </a></h1>
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

                <a href="/pomoc">
                    <div className="flex-container">
                        <div className='nav-icon'><TfiHeadphoneAlt /></div>
                        <div className='nav-option'>Pomoc i kontakt</div>
                    </div>
                </a>
                <a href="/konto"><div className="flex-container">
                    <div className='nav-icon'><MdAccountCircle /></div>
                    <div className='nav-option'>Konto</div>
                </div></a>
                <a href="/lista"><div className="flex-container">
                    <div className='nav-icon'><HiClipboardList /></div>
                    <div className='nav-option'>Twoje listy</div>
                </div></a>
                <a href="/koszyk"><div className="flex-container">
                    <div className='nav-icon'><BsFillCartFill /></div>
                    <div className='nav-option'>Koszyk</div>
                </div></a>
            </div>
        </nav>
        
        

    );
}

export default NavBar;