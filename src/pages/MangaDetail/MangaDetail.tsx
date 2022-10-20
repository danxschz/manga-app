import styles from './MangaDetail.module.scss';
import manga from '../../data/manga.json';
import { useLocation } from 'react-router-dom';
import useDocTitle from '../../hooks/useDocTitle';
import PageHeading from '../../components/PageHeading/PageHeading';
import DataSet from '../../components/DataSet/DataSet';
import Links from '../../components/Links/Links';
import Relations from '../../components/Relations/Relations';
import Characters from '../../components/Characters/Characters';
import Reviews from '../../components/Reviews/Reviews';

const MangaDetail = () => {
  const { state } = useLocation();
  const id = state.id;
  const item: Manga | undefined = manga.find((i) => i.id === id);

  const { title, img, synopsis, background, relations, characters, reviews, attributes } = item || {};
  const { chapters, volumes, status, published, genres, demographics, alt_titles, rating, links } = attributes || {};

  const docTitle = (title) ? title : 'Loading';
  useDocTitle(docTitle);

  if (title && img) return (
    <main>
      <div className={styles.content}>
        <PageHeading img={img.large} title={title} button />
        <div className={styles.info}>
          <div className={styles.column}>
            {(chapters) ? <DataSet property='Chapters' value={chapters} /> : null}
            {(volumes) ? <DataSet property='Volumes' value={volumes} /> : null}
            {(status) ? <DataSet property='Status' value={status} /> : null}
            {(published) ? <DataSet property='Published' value={published} /> : null}
            {(genres && genres.length) ? <DataSet property={(genres.length > 1) ? 'Genres' : 'Genre'} value={genres.join(', ')} /> : null}
            {(demographics && demographics.length) ? <DataSet property={(demographics.length > 1) ? 'Demographics' : 'Demographic'} value={demographics.join(', ')} /> : null}
            {(alt_titles && alt_titles.length) ? <DataSet property='Alternative Titles' value={alt_titles.join(', ')} /> : null}
            {(rating) ? <DataSet property='Rating' value={rating} /> : null}
            {(links && Object.keys(links).length) ? <Links links={links} /> : null}
          </div>
          <div className={styles.main}>
            <div className={styles.section}>
              <h2>Synopsis</h2>
              <p>{(synopsis) ? synopsis : 'No synopsis information is available for this title.'}</p>
            </div>
            <div className={styles.section}>
              <h2>Background</h2>
              <p>{(background) ? background : 'No background information is available for this title.'}</p>
            </div>
            {(relations && relations.length) ?
              <div className={styles.section}>
                <h2>Related Titles</h2>
                <Relations relations={relations} />
              </div>
            : null}
            <div className={styles.section}>
              <h2>Characters</h2>
              {(characters && characters.length) ? <Characters characters={characters} /> : <p>No character information is available for this title.</p>}
            </div>
            <div className={styles.section}>
              <h2>Reviews</h2>
              {(reviews && reviews.length) ? <Reviews reviews={reviews} /> : <p>No reviews have been submitted for this title.</p>}
            </div>
          </div>
        </div>
      </div>
    </main>
  )

  else return null
}

export default MangaDetail;
