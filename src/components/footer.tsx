import Link from 'next/link'
import React from 'react'
import RedeSocial from './redeSocial'

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <p className='copy'>© 2023 | Elvis Farias</p>
      </div>


      <RedeSocial/>

      <Link className='email-footer' href={'mailto:elvisrfarias1@gmail.com'}>elvisrfarias1@gmail.com</Link>

    </footer>
  )
}

export default Footer;
