import React from 'react';
import './regform.scss';
import { useForm } from "react-hook-form";
import logo from '../../assets/images/gallery/logo.png'

const App = () => {
    const { register, formState: { errors }, getValues, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <section className='reg-form-container'>
            <img src={logo} alt="" className='reg-form-container_logo'/>
            <h1 className='reg-form-container_title'>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-container">
                    <input {...register("firstName", { required: "First Name is required" })} placeholder='Name'/>
                    {errors.firstName && <span>{errors.firstName.message}</span>}
                </div>
                
                <div className="input-container">
                    <input {...register("lastName", { required: "Last Name is required" })} placeholder='Last Name'/>
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                </div>

                <div className="input-container">
                    <input {...register("mail", { required: "Email Address is required" })} placeholder='Email'/>
                    {errors.mail && <span>{errors.mail.message}</span>}
                </div>

                <div className="input-container">
                    <input {...register("phone", { required: "Phone is required" })} placeholder='Phone'/>
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
                
                <div className="input-container">
                    <input {...register("password", { required: "Password is required" })} placeholder='Password'/>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                
                <div className="input-container">
                    <input {...register("passwordConfirmation", { required: "Please confirm password", 
                    validate: {
                            matchesPreviousPassword: (value) => {
                                const { password } = getValues();
                                return password === value || "Passwords should match!";
                            }
                            }})} 
                    placeholder='Repeat Password'/>
                    {errors.passwordConfirmation && <span>{errors.passwordConfirmation.message}</span>}
                </div>
                
                
                <input type="submit" className='form-button' value='Sign Up'/>
            </form>
        </section>
        
    )
}

export default App