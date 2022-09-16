import React from 'react';
import './sidemenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle,faPlane, faHotel, faMap, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


function SideMenu() {
  return (
    <div className='side-menu-container'>
        <div className="side-menu-container_item">
            <FontAwesomeIcon icon={faUserCircle} className='item-icon'/>
            <p>My Account</p>
        </div>
        <div className="side-menu-container_item menu">
            <FontAwesomeIcon icon={faPlane} className='item-icon'/>
            <p>Flights Bookings</p>
        </div>
        <div className="side-menu-container_item menu">
            <FontAwesomeIcon icon={faHotel} className='item-icon'/>
            <p>Hotel Bookings</p>
        </div>
        <div className="side-menu-container_item menu">
            <FontAwesomeIcon icon={faMap} className='item-icon'/>
            <p>Tours Bookings</p>
        </div>
        <div className="side-menu-container_item menu">
            <FontAwesomeIcon icon={faCog} className='item-icon'/>
            <p>Configure</p>
        </div>
        <div className="side-menu-container_item menu">
            <FontAwesomeIcon icon={faSignOutAlt} className='item-icon'/>
            <p>Sign Out</p>
        </div>
    </div>
  )
}

export default SideMenu