import { useForm } from "react-hook-form";
import './searchforms.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";


const App = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='request-form'>
            <fieldset className='fieldset-container d-flex flex-row justify-content-between align-items-end flex-wrap pt-5'>
                <div className="inputContainer">
                    <input {...register("origin")} placeholder='Origin' className='city'/>
                    <FontAwesomeIcon icon={faPlane} className='input-icon' />
                </div>
                <div className="inputContainer">
                    <input {...register("destination")} placeholder='Destination' className='city'/>
                    <FontAwesomeIcon icon={faPlane} className='input-icon' />
                </div>

                <div className="inputContainer">
                    <input type="date" {...register("departure")} className='mt-4'/>
                </div>
                
                <div className="inputContainer">
                    <input type="date"{...register("arrival")} className='mt-4'/>
                </div>
            </fieldset>

            <fieldset className='d-flex flex-row justify-content-between align-items-end flex-wrap pt-5'>
                <div className="inputContainer">  
                    <select {...register("passenges")}>
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
                <input type="submit" className="confirm-button" value="Search Flights"/>
            </fieldset>
        </form>
    )
 
}

export default App

