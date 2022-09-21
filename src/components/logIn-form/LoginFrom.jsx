import React from 'react';
import './loginform.scss';
import logo from '../../assets/images/gallery/logo.png';
import { useForm } from "react-hook-form";
import Context from '../../context';
import { useContext } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


const App = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const app_context = useContext(Context);
  const { logedUsers, setlogedUsers } = app_context;
  const navigate = useNavigate() 


  const onSubmit = data => {
    try {
      axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, data)
      .then(function (response) {
      // handle success
      const { data } = response.data
      setlogedUsers(data)
      sessionStorage.setItem('user', JSON.stringify(data));
      var item_value = JSON.parse(sessionStorage.getItem('user'));
      console.log(item_value )
      navigate('/')
          })
          .catch(function (error) {
            console.log(error.message)
          })
  
    } catch (error) {
      console.info("> error: ", error.message);
      setlogedUsers(null)
      return {
        success: false,
        data: [],
      };
    }  
  };



  return (
    <section className='login-form-container'>
        <img src={logo} alt="" className='reg-form-container_logo'/>
        <h1 className='reg-form-container_title'>Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
                <input {...register("user_email", { required: "Email Address is required" })} placeholder='Email Address' type='email'/>
                <p>{errors.user_email?.message}</p>
            </div>
            <div className="input-container">
                <input {...register("user_password", { required: "Password is required" })} placeholder='Password' type='password'/>
                <p>{errors.user_password?.message}</p>
            </div>
                
            
            
            <input type="submit" className='form-button' value='Log In'/>
            </form>
    </section>
  )
}

export default App