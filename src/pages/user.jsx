import React from 'react';
import '../assets/scss/general.scss';
import SideMenu from '../components/user-sideMenu/sideMenu';
import BookinTable from '../components/user-booking-table/bookinTable';

const Users = () =>{
  return (
    <section className='users-container'>
        <SideMenu/>
        <BookinTable/>
    </section>
  )
}

export default Users