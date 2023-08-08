
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

        <div className='box-icones'>
          <ul>
            <li><Image src="/image/WhatsApp.svg" alt="Icone WhatsApp" width={24} height={24} /></li>
            <li><Image src="/image/Linkedin.svg" alt="Icone linkedin" width={24} height={24} /></li>
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Header;
