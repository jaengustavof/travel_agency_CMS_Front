import React from 'react';
import './regform.scss';
import { useForm } from "react-hook-form";
import logo from '../../assets/images/gallery/logo.png';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect, useContext} from 'react';

import Context from '../../context';

const App = () => {
    const [errorType, setErrorType] = useState(0);
    let {regStep , setRegStep} = useContext(Context);

    const AlertMessage = () =>{
        if(errorType === 1) {
            return(
                <Alert variant='danger' className='w-100 text-center'>
                    User Already Exists
                </Alert>
            )
        }else if(errorType === 0){
            return
        }
    }

    useEffect(()=>{
        setErrorType(0)
    },[])

    const { register, formState: { errors, isSubmitSuccessful }, getValues, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.role_name = "user"
        try {
            axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, data)
            .then(function (response) {
            // handle success
            setRegStep(2)
            //console.log('respuesta del servidor ',response)
            return response;
                })
                .catch(function (error) {
                   if(error.request.status === 400) setErrorType(1)
                })
        
          } catch (error) {
            console.info("> error: ", error.message);
            return {
              success: false,
              data: [],
            };
          }  
    }

    useEffect(() => {
     reset()
      }, [isSubmitSuccessful, reset]);

    

    return(
        <section className='reg-form-container'>
            <img src={logo} alt="" className='reg-form-container_logo'/>
            <h1 className='reg-form-container_title'>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-container">
                    <input {...register("user_name", { required: "First Name is required" })} placeholder='Name'/>
                    {errors.user_name && <span>{errors.user_name.message}</span>}
                </div>
                
                <div className="input-container">
                    <input {...register("user_last", { required: "Last Name is required" })} placeholder='Last Name'/>
                    {errors.user_last && <span>{errors.user_last.message}</span>}
                </div>

                <div className="input-container">
                    <input {...register("user_email", { required: "Email Address is required" })} placeholder='Email'/>
                    {errors.user_email && <span>{errors.user_email.message}</span>}
                </div>

                <div className="input-container">
                    <input {...register("user_phone", { required: "Phone is required" })} placeholder='Phone'/>
                    {errors.user_phone && <span>{errors.user_phone.message}</span>}
                </div>
                
                <div className="input-container">
                    <input {...register("user_password", { required: "Password is required" })} placeholder='Password' type='password'/>
                    {errors.user_password && <span>{errors.user_password.message}</span>}
                </div>
                
                <div className="input-container">
                    <input {...register("passwordConfirmation", { required: "Please confirm password", 
                    validate: {
                            matchesPreviousPassword: (value) => {
                                const { user_password } = getValues();
                                return user_password === value || "Passwords should match!";
                            }
                            }})} 
                    placeholder='Repeat Password' type='password'/>
                    {errors.passwordConfirmation && <span>{errors.passwordConfirmation.message}</span>}
                </div>

             
                
                <AlertMessage/>
                <input type="submit" className='form-button' value='Sign Up'/>
            </form>
        </section>
        
    )
}

export default App