import styles from './Modal.module.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
const Modal = ({ isOpen, onClose, children, winplayer }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          {children}
          <FontAwesomeIcon className={styles.winplayer} icon={winplayer} />
        </div>
        <div  className={styles.buttons}>
          <Link   className={styles.btnBack}  to="/">Salir</Link>
          <button className={styles.btnReload} onClick={()=>onClose()}>Volver a Juagar </button>
        </div>
      </div>
    </div>
  );
}; 


Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose:PropTypes.func,
    children:PropTypes.element,
    
  winplayer:  PropTypes.object
}
export default Modal;
