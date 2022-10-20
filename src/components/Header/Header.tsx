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
            <li><Link to="/anime">Anime</Link></li>
            <li><Link to="/my-list">My List</Link></li>
          </ul>
        </nav>
        <Link to="/" className={styles.logo}>Ito Horrors</Link>
        <ButtonDark text="Log in" />
        <button className={styles.button}><i className="fa-solid fa-bars"></i></button>
      </div>
    </header>
  )
}

export default Header;
