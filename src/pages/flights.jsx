import React from 'react';
import FlightSearchForm from '../components/flight-search-form/FlightSearchForm';
import FlightResult from '../components/flight-results/FlightResults';
import FlightPassengerForm from '../components/flight-passenger-form/FlightPassengerForm';
import FlightThanks from '../components/flight-thanks/FlightThanks';
import '../assets/scss/general.scss';
import Context from '../context';
import { useContext } from 'react';


function FlightSearch() {
  const { flightSearchStep } = useContext(Context);
  
  const BookingStep = () => {
    if(flightSearchStep === 1){
      return (
        <main className='flights-page'>
            <FlightSearchForm/>
            <FlightResult />
            
        </main>
      )
    }else if(flightSearchStep === 2){
      return (
        <main className='flights-page'>
            <FlightPassengerForm/>
        </main>
      ) 
    }else if(flightSearchStep === 3){
      return (
        <main className='flights-page'>
            PAYMENT INFO
        </main>
      ) 
    }else if(flightSearchStep === 4){
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