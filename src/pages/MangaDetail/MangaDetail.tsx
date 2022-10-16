import styles from './MangaDetail.module.scss';
import manga from '../../data/manga.json';
import { useLocation } from 'react-router-dom';
import useDocTitle from '../../hooks/useDocTitle';
import PageHeading from '../../components/PageHeading/PageHeading';
import DataSet from './DataSet/DataSet';
import Links from './Links/Links';

const MangaDetail = () => {
  const { state } = useLocation();
  const id = state.id;
  const item = manga.find((i: Manga) => i._id === id);

  const { title, img, synopsis, attributes } = item || {};
  const { chapters, volumes, status, published, demographics, content_rating, genres, alt_titles, links } = attributes || {};

  const docTitle = (title) ? title : 'Loading';
  useDocTitle(docTitle);

  if (title && img) return (
    <main>
      <div className={styles.content}>
        <PageHeading img={img.large} title={title} />
        <div className={styles.info}>
          <div className={styles.column}>
            {(chapters) ? <DataSet property='Chapters' value={chapters} /> : null}
            {(volumes) ? <DataSet property='Volumes' value={volumes} /> : null}
            {(status) ? <DataSet property='Status' value={status} /> : null}
            {(published) ? <DataSet property='Published' value={published} /> : null}
            {(demographics && demographics.length) ? <DataSet property='Demographics' value={demographics.join(', ')} /> : null}
            {(content_rating) ? <DataSet property='Content Rating' value={content_rating} /> : null}
            {(genres && genres.length) ? <DataSet property='Genres' value={genres.join(', ')} /> : null}
            {(alt_titles && alt_titles.length) ? <DataSet property='Alternative Titles' value={alt_titles.join(', ')} /> : null}
            {(links && Object.keys(links).length) ? <Links links={links} /> : null}
          </div>
          <div className={styles.description}>{synopsis}</div>
        </div>
      </div>
    </main>
  )

  else return null
}

export default MangaDetail;
