import React from 'react';
import FlightSearchForm from '../components/flight-search-form/FlightSearchForm';
import FlightResult from '../components/flight-results/FlightResults';


function FlightSearch() {
  return (
    <main>
        <FlightSearchForm/>
        <FlightResult />
 
    </main>
    
  )
}

export default FlightSearch