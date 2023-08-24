import Home from "@/pages/App";
import {dsCard} from "@/data/dataSource";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Id = () => {
  const router = useRouter()
  const [card, setCard] = useState()

  useEffect(() => {
    const getId = +router.query.id
    if(!getId) return;
    setCard(getId)
  }, [router.query]);

  return (
    <Home>
      <h1>Meu card é a {card}</h1>
    </Home>
  )
}

export default Id;