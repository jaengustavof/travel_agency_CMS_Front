import React from 'react';
import './flightpassemgerform.scss';
import FlightSelected from '../flight-selected/FlightSelected';
import { useForm } from "react-hook-form";

const App = () =>{
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
      
    <form onSubmit={handleSubmit(onSubmit)} className='flight-passenger-form'>
        <div className='flight-passenger-form_header'>
            <h3 className='flight-passenger-form_header_title'>Passenger information</h3>
            <p className='flight-passenger-form_header_text'>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</p>
        </div>
        <div className='flight-passenger-form_container'>
            <div className="passenger-info">
              
              <fieldset className='passenger-fieldset'>
                <h4 className='passenger-fieldset_title'>Passenger <span>1</span></h4>
                <div className="passenger-fieldset_input-container">
                  <input type='text' {...register("firstName", { required: true })} placeholder='Name'/>
                  {errors.firstName && <span>Last name is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='text' {...register("lastName", { required: true })} placeholder='Last Name'/>
                  {errors.firstName && <span>Last last name is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='date' {...register("dob", { required: true })} />
                  {errors.firstName && <span>Date of Birth is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='email' {...register("email", { required: true })} placeholder='Email'/>
                  {errors.firstName && <span>Email is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='tel' {...register("phone", { required: true })} placeholder='Phone'/>
                  {errors.firstName && <span>Phone is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='text' {...register("address", { required: true })} placeholder='Address' />
                  {errors.firstName && <span>Address is required</span>}
                </div>

              </fieldset>

              <fieldset className='passenger-fieldset'>
              <h4 className='passenger-fieldset_title'>Passenger <span>2</span></h4>
                <div className="passenger-fieldset_input-container">
                  <input type='text' {...register("firstName2", { required: true })} placeholder='Name'/>
                  {errors.firstName2 && <span>Last name is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='text' {...register("lastName2", { required: true })} placeholder='Last Name'/>
                  {errors.firstName2 && <span>Last last name is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='date' {...register("dob2", { required: true })} />
                  {errors.firstName && <span>Date of Birth is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='email' {...register("email2", { required: true })} placeholder='Email'/>
                  {errors.firstName && <span>Email is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='tel' {...register("phone2", { required: true })} placeholder='Phone'/>
                  {errors.firstName && <span>Phone is required</span>}
                </div>

                <div className="passenger-fieldset_input-container">
                  <input type='text' {...register("address2", { required: true })} placeholder='Address' />
                  {errors.firstName && <span>Address is required</span>}
                </div>

              </fieldset>
            </div>

            <div className="passenger-flight">
                <FlightSelected/>
                <div className="submit-button-container">
                  <input type="submit" className='submit-button-container_button' value='Payment Details'/>
                </div>
                
            </div>
        </div>
    </form>
    
    
  )
}

export default App;