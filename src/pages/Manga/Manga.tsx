import styles from './Manga.module.scss';
import manga from '../../data/manga.json';
import img from '../../assets/img/manga.jpg';
import useDocTitle from '../../hooks/useDocTitle';
import PageHeading from '../../components/PageHeading/PageHeading';
import ItemCard from '../../components/ItemCard/ItemCard';

const Manga = () => {
  useDocTitle('Manga');
  
  return (
    <main>
      <div className={styles.content}>
        <PageHeading title="Manga Works" img={img} />
        <div className={styles.manga}>
          {manga.map((item) => {
            return <ItemCard item={item} key={item.id} />
          })}
        </div>
      </div>
    </main>
  )
}

export default Manga;
