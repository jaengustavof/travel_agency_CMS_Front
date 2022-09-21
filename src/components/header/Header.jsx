import React from 'react';
import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel, faMap, faBars, faHome, faSignIn, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import menuMobile from './header';
import Context from '../../context';
import { useState, useEffect, useContext, useRef } from 'react';
import { Navigate, useNavigate } from "react-router-dom";


const Header = () =>{
    const app_context = useContext(Context);
    const { logedUsers, setlogedUsers } = app_context;
    const [mobileMenu, setMobileMenu] = useState([]);
    const [isActive, setActive] = useState("false");
    const navigate = useNavigate() 

    const handleClick = (event) => {
        setActive(!isActive);
    };

    const logOut = () =>{
        sessionStorage.removeItem('user');
        setlogedUsers(null);
        navigate('/');
    }
    
    useEffect(() => {
    if(!logedUsers ){
        setMobileMenu([{ icon:  <FontAwesomeIcon icon={faHome} />, link: '/', name: 'Home' },
        { icon:  <FontAwesomeIcon icon={faPlane} />, link: '/flight-search', name: 'Flights' },
        { icon:  <FontAwesomeIcon icon={faHotel} />, link: '/', name: 'Hotels' },
        { icon:  <FontAwesomeIcon icon={faMap} />, link: '', name: 'Tours' },
        { icon:  <FontAwesomeIcon icon={faUser} />, link: '/flight-search', name: 'Log In' },
        { icon:  <FontAwesomeIcon icon={faSignIn} />, link: '/flight-search', name: 'Sign In' }])
    }else {
        setMobileMenu([{ icon:  <FontAwesomeIcon icon={faHome} />, link: '/', name: 'Home' },
        { icon:  <FontAwesomeIcon icon={faPlane} />, link: '/flight-search', name: 'Flights' },
        { icon:  <FontAwesomeIcon icon={faHotel} />, link: '/', name: 'Hotels' },
        { icon:  <FontAwesomeIcon icon={faMap} />, link: '', name: 'Tours' },
        { icon:  <FontAwesomeIcon icon={faUser} />, link: '/flight-search', name: 'My Account' },
    ])
    }
    }, [logedUsers]);
    
    const LogedIn = () => {
        if(logedUsers){

            return(
                <div className="secondary-container">
                    <div onClick={handleClick}><span className='m-2'>Hello  {logedUsers.user_name}</span> <span className='user-icon'><FontAwesomeIcon icon={faUser} /></span></div>
                    <div className={isActive?"secondary-container_pop displayed":"secondary-container_pop "}>
                    <Link to='/user' onClick={handleClick}><span>My Account</span></Link>
                        <div className="separator"></div>
                        <span onClick={logOut}>Log Out</span>
                    </div>
                </div> 
            )
        }else {
            
            return (
                <div className="secondary-container">
                    <Link to="/log-in"><span></span> Log In</Link>
                    <Link to="/sign-in">
                        <div className="secondary-container_button">Sign in</div>
                    </Link>
                </div>
            )
        }
    }

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
                <LogedIn/>
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
                    {
                        mobileMenu.map((item, idx)=>{
                            return(
                                <Link to={item.link} key={idx}><span >{item.icon}</span> {item.name}</Link>
                            )
                        })
                    }

                </div>
            </nav>
        </header>
    )

}
export default Header;