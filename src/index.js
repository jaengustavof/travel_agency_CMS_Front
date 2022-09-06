import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/home';
import FlightSearch from './pages/flights';



import Header from "./components/header/Header";
const Container = () => {

  return (
      <BrowserRouter >
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight-search" element={<FlightSearch />} />
        </Routes>
      </BrowserRouter>
 
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);

