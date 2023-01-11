import React from 'react';
import './flightselected.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import Context from '../../context';

import axios from "axios";

const FlightSelected = () =>{

    const handleClick = (flight) =>{
        
        try {
            axios.post(`http://localhost:3000/flights/flight-confirmation`, flight)
            .then(function (response) {
            // handle success
            const { data } = response.data
            console.log(response)
                if(data.flightOffers.length >=1){
                    setFlightSearchStep(2)
                }
          })
          .catch(function (error) {
            console.log(error.message)
          })
        } catch (error) {
            console.info("> error: ", error.message);

            return {
                success: false,
                data: [],
            };
        }

    }

    const {selectedFlight, setFlightSearchStep} = useContext(Context);
    if(selectedFlight){
        return (
            <section className='flight-selected-container'>
                <div className="flight-selected-container_itinerary">
                    <div className="flight-selected-container_itinerary_icon">
                        <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div className="flight-selected-container_itinerary_airline">{selectedFlight.itineraries[0].segments[0].carrierCode}{selectedFlight.itineraries[0].segments[0].number}</div>
                    <div className="flight-selected-container_itinerary_schedule">

                        <p className="flight-selected-container_itinerary_schedule_dep-arr"><span>{selectedFlight.itineraries[0].segments[0].departure.at.slice(11, 16)}</span><span> - </span><span>{selectedFlight.itineraries[0].segments[selectedFlight.itineraries[0].segments.length-1].arrival.at.slice(11, 16)}</span></p>

                        <p className="flight-selected-container_itinerary_schedule_total"><span>{selectedFlight.itineraries[0].duration.slice(selectedFlight.itineraries[0].duration.indexOf('T')+1,selectedFlight.itineraries[0].duration.indexOf('H'))}</span>h <span>{selectedFlight.itineraries[0].duration.slice(selectedFlight.itineraries[0].duration.indexOf('H')+1,selectedFlight.itineraries[0].duration.indexOf('M'))}</span>m</p>
                    </div>
                </div>
                <div className="flight-selected-container_itinerary">
                    <div className="flight-selected-container_itinerary_icon ">
                        <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div className="flight-selected-container_itinerary_airline">{selectedFlight.itineraries[1].segments[0].carrierCode}{selectedFlight.itineraries[1].segments[0].number}</div>
                    <div className="flight-selected-container_itinerary_schedule">

                        <p className="flight-selected-container_itinerary_schedule_dep-arr"><span>{selectedFlight.itineraries[1].segments[0].departure.at.slice(11, 16)}</span><span> - </span><span>{selectedFlight.itineraries[1].segments[selectedFlight.itineraries[1].segments.length-1].arrival.at.slice(11, 16)}</span></p>
                    
                        <p className="flight-selected-container_itinerary_schedule_total"><span>{selectedFlight.itineraries[1].duration.slice(selectedFlight.itineraries[1].duration.indexOf('T')+1,selectedFlight.itineraries[1].duration.indexOf('H'))}</span>h <span>{selectedFlight.itineraries[1].duration.slice(selectedFlight.itineraries[1].duration.indexOf('H')+1,selectedFlight.itineraries[1].duration.indexOf('M'))}</span>m</p>
                    </div>
                </div>
    
                <div className="flight-selected-container_fare">
                    <p>Fare Basis € <span>{selectedFlight.price.base}</span></p>
                    <p>Taxes €<span>{(selectedFlight.price.total - selectedFlight.price.base).toFixed(2)}</span></p>
                    <p className='fare-total'>Total € <span>{selectedFlight.price.total}</span></p>
                    <div className="flight-selected-container_fare_cta" onClick={()=> handleClick(selectedFlight)}>
                        Passenger information
                    </div>
                </div>
            </section>
        )
    }
   
}

export default FlightSelected