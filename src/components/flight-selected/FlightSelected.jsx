import React from 'react';
import './flightselected.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const FlightSelected = () =>{
  return (
    <section className='flight-selected-container'>
        <div className="flight-selected-container_itinerary">
            <div className="flight-selected-container_itinerary_icon">
                <FontAwesomeIcon icon={faPlane} />
            </div>
            <div className="flight-selected-container_itinerary_airline">Vueling</div>
            <div className="flight-selected-container_itinerary_schedule">
                <p className="flight-selected-container_itinerary_schedule_dep-arr"><span>07:35</span><span> - </span><span>09:35</span></p>
                <p className="flight-selected-container_itinerary_schedule_total"><span>2</span>h <span>00</span>m</p>
            </div>
        </div>
        <div className="flight-selected-container_itinerary">
            <div className="flight-selected-container_itinerary_icon">
                <FontAwesomeIcon icon={faPlane} />
            </div>
            <div className="flight-selected-container_itinerary_airline">Vueling</div>
            <div className="flight-selected-container_itinerary_schedule">
                <p className="flight-selected-container_itinerary_schedule_dep-arr"><span>18:35</span><span> - </span><span>19:45</span></p>
                <p className="flight-selected-container_itinerary_schedule_total"><span>2</span>h <span>00</span>m</p>
            </div>
        </div>

        <div className="flight-selected-container_fare">
            <p>Fare Basis €<span>65</span></p>
            <p>Taxes €<span>20</span></p>
            <p className='fare-total'>Total €<span>85</span></p>
            <div className="flight-selected-container_fare_cta">
                Passenger information
            </div>
        </div>
    </section>
  )
}

export default FlightSelected