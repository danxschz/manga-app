import styles from './DecorCircle.module.scss';

const DecorCircle = () => {
  return (
    <div className={styles.circle}>
      <div>
        <div></div>
      </div>
      <div className={styles.line}></div>
    </div>
  )
}

export default DecorCircle;
