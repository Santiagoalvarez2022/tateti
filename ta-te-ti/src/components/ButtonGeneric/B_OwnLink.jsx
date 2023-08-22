import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./B_OwnLink.module.css"

function B_OwnLink({text_link_b,link_b }) {
  return (
    <div>
        <Link  to={link_b}>
            <button className={style.button}>{text_link_b}</button>
        </Link>
    </div>
  )
}

B_OwnLink.propTypes = {
  text_link_b: PropTypes.string.isRequired,
  link_b: PropTypes.string.isRequired,
}

export default B_OwnLink
