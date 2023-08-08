import { Card } from 'antd';
import React from 'react'

const dsCard = [
  {
    title: 'My project 01',
    imagem: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    title: 'My project 02',
    imagem: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    title: 'My project 03',
    imagem: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    title: 'My project 04',
    imagem: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
]

const Portifolio = () => {
  return (
    <section className='container-portifolio'>
      <div className="titulo-portifolio">
        <h3>My Portfolio</h3>
      </div>

      <div className="box-portifolio">
        {dsCard.map((item, index) => (
          <Card className='card'>
            <h3>{item.title}</h3>
            <div className="custom-image" key={index}>
              <img alt={item.title} src={item.imagem} />
            </div>
          </Card>
        ))}
      </div>

    </section>
  )
}

export default Portifolio;
