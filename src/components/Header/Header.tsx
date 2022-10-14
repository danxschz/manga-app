import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

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
        <button className={styles.button}><div className={styles.square}></div><span>My list</span><div className={styles.square}></div></button>
      </div>
    </header>
  )
}

export default Header;
