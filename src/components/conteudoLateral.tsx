import moment from 'moment';
import React from 'react'

const dsLanguage = [
    {
        id: 1,
        text: 'Figma',
        image: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
    },
    {
        id: 2,
        text: 'CSS',
        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
    },
    {
        id: 3,
        text: 'HTML 5',
        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
    },
    {
        id: 4,
        text: 'Git',
        image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
    },
    {
        id: 5,
        text: 'JavaScript',
        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
    },
    {
        id: 6,
        text: 'TypeScript',
        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
    },
    {
        id: 7,
        text: 'React',
        image: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
    },
]

const ConteudoLateral = () => {
    const dataAtual = moment();
    const dataDeNascimento = moment('1996-10-01', 'YYYY-MM-DD');
    const idadeAtual = dataAtual.diff(dataDeNascimento, 'years');

    return (
        <>
            <aside className="profile" aria-labelledby="profile-title">
                <div className="container">
                    <h4 id="profile-title">More information</h4>
                    <ul>
                        <li className="profile-age"><span>Age:</span>
                            <span style={{ fontSize: '.85rem' }}>{idadeAtual}</span>
                        </li>
                        <li className="profile-phone"><span>Phone:</span>
                            <span style={{ fontSize: '.85rem' }}>49 9 9169-6698</span>
                        </li>
                        <li className="profile-mail"><span>E-mail:</span>
                            <span style={{ fontSize: '.85rem' }}>elvisrfarias1@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </aside>

            <aside id="styles">
                <div className="container">
                    <h2>Languages and Tools</h2>
                    {dsLanguage.map(item => {
                        return <>
                            <ul className="features" key={item.id} >
                                <li style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
                                    <img src={item.image} style={{ width: "1rem" }} />
                                    <span>{item.text}</span>
                                </li>
                            </ul>
                        </>
                    })}
                </div>

            </aside>
        </>
    )
}

export default ConteudoLateral
