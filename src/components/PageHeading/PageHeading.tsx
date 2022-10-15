import styles from './PageHeading.module.scss';

interface Props {
  img: string,
  title: string,
  home?: boolean
}

const PageHeading = (props: Props) => {
  const { img, title, home } = props;

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

  else return (
    <div className={styles.title}>
      <img src={img} alt="" />
      <h1>{title}</h1>
    </div>
  )
}

export default PageHeading;
