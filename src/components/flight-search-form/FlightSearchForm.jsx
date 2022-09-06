import React from 'react';
import './flightsearchform.scss';
import { useForm } from "react-hook-form";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import handleClick from './flightsearchform';


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [flight, setFlight] = useState('rt')
  const onSubmit = data => console.log(data);

  const FlightType = () => {
    if(flight === 'rt'){
      return(
        <div className='d-flex '>
          <div className="inputContainer">
            <input type="date"  {...register("depDate", {required: true})} />
            {errors.depDate?.type === 'required' && <span style={{color: 'red'}}>Date is required</span>}
          </div>

          <div className="inputContainer">
            <input type="date" {...register("ArrivalDate", {required: true})} />
            {errors.ArrivalDate?.type === 'required' && <span style={{color: 'red'}}>Date is required</span>}
          </div>
        </div>);

    }else if(flight === 'ow'){
      return(
        <div className='d-flex'>
          <div className="inputContainer">
            <input type="date"  {...register("depDate", {required: true})} />
            {errors.depDate?.type === 'required' && <span style={{color: 'red'}}>Date is required</span>}
          </div>
        </div>);
    }
  }

  const radios = [
    { name: <FontAwesomeIcon icon={faRightLeft} />, value: 'rt' },
    { name: <FontAwesomeIcon icon={faArrowRight} />, value: 'ow' },

  ];


  return (
    <section className='flight-search-form-container'>
      <div className="flight-search-form-container_background">
        <ButtonGroup className='button-group  gap-3'>
            {radios.map((radio, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type='radio'
                variant={'outline-tabs'}
                name='radio'
                value={radio.value}
                checked={flight === radio.value}
                onChange={(e) => setFlight(e.currentTarget.value)}
                className={idx === 0?'search-button selected':'search-button'}
                onClick={(e) =>handleClick(e.currentTarget)}

            >
                {radio.name}
            </ToggleButton>
            ))}
        </ButtonGroup>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="inputContainer">
            <FontAwesomeIcon icon={faEarthAmericas} className='input-icon' />
            <input type="text"{...register("departure", {required: true})} placeholder="Departure City"/>
            {errors.departure?.type === 'required' && <span style={{color: 'red'}}>Departure City is required</span>}
          </div>

          <div className="inputContainer">
            <FontAwesomeIcon icon={faEarthAmericas} className='input-icon' />
            <input type="text" {...register("destination", {required: true})} placeholder="Destination City"/>
            {errors.destination?.type === 'required' && <span style={{color: 'red'}}>Destination City is required</span>}
          </div>
          
          <FlightType/>
          

          <input type="submit" className='submit-button'/>
        </form>
      </div>

    </section>
  )
}

export default App