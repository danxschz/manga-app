import styles from './MangaCard.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  item: Manga,
}

const MangaCard = (props: Props) => {
  const { id, slug, title, img } = props.item;

  return (
    <article>
      <Link to={`/manga/${slug}`} state={{ id }} className={styles.manga}>
        <img src={img.normal} alt={title} loading="lazy" />
        <h2>{title}</h2>
      </Link>
    </article>
  )
}

export default MangaCard;
