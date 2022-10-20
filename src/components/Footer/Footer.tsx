import styles from './Footer.module.scss';
import footer from '../../assets/img/footer.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p><span>Copyright </span>© 2022 Ito Horrors</p>
      </div>
      <img src={footer} alt="" />
    </footer>
  )
}

export default Footer;
