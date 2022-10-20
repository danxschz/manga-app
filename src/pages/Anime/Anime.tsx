import styles from './Anime.module.scss';
import anime from '../../data/anime.json';
import img from '../../assets/img/anime.webp';
import useDocTitle from '../../hooks/useDocTitle';
import PageHeading from '../../components/PageHeading/PageHeading';
import ItemCard from '../../components/ItemCard/ItemCard';

const Anime = () => {
  useDocTitle('Anime');
  
  return (
    <main>
      <div className={styles.content}>
        <PageHeading title="Anime Works" img={img} />
        <div className={styles.anime}>
          {anime.map((item) => {
            return <ItemCard item={item} key={item.id} />
          })}
        </div>
      </div>
    </main>
  )
}

export default Anime;
