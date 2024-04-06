import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-navBar'>
        <div className='container-fluid'>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'> </span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'><img className='svg-icon' src='public\home-icon.svg' /><span>Inicio</span></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contacto'><img className='svg-icon' src='public\contact-icon.svg' /><span>Contacto</span></Link>
              </li>
            </ul>
            <Link className='nav-link' to='/'><span className='pe-2'>Happy Cake</span><img className='svg-icon' src='/cake-icon.png' /></Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar
