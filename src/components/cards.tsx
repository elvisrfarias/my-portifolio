import React from 'react'
import Image from "next/image";

const dsCard = [
  {
    id: 1,
    title: 'My project 01',
    imagem: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    id: 2,
    title: 'My project 02',
    imagem: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    id:3,
    title: 'My project 03',
    imagem: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    id: 4,
    title: 'My project 04',
    imagem: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
]

const Cards = () => {
  return (
      <div>
        <ul className="box-portifolio">

          {dsCard.map((item) => (
              // eslint-disable-next-line react/jsx-key
            <div className='card' key={item.id}>
              <h3>{item.title}</h3>
              <li className='box-image'>
                <Image
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    alt='Imagem do card'
                    width={200}
                    height={250}
                />
              </li>
            </div>
          ))}

        </ul>
      </div>
  )
}

export default Cards;
