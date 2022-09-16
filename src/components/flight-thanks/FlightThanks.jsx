import React from 'react';
import './flightthanks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const FlightThanks = () =>{
  return (
    <section className='flight-thanks-container'>
        <div className="flight-thanks-container_alert">
            <p>Your flight has been booked successfully! Your confirmation number is #381029404387</p>
        </div>

        <div className="flight-thanks-container_message">
            <h3 className="flight-thanks-container_message_title">Bon voyage, userName!</h3>
            <h4 className="flight-thanks-container_message_subtitle">Confirmation number: #381029404387</h4>

            <p className="flight-thanks-container_message_text">Thank you for booking your travel with Voyage! Below is a summary of your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your booking confirmation to your email address. You can also find this page again in My trips.</p>
        </div>

        <div className="flight-thanks-container_summary">
            <h3 className="flight-thanks-container_summary_title">Flight summary</h3>
            <div className="flight-thanks-container_summary_container">
              <h4 className="summary_container_title">
                  Outbound Flight
              </h4>
              <div className="summary_container_details">
                <div className="details-logo">
                  <FontAwesomeIcon icon={faPlane} />
                </div>
                <div className="details-airports">
                  <p>BCN</p>
                  <p>MAD</p>
                </div>

                <div className="details-dep-arr">
                  <p>Departure - 07:35</p>
                  <p>Arrival - 09:35</p>
                </div>

                <div className="details-duration">
                  <p>Flight duration - 2h 00m</p>
                  <p>Airline - Vueling</p>
                </div>
                
              </div>

              <h4 className="summary_container_title">
                  Inbound Flight
              </h4>
              <div className="summary_container_details">
                <div className="details-logo reversed">
                  <FontAwesomeIcon icon={faPlane} />
                </div>
                <div className="details-airports">
                  <p>MAD</p>
                  <p>BCN</p>
                </div>

                
                <div className="details-dep-arr">
                  <p>Departure - 18:35</p>
                  <p>Arrival - 19:45</p>
                </div>
                
                <div className="details-duration">
                  <p>Flight duration - 2h 00m</p>
                  <p>Airline - Vueling</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default FlightThanks