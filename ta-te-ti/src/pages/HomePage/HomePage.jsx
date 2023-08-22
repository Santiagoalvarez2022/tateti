import {game_data} from "../../data"
import CardGeneric from "../../components/CardGeneric/CardGerneric"
import style from "./Home.module.css"
import { useState } from "react"



export default function HomePage() {
  //estado que uarda el indice del juego a renderizar
  const [game,setGame] = useState(0);
  const [otherGame, setOtherGame] = useState("Cautro en Linea")
  const handlerGame = () =>{
    game === 0 
      ? (
        setGame(1),
        setOtherGame("tateti")
        )
      : (
        setGame(0),
        setOtherGame("4 En linea")
        )
  }
  

  return (
    <div className={style.page}>
      <div className={style.container}>
        <h1 className={style.title}>Bienvenido! Elige un juego y diviertete con tus amigos.</h1>

        <div className={style.containerCards}>
          {
            game_data.length
            ? <CardGeneric 
            key={game_data[game].index}
            title={game_data[game].title}
            text={game_data[game].text}
            text_link_b="Jugar"
            link_b={game_data[game].link_b} />
            : null 
          }
        </div>
        <div className={style.switchButton}>
          <h3 className={style.msg}> Proximamente vendran nuevos juegos </h3>
          {/* <button  className={style.btn} onClick={()=>handlerGame()}> {otherGame} </button> */}
        </div>
      </div>
    </div>
  )
}

/* 

 game_data.map((game,index)=>{
                return <CardGeneric 
                  key={index}
                  title={game.title}
                  text={game.text}
                  text_link_b="Jugar"
                  link_b={game.link_b}

                />

<div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">FRONT SIDE</p>
                <p>Hover Me</p>
            </div>
            <div class="backSide">
                <p class="title">BACK SIDE</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div>
    
     <div className={style.innerCard}>
                    <CardGeneric 
                    clas = "frontSide"
                    key={1}
                    title={game_data[0].title}
                    text={game_data[0].text}
                    text_link_b="Jugar"
                    link_b={game_data[0].link_b} />
                    <CardGeneric
                    clas = "backSide" 
                    key={2}
                    title={game_data[1].title}
                    text={game_data[1].text}
                    text_link_b="Jugar"
                    link_b={game_data[1].link_b} />
                </div>
    
    
    */
