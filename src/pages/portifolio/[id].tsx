import Home from "@/pages/App";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Id = () => {
    const router = useRouter();
    const [card, setCard] = useState<any>(null);

    useEffect(() => {
        if (!router.query.id) return;
        let getId: number = Number(router.query.id);
        console.log(getId)
        if (!getId) return;


        // Encontrar o cartão correspondente ao ID da rota usando filter
       // const foundCards: IDataSourceCard[] = dsCard.filter(item => item.id === getId);

        // if (!foundCards) return;
        // +foundCards
        // if (foundCards.length >= 0) {
        //     setCard(foundCards[0]); // Assumindo que não há IDs duplicados
        // }
    }, [router.query]);

    return (
        <Home>
            {card ? (
                <div className='card' key={card.id}>
                    <h3>{card.title}</h3>
                    <li className='box-image'>
                        <Image
                            src={card.imagem}
                            alt={card.title}
                            width={200}
                            height={250}
                            quality={100}
                            priority={true}
                        />
                    </li>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </Home>
    );
};

export default Id;
