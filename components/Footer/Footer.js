import React from 'react'
import styles from './../../styles/Footer.module.css'; // Assurez-vous de créer ce fichier CSS

function Footer() {
  return (
    <footer className={styles.Container}>
      <div className={styles.Container1}>
        <div>
          <p>Nom agence</p>
        </div>
        <div className={styles.Coordonnees}>
          <a>Mentions légales -</a>
          <a> 06 52 76 48 59 -</a>
          <a> paul.lavergne99@outlook.fr</a>
        </div>
        <div className={styles.CoordonneesMobile}>
          <div className={styles.Liens}>
            <a>Mentions légales</a>
            <a>06 52 76 48 59</a>
          </div>
          <div className={styles.Mail}>
            <a>paul.lavergne99@outlook.fr</a>
          </div>
        </div>
        <div className={styles.CoordonneesTab}>
          <div className={styles.Liens}>
            <a>Mentions légales</a>
            <a>06 52 76 48 59</a>
          </div>
          <div className={styles.Mail}>
            <a>paul.lavergne99@outlook.fr</a>
          </div>
        </div>
      </div>
      <div className={styles.Container2}>
        <div>
          <p>Nous suivre sur :</p>
        </div>
        <div className={styles.RS}>
          <a>Instagram -</a>
          <a> X (Twitter)</a>
        </div>
        <div className={styles.RSMobile}>
          <a>Instagram - </a>
          <a>&nbsp;X (Twitter)</a>
        </div>
        <div className={styles.RSTab}>
          <a>Instagram - </a>
          <a>&nbsp;X (Twitter)</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer