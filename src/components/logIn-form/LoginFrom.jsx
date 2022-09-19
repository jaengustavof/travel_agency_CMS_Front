import React from 'react';
import './loginform.scss';
import logo from '../../assets/images/gallery/logo.png';
import { useForm } from "react-hook-form";
import Context from '../../context';
import { useState, useEffect, useContext } from 'react';
import axios from "axios";


const App = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const app_context = useContext(Context);
  const { logedUsers, setlogedUsers } = app_context 


  const onSubmit = data => [
    
  ];
  return (
    <section className='login-form-container'>
        <img src={logo} alt="" className='reg-form-container_logo'/>
        <h1 className='reg-form-container_title'>Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
                <input {...register("email", { required: "Email Address is required" })} placeholder='Email Address' type='email'/>
                <p>{errors.firstName?.message}</p>
            </div>
            <div className="input-container">
                <input {...register("password")} placeholder='Password'/>
                <p>{errors.age?.message}</p>
            </div>
                
            
            
            <input type="submit" className='form-button' value='Log In'/>
            </form>
    </section>
  )
}

export default App