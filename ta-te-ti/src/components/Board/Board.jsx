import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Square from '../Square/Square'
import { checkWin,freeSquare,loadDataFromLocalStorage } from './logic'
import style from "./Board.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate , faX,faO,faFontAwesome} from '@fortawesome/free-solid-svg-icons'

import Modal from '../Modal/Modal'

function Board({amount_square}) {
    //initial states
    const [turn,setTurn] = useState(true)
    const [finish,setFinish] = useState(false)
    const [stateBoard,setStateBoard] = useState(Array(amount_square).fill({value:null}));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [msgModal,setMsgModal] = useState("¡Felicidades!")

  
    useEffect(()=>{
        //obetngo lo que hay en el local storage
        const data = loadDataFromLocalStorage(amount_square);
        if(data){
            setStateBoard(data)
            //si habia data ver si alguien habia ganado 
            const flag = window.localStorage.getItem('flag');
            if(flag) {
                setFinish(flag)
                resetgame()
            }
            return
        }  
    },[])

    
     
    
    //persitencia en el localstorage
    const handlerSquare = (index) =>{
        //evaluo si ese square esta vacio
        if (stateBoard[index].value===null && !finish) {
            //creo el nuevo estado modificado el valor de square deacuerdo con el turno 
            const newState = stateBoard.fill({value:turn},index,index+1)
            setTurn(!turn)
            setStateBoard(newState)
            const flag = checkWin(stateBoard, turn,index)
          
            //evaluo si no hay combinacion ganadora
            if(flag) {
                setFinish(flag)
                setIsModalOpen(true);
                window.localStorage.setItem("flag",JSON.stringify(flag))
                return 
            }else if (!flag) {
                //evaluo si quedan espacios libres
                const freeSquare2 = freeSquare(newState);
                console.log("hay espacios libres", freeSquare2);
                if (!freeSquare2) {
                    console.log("no quedan espacioss");
                    setMsgModal("Empate")
                    setIsModalOpen(true);

                    return    
                }
            }
            window.localStorage.setItem("myData",JSON.stringify(newState))
        }
    }

    const resetgame = () => {
        window.localStorage.removeItem("myData")
        window.localStorage.removeItem("flag")
        setStateBoard(Array(amount_square).fill({value:null}))
        setTurn(true)
        setFinish(false)
        setIsModalOpen(false);
        setMsgModal("¡Felicidades!")
    }


    return (
        <div className={style.container}>
            <div className={style.board}> 
                {   stateBoard.map((square,index)=>{
                        return <Square  
                            key={index} 
                            value={square.value}
                            index={index}
                            handlerSquare={handlerSquare}
                        />
                    }) 
                    

            
                }
            
            </div>
            <div className={style.containerIcon} onClick={()=>resetgame()}>
                <FontAwesomeIcon icon={faArrowsRotate} className={style.reloadIcon} />
            </div>
          
            <Modal isOpen={isModalOpen} onClose={resetgame} winplayer={
                msgModal === "¡Felicidades!" 
                ? !turn ? faX : faO
                : faFontAwesome
                }>
                <h2>{msgModal}</h2>
            </Modal>
        </div>
    )
}







Board.propTypes = {
    amount_square:PropTypes.number.isRequired
}

export default Board
