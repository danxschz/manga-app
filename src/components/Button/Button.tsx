import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  text: string,
  to?: string,
  id?: number,
  onClick?(): any,
}

const Button = (props: Props) => {
  const { text, to, id, onClick } = props;

  if (to) return (
    <Link to={to} state={{ id }} className={styles.button} onClick={onClick}>{text}</Link>
  )

  else return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default Button;
