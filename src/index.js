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
import { useState, useEffect } from 'react';
import amadeusAuth from "./hooks/amadeusAuth";

const Container = () => {
  useEffect(()=>{
    amadeusAuth();
    setInterval(() => {
      console.log('test')
    }, 1000);
  })

  
  const [users, setUsers] = useState();
  const [amadeusToken, setAmadeusToken] = useState('')
  const [logedUsers, setlogedUsers] = useState('');
  const [regStep, setRegStep] = useState(1)
  return (
    
    <Context.Provider value={{users, setUsers, logedUsers, setlogedUsers, regStep, setRegStep, amadeusToken, setAmadeusToken}}>
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

