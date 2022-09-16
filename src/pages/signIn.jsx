import '../assets/scss/general.scss';
import React from 'react';
import RegForm from '../components/reg-form/RegForm';
import RegCompleted from '../components/reg-form/RegCompleted';
import { useState } from 'react';

const Registration = () => {
  const [regStep, setRegStep] = useState(1)
  const FormStep = () => {
    if(regStep ===1){
      return <RegForm />
    }else if(regStep ===2){
      return <RegCompleted />
    }
  }

  return (
    <section className='signIn'>
        <FormStep/>
    </section>
  )
}

export default Registration