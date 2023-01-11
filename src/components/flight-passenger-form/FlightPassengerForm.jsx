import React from 'react';
import './flightpassemgerform.scss';
import FlightSelected from '../flight-selected/FlightSelected';
import { useForm } from "react-hook-form";
import Context from '../../context';
import { useContext } from 'react';


const App = () =>{
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {selectedFlight, setSelectedFlight, flightSearchStep, setFlightSearchStep, setFlightPasssengers } = useContext(Context);

  const onSubmit = data =>{

    const totalForms = document.getElementsByClassName('passenger-fieldset').length;
    let passengers = []
    for(let i = 0; i < totalForms; i++){
      let name = 'firstName'+i;
      let lastName = 'lastName'+i;
      let dob = 'dob'+i;
      let email = 'email'+i;
      let phone = 'phone'+i;
      let newPassenger ={
            "id": i+1,
            "dateOfBirth": data[dob],
            "name": {
              "firstName": data[name],
              "lastName": data[lastName],
            },
            "gender": "MALE",
            "contact": {
              "emailAddress": data[email],
              "phones": [
                {
                  "deviceType": "MOBILE",
                  "countryCallingCode": "34",
                  "number": data[phone],
                }
              ]
            },
            "documents": [
              {
                "documentType": "PASSPORT",
                "birthPlace": "Madrid",
                "issuanceLocation": "Madrid",
                "issuanceDate": "2015-04-14",
                "number": "00000000",
                "expiryDate": "2025-04-14",
                "issuanceCountry": "ES",
                "validityCountry": "ES",
                "nationality": "ES",
                "holder": true
              }
            ]
          }
        
        passengers = [...passengers, newPassenger]
        
    }
    if(passengers.length > 0){
      setFlightPasssengers(passengers)
      setFlightSearchStep(3)
    }
  } 

  return (
      
    <form onSubmit={handleSubmit(onSubmit)} className='flight-passenger-form'>
        <div className='flight-passenger-form_header'>
            <h3 className='flight-passenger-form_header_title'>Passenger information</h3>
            <p className='flight-passenger-form_header_text'>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</p>
        </div>
        <div className='flight-passenger-form_container'>
            <div className="passenger-info">
              {selectedFlight.travelerPricings.map((e, index)=>{
                return(
                  <fieldset className='passenger-fieldset' key={index}>
                    <h4 className='passenger-fieldset_title'>Passenger <span>{index +1}</span></h4>
                    <div className="passenger-fieldset_input-container">
                      <input type='text' {...register("firstName"+index, { required: true })} placeholder='Name' value='Gustavo'/>
                      {errors.firstName && <span>Last name is required</span>}
                    </div>
    
                    <div className="passenger-fieldset_input-container">
                      <input type='text' {...register("lastName"+index, { required: true })} placeholder='Last Name' value='Jaen'/>
                      {errors.firstName && <span>Last last name is required</span>}
                    </div>
    
                    <div className="passenger-fieldset_input-container">
                      <input type='date' {...register("dob"+index, { required: true })} value='1981-01-18'/>
                      {errors.firstName && <span>Date of Birth is required</span>}
                    </div>
    
                    <div className="passenger-fieldset_input-container">
                      <input type='email' {...register("email"+index, { required: true })} placeholder='Email' value='test@test.com'/>
                      {errors.firstName && <span>Email is required</span>}
                    </div>
    
                    <div className="passenger-fieldset_input-container">
                      <input type='tel' {...register("phone"+index, { required: true })} placeholder='Phone' value='633161556'/>
                      {errors.firstName && <span>Phone is required</span>}
                    </div>
    
                    <div className="passenger-fieldset_input-container">
                      <input type='text' {...register("address"+index, { required: true })} placeholder='Address' value='Test Address 123' />
                      {errors.firstName && <span>Address is required</span>}
                    </div>
    
                  </fieldset>
                )
              })}

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