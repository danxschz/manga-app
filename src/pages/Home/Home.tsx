import styles from './Home.module.scss';
import hero from '../../assets/img/hero.jpg';
import info from '../../assets/img/info.png';
import useDocTitle from '../../hooks/useDocTitle';
import PageHeading from '../../components/PageHeading/PageHeading';
import Button from '../../components/Button/Button';
import DecorCircle from './DecorCircle/DecorCircle';
import Work from './Work/Work';
import createMangaList from '../../utils/createMangaList';

const Home = () => {
  useDocTitle();

  return (
    <main>
      <section className={styles.hero}>
        <PageHeading img={hero} title="home" home />
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
              <Button text="Ito's Works" onClick={createMangaList}/>
            </div>
            <DecorCircle />
            <div className={styles.text}></div>
          </div>
          <img src={info} alt="" />
        </div>
      </section>
      <section className={styles.works}>
        <Work title="tomie"/>
        <Work title="uzumaki" inverted/>
        <Work title="gyo" />
      </section>
    </main>
  )
}

export default Home
