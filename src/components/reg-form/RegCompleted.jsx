import React from 'react';
import './regform.scss';
import logo from '../../assets/images/gallery/logo.png';
import { Link } from 'react-router-dom';

const RegCompleted = () => {
  return (
    <section className='reg-form-container'>
      <img src={logo} alt="" className='reg-form-container_logo'/>
      <h1 className='reg-form-container_title'>Welcome Aboard!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, ante sit amet fermentum pulvinar, ligula tortor accumsan orci, eget convallis quam nulla eget purus</p>
      <Link to="/"><div className='back-button'>Back to Home</div></Link> 
    </section>
  )
}

export default RegCompleted