import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import './registrobasic.css'

const Registrobasic = () => {
  const { register , handlesubmit } =useForm()
  return (
  <Fragment>
       <div className='container'>
            <h2>REGISTRO</h2>
          
         <form className='form-react'>
           <div className='form-control'>
              <label>Nombre</label>
              <input type='text' {...register('Usuario')}/>
           </div>
           <div className='form-control'>
              <label>Correo</label>
              <input type='email' {...register<('Usuario')}/>
           </div>
           <div className='form-control'>
              <label>Contraseña</label>
              <input type='password' {...register('Usuario')}/>
           </div>
            <button type='submit'>Registrarse</button>

           </form>

       </div>

  </Fragment>
)
}
export default Registrobasic