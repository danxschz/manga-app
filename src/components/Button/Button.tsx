import styles from './Button.module.scss';

interface Props {
  text: string,
  href?: string,
  onClick?(): null
}

const Button = (props: Props) => {
  const { text, href, onClick } = props;

  if (href) return (
    <a href={href} className={styles.button} onClick={onClick}>{text}</a>
  )

  else return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default Button;
