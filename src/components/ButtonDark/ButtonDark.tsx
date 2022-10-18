import styles from './ButtonDark.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  text: string,
  to?: string,
  onClick?(): any
}

const ButtonDark = (props: Props) => {
  const { text, to, onClick } = props;

  if (to) return (
    <Link to={to} className={styles.button} onClick={onClick}>
      <div className={styles.square}></div>
      <div>{text}</div>
      <div className={styles.square}></div>
    </Link>
  )

  else return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.square}></div>
      <div>{text}</div>
      <div className={styles.square}></div>
    </button>
  )
}

export default ButtonDark;
