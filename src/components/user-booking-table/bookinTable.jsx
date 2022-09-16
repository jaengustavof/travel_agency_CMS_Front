import React from 'react'
import './bookingtable.scss'

const BookinTable = () => {
  return (
    <div className="bookings-table-container">
        <h3 className='bookings-table-container_title'>Flight Bookings</h3>
        <div className='container-table'>
            <ul className="container-table_headers">
                <li>Booking ID</li>
                <li>Departure Date</li>
                <li>Arrival Date</li>
                <li>From</li>
                <li>To </li>
                <li>Price</li>
            </ul>
            <ul className="container-table_content">
                <li>AAAAAA</li>
                <li>2022/12/01</li>
                <li>2022/12/15</li>
                <li>BCN</li>
                <li>MAD </li>
                <li>325.99</li>
            </ul>
            <ul className="container-table_content">
                <li>AAAAAA</li>
                <li>2022/12/01</li>
                <li>2022/12/15</li>
                <li>BCN</li>
                <li>MAD </li>
                <li>325.99</li>
            </ul>
            <ul className="container-table_content">
                <li>AAAAAA</li>
                <li>2022/12/01</li>
                <li>2022/12/15</li>
                <li>BCN</li>
                <li>MAD </li>
                <li>325.99</li>
            </ul>
            <ul className="container-table_content">
                <li>AAAAAA</li>
                <li>2022/12/01</li>
                <li>2022/12/15</li>
                <li>BCN</li>
                <li>MAD </li>
                <li>325.99</li>
            </ul>
            <ul className="container-table_content">
                <li>AAAAAA</li>
                <li>2022/12/01</li>
                <li>2022/12/15</li>
                <li>BCN</li>
                <li>MAD </li>
                <li>325.99</li>
            </ul>
            <ul className="container-table_content">
                <li>AAAAAA</li>
                <li>2022/12/01</li>
                <li>2022/12/15</li>
                <li>BCN</li>
                <li>MAD </li>
                <li>325.99</li>
            </ul>
            
        </div>
    </div>
  )
}

export default BookinTable