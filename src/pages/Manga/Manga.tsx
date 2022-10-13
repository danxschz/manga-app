import styles from './Manga.module.scss';
import manga from '../../data/manga';
import MangaCard from './MangaCard/MangaCard';

const Manga = () => {
  return (
    <main>
      <div className={styles.content}>
        <div className={styles.manga}>
          {manga.map((item) => {
            return <MangaCard item={item} key={item._id} />
          })}
        </div>
      </div>
    </main>
  )
}

export default Manga;
