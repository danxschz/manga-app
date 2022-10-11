import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <ul>
            <li><a href="manga">Manga</a></li>
            <li><a href="adapt">Adaptations</a></li>
            <li><a href="about">About</a></li>
          </ul>
        </nav>
        <a href="home" className={styles.logo}>Ito Horrors</a>
        <button className={styles.button}><div className={styles.square}></div><span>My list</span><div className={styles.square}></div></button>
      </div>
    </header>
  )
}

export default Header;
