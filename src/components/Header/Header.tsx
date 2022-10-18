import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import ButtonDark from '../ButtonDark/ButtonDark';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/manga">Manga</Link></li>
            <li><a href="adapt">Adaptations</a></li>
            <li><a href="about">About</a></li>
          </ul>
        </nav>
        <Link to="/" className={styles.logo}>Ito Horrors</Link>
        <ButtonDark text="Log in" />
      </div>
    </header>
  )
}

export default Header;
