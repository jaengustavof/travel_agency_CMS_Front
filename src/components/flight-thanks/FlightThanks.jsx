import React from 'react';
import './flightthanks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Context from '../../context';
import { useState, useEffect, useContext} from 'react';

const FlightThanks = () =>{
  let {amadeusToken} = useContext(Context);
  const selectedFlight = JSON.parse(sessionStorage.getItem("selectedFlight"));
  const flightPasssengers = JSON.parse(sessionStorage.getItem("Passengers"));

  //console.log('Selected Flight:',selectedFlight)
  //console.log('Flight Passengers:',flightPasssengers);


  /// Hay que modificar esta llamada ///
  useEffect(()=>{

    var data = JSON.stringify({
      "data": {
        "type": "flight-order",
        "flightOffers": [
          {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-01-11",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT3H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "BCN",
                      "terminal": "1",
                      "at": "2023-08-01T18:45:00"
                    },
                    "arrival": {
                      "iataCode": "PMI",
                      "at": "2023-08-01T19:30:00"
                    },
                    "carrierCode": "UX",
                    "number": "6073",
                    "aircraft": {
                      "code": "73H"
                    },
                    "operating": {
                      "carrierCode": "UX"
                    },
                    "duration": "PT45M",
                    "id": "3",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "PMI",
                      "at": "2023-08-01T21:10:00"
                    },
                    "arrival": {
                      "iataCode": "MAD",
                      "terminal": "2",
                      "at": "2023-08-01T22:35:00"
                    },
                    "carrierCode": "UX",
                    "number": "6096",
                    "aircraft": {
                      "code": "73H"
                    },
                    "operating": {
                      "carrierCode": "UX"
                    },
                    "duration": "PT1H25M",
                    "id": "4",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT10H10M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "MAD",
                      "terminal": "2",
                      "at": "2023-08-05T21:45:00"
                    },
                    "arrival": {
                      "iataCode": "PMI",
                      "at": "2023-08-05T23:05:00"
                    },
                    "carrierCode": "UX",
                    "number": "6049",
                    "aircraft": {
                      "code": "73H"
                    },
                    "operating": {
                      "carrierCode": "UX"
                    },
                    "duration": "PT1H20M",
                    "id": "5",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "PMI",
                      "at": "2023-08-06T07:05:00"
                    },
                    "arrival": {
                      "iataCode": "BCN",
                      "terminal": "1",
                      "at": "2023-08-06T07:55:00"
                    },
                    "carrierCode": "UX",
                    "number": "6006",
                    "aircraft": {
                      "code": "73H"
                    },
                    "operating": {
                      "carrierCode": "UX"
                    },
                    "duration": "PT50M",
                    "id": "6",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "EUR",
              "total": "98.36",
              "base": "49.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "98.36",
              "additionalServices": [
                {
                  "amount": "60.00",
                  "type": "CHECKED_BAGS"
                }
              ]
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
              "UX"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "EUR",
                  "total": "98.36",
                  "base": "49.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "3",
                    "cabin": "ECONOMY",
                    "fareBasis": "NDYY4L",
                    "brandedFare": "LITE",
                    "class": "N",
                    "includedCheckedBags": {
                      "quantity": 0
                    }
                  },
                  {
                    "segmentId": "4",
                    "cabin": "ECONOMY",
                    "fareBasis": "ZFLY5L",
                    "brandedFare": "LITE",
                    "class": "Z",
                    "includedCheckedBags": {
                      "quantity": 0
                    }
                  },
                  {
                    "segmentId": "5",
                    "cabin": "ECONOMY",
                    "fareBasis": "ZFLY5L",
                    "brandedFare": "LITE",
                    "class": "Z",
                    "includedCheckedBags": {
                      "quantity": 0
                    }
                  },
                  {
                    "segmentId": "6",
                    "cabin": "ECONOMY",
                    "fareBasis": "NDYY4L",
                    "brandedFare": "LITE",
                    "class": "N",
                    "includedCheckedBags": {
                      "quantity": 0
                    }
                  }
                ]
              }
            ]
          }
        ],
        "travelers": [
          {
            "id": 1,
            "dateOfBirth": "1981-01-18",
            "name": {
              "firstName": "Gustavo",
              "lastName": "Jaen"
            },
            "gender": "MALE",
            "contact": {
              "emailAddress": "test@test.com",
              "phones": [
                {
                  "deviceType": "MOBILE",
                  "countryCallingCode": "34",
                  "number": "633161556"
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
        ],
        "remarks": {
          "general": [
            {
              "subType": "GENERAL_MISCELLANEOUS",
              "text": "ONLINE BOOKING FROM INCREIBLE VIAJES"
            }
          ]
        },
        "ticketingAgreement": {
          "option": "DELAY_TO_CANCEL",
          "delay": "6D"
        },
        "contacts": [
          {
            "addresseeName": {
              "firstName": "PABLO",
              "lastName": "RODRIGUEZ"
            },
            "companyName": "INCREIBLE VIAJES",
            "purpose": "STANDARD",
            "phones": [
              {
                "deviceType": "LANDLINE",
                "countryCallingCode": "34",
                "number": "480080071"
              },
              {
                "deviceType": "MOBILE",
                "countryCallingCode": "33",
                "number": "480080072"
              }
            ],
            "emailAddress": "support@increibleviajes.es",
            "address": {
              "lines": [
                "Calle Prado, 16"
              ],
              "postalCode": "28014",
              "cityName": "Madrid",
              "countryCode": "ES"
            }
          }
        ]
      }
    });
    
    var config = {
      method: 'post',
      url: 'https://test.api.amadeus.com/v1/booking/flight-orders',
      headers: { 
        'Authorization': `Bearer ${amadeusToken}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
      
  },[])
    

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