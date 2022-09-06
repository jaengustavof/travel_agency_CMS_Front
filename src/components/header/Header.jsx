import React from 'react';
import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import menuMobile from './header';




const Header = () =>{
  return (
    <header>
        <nav className='px-4 desktop'>
            <div className="logo-container">
                <Link to="/">
                    <svg width="41" height="29" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="13.0537" y="0.674805" width="12" height="25" rx="6" transform="rotate(30 13.0537 0.674805)" fill="#3011BC"/>
                        <rect x="29.9458" y="0.674805" width="12" height="25" rx="6" transform="rotate(30 29.9458 0.674805)" fill="#FE7A15"/>
                    </svg>
                    
                    <span className="logo-container_brand">abroad</span>
                </Link>
            </div>
            <div className="menu-container">
            <Link to="/flight-search"><span ><FontAwesomeIcon icon={faPlane} /></span> Flights</Link>
            <Link to="/"><span className='mr-1'><FontAwesomeIcon icon={faHotel} /></span> Hotels</Link>
            <Link to="/"><span className='mr-1'><FontAwesomeIcon icon={faMap} /></span> Tours</Link>
               
               
            </div>
            <div className="secondary-container">
                <Link to="/"><span></span> Support</Link>
                <Link to="/">
                    <div className="secondary-container_button">Sign in</div>
                </Link>
            </div>
        </nav>

        <nav className="px-4 mobile">
            <div className="logo-container">
                <Link to="/">
                    <svg width="41" height="29" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="13.0537" y="0.674805" width="12" height="25" rx="6" transform="rotate(30 13.0537 0.674805)" fill="#3011BC"/>
                        <rect x="29.9458" y="0.674805" width="12" height="25" rx="6" transform="rotate(30 29.9458 0.674805)" fill="#FE7A15"/>
                    </svg>
                    <span className="logo-container_brand">abroad</span>
                </Link>
                
            </div>
            
            <div className="menu-container" onClick={menuMobile}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="nav-menu" id='nav-menu'>
                <Link to="/flight-search"><span ><FontAwesomeIcon icon={faHome} /></span> Home</Link>
                <Link to="/"><span ><FontAwesomeIcon icon={faPlane} /></span> Flights</Link>
                <Link to="/"><span ><FontAwesomeIcon icon={faHotel} /></span> Hotels</Link>
                <Link to="/"><span ><FontAwesomeIcon icon={faMap} /></span> Tours</Link>
                <Link to="/"><span ><FontAwesomeIcon icon={faHeadset} /></span> Support</Link>
                <Link to="/"><span ><FontAwesomeIcon icon={faSignIn} /></span> Sign In</Link>
            </div>
        </nav>
    </header>
  )
}
export default Header;