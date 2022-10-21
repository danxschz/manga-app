import styles from './MobileNav.module.scss';
import { closeNav } from './openNav';
import { Link } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import img from '../../assets/img/nav.png';

const MobileNav = () => {
  return (
    <div className={styles['mobile-nav']}>
      <Overlay id="overlay-nav" onClick={closeNav} />
      <nav id="nav" className={styles.nav}>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>Ito Horrors</Link>
          <ul>
            <li><Link to="/manga">Manga</Link></li>
            <li><Link to="/anime">Anime</Link></li>
            <li><Link to="/my-list">My List</Link></li>
          </ul>
        </div>
        <img src={img} alt="" />
      </nav>
    </div>
  )
}

export default MobileNav;
