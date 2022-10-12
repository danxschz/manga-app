import styles from './Home.module.scss';
import image from '../../assets/works/lole.jpg'

const Home = () => {
  return (
    <main>
      <section className={styles.hero}>
        <img src={image} alt="" />
        <h1>
          <div className={styles.small}>The</div>
          <div>Horrors<span className={styles.small}> of</span></div>
          <div>Junji</div>
          <div>Ito</div>
        </h1>
      </section>
    </main>
  )
}

export default Home
