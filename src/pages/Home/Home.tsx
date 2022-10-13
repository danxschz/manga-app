import styles from './Home.module.scss';
import hero from '../../assets/img/hero.jpg';
import info from '../../assets/img/info.png';
import DecorCircle from './DecorCircle/DecorCircle';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.title}>
          <img src={hero} alt="" />
          <h1>
            <div className={styles.small}>The</div>
            <div>Horrors<span className={styles.small}> of</span></div>
            <div>Junji</div>
            <div>Ito</div>
          </h1>
        </div>
        <div className={styles.info}>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                Junji Ito is a Japanese horror mangaka. His work has developed a substantial following, with some 
                deeming him a significant figure in recent horror iconography.
              </p>
              <p>
                Some of his most notable works include Tomie, a series chronicling an immortal girl who drives her 
                admirers to madness; Uzumaki, a series about a town obsessed with spirals; and Gyo, a story in 
                which fish are controlled by a strain of sentient bacteria.
              </p>
              <Button text="View more" />
            </div>
            <DecorCircle />
            <div className={styles.text}></div>
          </div>
          <img src={info} alt="" />
        </div>
      </section>
    </main>
  )
}

export default Home
