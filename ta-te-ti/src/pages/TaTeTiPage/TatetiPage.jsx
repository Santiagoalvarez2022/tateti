import Board from "../../components/Board/Board";
import style from "./Tateti.module.css"


export default function TatetiPage() {
  return (
    <div  className={style.page} >
      <Board amount_square={9} />
    </div>
  )
}
