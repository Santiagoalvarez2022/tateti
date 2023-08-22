
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Desarrollado por Santiago Alvarez</p>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
        <p>Visita el <a href="https://github.com/Santiagoalvarez2022/tateti">repositorio en GitHub</a></p>
      </div>
    </footer>
    
  )
}

export default Footer