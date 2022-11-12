import { useForm } from "react-hook-form";
import './searchforms.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import Context from '../../context';

const handleChange = (e) =>{
    const returnDate = document.getElementById('return');
    returnDate.setAttribute('min', e.target.value);
}

const App = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, getValues, reset } = useForm();
    const today = new Date().toISOString().split('T')[0];
    const [errorType, setErrorType] = useState(0);
    const navigate = useNavigate();
    let {amadeusToken} = useContext(Context);
    const {flightSearchResult, setFlightSearchResult} = useContext(Context);

    useEffect(()=>{
        setErrorType(0)
    },[])

    useEffect(()=>{
        if(flightSearchResult.length >=1){
            navigate('/flight-search')
        }else{
            navigate('/')
        }
        
    },[flightSearchResult])


    const AlertMessage = ()  => {
        if(errorType === 1) {
            return(
                <Alert variant='danger' className='w-100 text-center'>
                    Error, Please check dates.
                </Alert>
            )
        }else if(errorType === 0){
            return
        }
    }

    const onSubmit = data => {

        if(data.departure > data.arrival){
            setErrorType(1)
            return;
        }else if(data.departure <= data.arrival){
            setErrorType(0);
            let { origin, destination, departure, arrival, passengers} = data;
            origin = origin.toUpperCase();
            destination = destination.toUpperCase();

            let config = {
                method: 'get',
                url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departure}&returnDate=${arrival}&adults=${passengers}&max=5`,
                headers: {  Authorization: `Bearer ${amadeusToken}` }
              };

              axios(config)
              .then(function (response) {
                setFlightSearchResult(response.data.data)
               
              })
              .catch(function (error) {
                console.log(error);
              });
        }        

    }

    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='request-form'>
            <fieldset className='fieldset-container d-flex flex-row justify-content-between align-items-start flex-wrap pt-5'>

                <div className="inputContainer">

                    <input {...register("origin", {required:'Origin is required'})} placeholder='Origin' className='city'/>

                    {errors.origin && <span>{errors.origin.message}</span>}

                    <FontAwesomeIcon icon={faPlane} className='input-icon' />

                </div>

                <div className="inputContainer">

                    <input {...register("destination", {required:'Destination is required'})} placeholder='Destination' className='city'/>

                    {errors.destination && <span>{errors.destination.message}</span>}

                    <FontAwesomeIcon icon={faPlane} className='input-icon' />

                </div>

                <div className="inputContainer">

                    <input type="date" {...register("departure", {required: 'Departure date required'})} className='mt-4' onChange={handleChange} min={today} />

                    {errors.departure && <span>{errors.departure.message}</span>}

                </div>
                
                <div className="inputContainer">

                    <input type="date"{...register("arrival")} className='mt-4 ' id="return" min={today}/>

                </div>

            </fieldset>
            
            <fieldset className='d-flex flex-row justify-content-between align-items-end flex-wrap pt-5'>
                <div className="inputContainer">  

                    <select {...register("passengers")}>
                        <option value="" disabled>Passengers</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>

                    <FontAwesomeIcon icon={faPeopleGroup} className='input-icon' />

                </div> 
                
            </fieldset>

            <fieldset className='d-flex flex-row justify-content-between flex-wrap pt-5'>
            <AlertMessage/>
                <input type="submit" className="confirm-button" value="Search Flights"/>

            </fieldset>
        </form>
    )
 
}

export default App

