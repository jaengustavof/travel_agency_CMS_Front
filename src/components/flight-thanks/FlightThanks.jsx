import React from 'react';
import './flightthanks.scss'

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

        </div>
    </section>
  )
}

export default FlightThanks