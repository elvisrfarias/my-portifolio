import React from 'react'

const dsTags = [
  {
    text: 'Figma',
    image: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
  },
  {
    text: 'CSS',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
  },
  {
    text: 'HTML 5',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
  },
  {
    text: 'Git',
    image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
  },
  {
    text: 'JavaScript',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
  },
  {
    text: 'TypeScript',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
  },
  {
    text: 'React',
    image: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
  },
]

const Main = () => {
  return (
    <div className='container'>
      <main className='main-container'>
        <h4>About:</h4>
        <h1>{'{{ '}<span className="titulo">{`Junior Developer `}</span>{' }} 🤟🏽'}</h1>

        <h4>Languages and Tools:</h4>
        <div className='tags'>
          {dsTags.map((item, index) => (
            <div className='tags-box' key={index}>
              <img src={item.image}></img>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <p className='main-paragrafo'>
          I currently work as a junior software developer at Raster. I got to know many cultures and did many things, I believe that the biggest life lesson I have is that there is no free lunch and that consistency in something you love to do is the big secret to success. It may sound cliché, but it's making me a better person every day.
        </p>
      </main>
    </div>
  )
}

export default Main;
