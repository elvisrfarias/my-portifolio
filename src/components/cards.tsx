import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import {dsCard} from "@/data/dataSource";
import {DataSourceCard} from "@/components/types";

const Cards = () => {

  return (
      <div>
        <ul className="box-portifolio">

          {dsCard.map((item: DataSourceCard, index:number) => (
            <div className='card' key={item.id}>
              <h3>{item.title}</h3>
              <li className='box-image'>
                <Link href={`/portifolio/${index}`} >
                  <Image src={item.imagem} alt={item.title} width={200} height={250} quality={100} priority={true}/>
                </Link>
              </li>
            </div>
          ))};

        </ul>
      </div>
  )
}

export default Cards;
