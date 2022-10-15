import styles from './MangaDetail.module.scss';
import manga from '../../data/manga';
import { useLocation } from 'react-router-dom';
import useDocTitle from '../../hooks/useDocTitle';
import PageHeading from '../../components/PageHeading/PageHeading';
import DataSet from './DataSet/DataSet';

const MangaDetail = () => {
  const { state } = useLocation();
  const id = state.id;
  const item = manga.find((i) => i._id === id);

  const { title, img, description, attributes } = item || {};
  const { chapters, volumes, status, year, demographic, content_rating, genres, alt_titles, links } = attributes || {};

  const docTitle = (title) ? title : 'Loading';
  useDocTitle(docTitle);

  if (title && img) return (
    <main>
      <div className={styles.content}>
        <PageHeading img={img} title={title} />
        <div className={styles.info}>
          <div className={styles.bar}>
            {(chapters) ? <DataSet property='Chapters' value={chapters} /> : null}
            {(volumes) ? <DataSet property='Volumes' value={volumes} /> : null}
            {(status) ? <DataSet property='Status' value={status} /> : null}
            {(year) ? <DataSet property='Year' value={year} /> : null}
            {(demographic) ? <DataSet property='Demographic' value={demographic} /> : null}
            {(content_rating) ? <DataSet property='Content Rating' value={content_rating} /> : null}
            {(genres && genres.length >= 1) ? <DataSet property='Genres' value={genres.join(', ')} /> : null}
            {(alt_titles && alt_titles.length >=1) ? <DataSet property='Alternative Titles' value={alt_titles.join(', ')} /> : null}
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </main>
  )

  else return null
}

export default MangaDetail;
