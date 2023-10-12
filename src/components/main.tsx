import Link from 'next/link'
import Portifolio from './portifolio'
import { IDataSource } from './types'
import ConteudoLateral from './conteudoLateral'
import { getDataSource } from '../data/DataSource'
import React, { useEffect, useState } from 'react'

const Main = () => {
    const [dataSource, setDataSources] = useState<IDataSource[]>([]);

    useEffect(() => {
        async function verificarDataSource() {
            const data = await getDataSource();
            setDataSources(data);
        }

        verificarDataSource();
    }, []);

    return (
        <>
            <main id="main" tabIndex={-1}>
                <div className="container">

                    <article id="about">
                        <section className="container">
                            <h2>About me</h2>
                            <p>🧑🏽‍💻 I currently work as a junior software developer at Raster.</p>
                            <p>{`
                                I got to know many cultures and did many things, I believe that the biggest life lesson I have is that there is no free lunch and that consistency in something you love to do is the big secret to success. It may sound clich, but it's making me a better person every day.
                            `}
                            </p>
                        </section>
                    </article>

                    <article id="repositoryGit">
                        <section className="container">
                            <h2>My GitHub repositories</h2>
                            <p>🗂️I will list my repositories that were created with several different languages.</p>
                            <p>Some examples of modern CSS include:</p>
                            <ul>
                                {dataSource.map(item => {
                                    return (
                                        <div style={{ display: "grid", margin: ".5rem" }} key={item.id}>
                                            <Link href={item.html_url} target="_black" className="link-support">
                                                <li style={{ fontSize: "1.2rem" }}>{item.name}</li>
                                                <span>Language: {item.language}</span>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </ul>
                        </section>
                    </article>

                    <article id="project" style={{ width: "calc(100% + 330px)" }}>
                        <Portifolio />
                    </article>
                </div>
            </main>

            <ConteudoLateral />
        </>
    )
}

export default Main;
