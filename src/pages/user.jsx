import React from 'react';
import '../assets/scss/general.scss';
import SideMenu from '../components/user-sideMenu/sideMenu';
import BookinTable from '../components/user-booking-table/bookinTable';
import Context from '../context';
import { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

const Users = () =>{
  const app_context = useContext(Context);
  const { logedUsers } = app_context;
  const navigate = useNavigate();

  useEffect(()=>{
    if(!logedUsers)navigate('/')
  }, [])
  

  return (
    <section className='users-container'>
        <SideMenu/>
        <BookinTable/>
    </section>
  )
}

export default Users