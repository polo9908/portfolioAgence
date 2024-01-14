import React from 'react'
import Link from 'next/link';
import styles from './../../styles/Header.module.css'; // Assurez-vous de créer ce fichier CSS
import { useRouter } from 'next/router';
import HomeIcon from "./../../icons/HomeIcon"
import InfoIcon from "./../../icons/InfoIcon"
import ServiceIcon from "./../../icons/ServiceIcon"
import WorkIcon from "./../../icons/WorkIcon"

const Header = ({ backgroundColor, linkColor, iconAirbus }) => {
    const router = useRouter();

    const handleScrollToSection = (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        router.push('/#realisations'); // Change l'URL sans recharger la page

        // Vérifier si la section existe sur la page actuelle
        if (router.pathname === '/') {
        const section = document.querySelector('.Sections'); // Utiliser le sélecteur de classe CSS de la section
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Défiler vers la section
        }
        } else {
        // Redirection vers la page d'accueil si l'utilisateur n'est pas déjà dessus
        router.push('/#realisations');
        }
    };
    
  return (
    <header className={styles.header} style={{ backgroundColor}}>
      <nav className={styles.navbar}>
        <Link href="/" style={{ color: linkColor }}>
          <HomeIcon color={iconAirbus} />
          Accueil
        </Link>
        <a href="/#realisations" onClick={handleScrollToSection} style={{ color: linkColor }}>
          <WorkIcon color={iconAirbus}/>
          Réalisations
        </a>
        <Link href="/services" style={{ color: linkColor }}>
          <ServiceIcon color={iconAirbus}/>
          Services
        </Link>
        <Link href="/apropos" style={{ color: linkColor }}>
          <InfoIcon color={iconAirbus} />
          À propos
        </Link>  
      </nav>
    </header>
  );
};

export default Header;

  