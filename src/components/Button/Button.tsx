import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  text: string,
  to?: string,
  onClick?(): any
}

const Button = (props: Props) => {
  const { text, to, onClick } = props;

  if (to) return (
    <Link to={to} className={styles.button} onClick={onClick}>{text}</Link>
  )

  else return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default Button;
