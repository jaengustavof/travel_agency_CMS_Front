import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/home';
import FlightSearch from './pages/flights';
import RegForm from './pages/signIn';
import LogForm from './pages/logIn';
import Users from './pages/user'
import Header from "./components/header/Header";
import Context from './context';
import axios from "axios";
import { useState, useEffect } from 'react';
//import amadeusAuth from "./hooks/amadeusAuth";
import qs from "qs";



const Container = () => {

  
  const [users, setUsers] = useState();
  const [amadeusToken, setAmadeusToken] = useState('')
  const [logedUsers, setlogedUsers] = useState('');
  const [regStep, setRegStep] = useState(1);
  const [flightSearchStep, setFlightSearchStep] = useState(1);
  const [flightSearchResult, setFlightSearchResult] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState()

  const amadeusAuth = async() => {

    const data = qs.stringify({
      'client_id': `hLTNNmBLAAry5gQ2xLKAZxEBJ9QN2Ux5`,
      'client_secret': `kMk70AxbxzFUbcVb`,
      'grant_type': 'client_credentials' 
      });
  
      const config = {
          method: 'post',
          url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
          headers: { },
          data : data
        };
  
      axios(config)
      .then(function (response) {
        setAmadeusToken(response.data.access_token
          );
      
      })
      .catch(function (error) {
      console.log(error);
      });
  }

  useEffect(()=>{
    amadeusAuth()    
    setInterval(() => {
      amadeusAuth() 
      console.log('cambia despues de 25min', amadeusToken)
    }, 1000 * 60 * 25);
  },[])
  
  console.log(amadeusToken)
 
  
  return (
    
    <Context.Provider value={{users, setUsers, 
                              logedUsers, setlogedUsers,  // loged user
                              regStep, setRegStep, // registration step
                              amadeusToken, setAmadeusToken, // Amadeus Token
                              flightSearchStep, setFlightSearchStep,// Flight purchase step
                              flightSearchResult, setFlightSearchResult, // flight search results
                              selectedFlight, setSelectedFlight // selected flight from search results
                              }}>
      <BrowserRouter >
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight-search" element={<FlightSearch />} />
          <Route path="/sign-in" element={<RegForm />} />
          <Route path="/log-in" element={<LogForm />} />
          <Route path="/user" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);

