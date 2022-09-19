import '../assets/scss/general.scss';
import React from 'react';
import RegForm from '../components/reg-form/RegForm';
import RegCompleted from '../components/reg-form/RegCompleted';
import { useEffect, useContext } from 'react';
import Context from '../context';

const Registration = () => {
  let {regStep , setRegStep} = useContext(Context)

  useEffect(()=>{
    setRegStep(1)
  }, [])
 
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