import React from 'react'

const Contacto = () => {
  return (
    <div className='container-fluid text-center p-5 col-9'>
      <h2><span>Cuentanos,</span>¿En qué te podemos ayudar?</h2>
      <form className='pt-4'>
        <div className='mb-4'>
          <label for='exampleInputEmail1' className='form-label'>Porfavor, ingresa tu dirección de correo electrónico</label>
          <input type='email' className='form-control' placeholder='tucorreo@ejemplo.com' id='exampleInputEmail1' aria-describedby='emailHelp' />
          <div id='emailHelp' className='form-text fst-italic'>Pierde cuidado, nunca compartiremos tu información personal.</div>
        </div>
        <div className='form-floating pb-4'>
          <textarea className='form-control cuadro-texto ' placeholder='Leave a comment here' id='floatingTextarea' />
          <label for='floatingTextarea2'>Cuentanos tu idea para un pastel...</label>
        </div>
        <button type='submit' className='btn btn-danger'>Enviar</button>
      </form>
    </div>
  )
}

export default Contacto
