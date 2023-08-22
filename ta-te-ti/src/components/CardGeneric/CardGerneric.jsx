import B_OwnLink from "../ButtonGeneric/B_OwnLink"
import PropTypes from "prop-types";
import style from "./Card.module.css"


function CardGerneric({title,text,text_link_b,link_b }) {
  return (
    <div className={` ${style.container}`}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
        <div className={style.buttom} >
          {link_b &&<B_OwnLink text_link_b={text_link_b} link_b={link_b}/>}

        </div>
    </div>
  )
}

CardGerneric.propTypes = {
  title:PropTypes.string.isRequired,
  text:PropTypes.string.isRequired,
  text_link_b:PropTypes.string.isRequired,
  link_b:PropTypes.string.isRequired,
}

export default CardGerneric
