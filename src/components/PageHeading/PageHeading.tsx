import styles from './PageHeading.module.scss';
import ButtonDark from '../ButtonDark/ButtonDark';

interface Props {
  img: string,
  alt?: string,
  title: string,
  home?: boolean,
  button?: boolean
}

const PageHeading = (props: Props) => {
  const { img, alt, title, home, button } = props;

  if (home) return (
    <div className={styles.title}>
      <img src={img} alt="" />
      <h1>
        <div className={styles.small}>The</div>
        <div>Horrors<span className={styles.small}> of</span></div>
        <div>Junji</div>
        <div>Ito</div>
      </h1>
    </div>
  )

  else if (button) return (
    <div className={styles.title}>
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <ButtonDark text="Add to list" />
    </div>
  )

  else return (
    <div className={styles.title}>
      <img src={img} alt="" />
      <h1>{title}</h1>
    </div>
  )
}

export default PageHeading;
