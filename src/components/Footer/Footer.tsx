import styles from './Footer.module.scss';
import image from '../../assets/works/n.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>Copyright © 2022 Ito Horrors</p>
        <img src={image} alt="" />
      </div>
    </footer>
  )
}

export default Footer;
