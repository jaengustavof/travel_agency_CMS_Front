import React from 'react';
import FlightSearchForm from '../components/flight-search-form/FlightSearchForm';
import FlightResult from '../components/flight-results/FlightResults';
import FlightPassengerForm from '../components/flight-passenger-form/FlightPassengerForm';
import FlightThanks from '../components/flight-thanks/FlightThanks';
import '../assets/scss/general.scss';
import { useState } from 'react';




function FlightSearch() {
  const [step, setStep] = useState(1)
  const BookingStep = () => {
    if(step === 1){
      return (
        <main className='flights-page'>
            <FlightSearchForm/>
            <FlightResult />
        </main>
      )
    }else if(step === 2){
      return (
        <main className='flights-page'>
            <FlightPassengerForm/>
        </main>
      ) 
    }else if(step === 3){
      return (
        <main className='flights-page'>
            PAYMENT INFO
        </main>
      ) 
    }else if(step === 4){
      return (
        <main className='flights-page'>
            <FlightThanks/>
        </main> 
      ) 
    }
  
  }

  return (
        <BookingStep />
  )
}

export default FlightSearch