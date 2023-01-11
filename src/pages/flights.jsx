import React from 'react';
import FlightSearchForm from '../components/flight-search-form/FlightSearchForm';
import FlightResult from '../components/flight-results/FlightResults';
import FlightPassengerForm from '../components/flight-passenger-form/FlightPassengerForm';
import PaymentForm from '../components/payment-form/PaymentForm';
import '../assets/scss/general.scss';
import Context from '../context';
import { useContext } from 'react';


function FlightSearch() {
  const { flightSearchStep } = useContext(Context);
  console.log(flightSearchStep)
  
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
            <PaymentForm />
        </main>
      ) 
    }
  
  }

  return (
        <BookingStep />
  )
}

export default FlightSearch