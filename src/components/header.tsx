
import Link from 'next/link'
import React from 'react'
import RedeSocial from './redeSocial'

const Header = () => {
  return (
    <header className='header-container'>
      <nav className='nav-container'>

        <div className='box-imagem'>
          <Link href={'/'}> <div className='avatar'></div> </Link>

          <div className='info-header'>
            <h2>Elvis Farias</h2>
            <p>Just an eternal apprentice!</p>
          </div>

        </div>
        <RedeSocial/>

      </nav>
    </header>
  )
}

export default Header;
