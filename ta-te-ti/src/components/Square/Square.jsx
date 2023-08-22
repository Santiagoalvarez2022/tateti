import PropTypes from "prop-types";
import style from "./Square.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faX,faO } from '@fortawesome/free-solid-svg-icons'

export default function Square(props) {
    const {value, index, handlerSquare} = props;
    const content = value?? "";
    
    
    return(
        <div className={style.square} onClick={()=>handlerSquare(index)}  > 
            <h2 className={style.turn}>
                {
                    content === "" 
                        ? content 
                        : content 
                            ? <FontAwesomeIcon icon={faX} className={style.Icon} />
                            :  <FontAwesomeIcon icon={faO} className={style.Icon} />

                }
            </h2>
        </div>
    )

   
}

Square.propTypes = {
    index: PropTypes.number.isRequired,
    handlerSquare:PropTypes.func,
    value:PropTypes.bool

}

  // <div onClick={()=>handlerSquare(index)} style={{background:"#646cffaa",width:"50px", height:"50px", border:"1px solid black"}}>
    //     {
    //         value ? "x" : "o"
    //     }
    //     {index}
    // </div>