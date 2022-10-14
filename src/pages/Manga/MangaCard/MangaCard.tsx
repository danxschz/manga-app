import styles from './MangaCard.module.scss';
import type { Manga } from '../../../data/manga';
import { Link } from 'react-router-dom';

interface Props {
  item: Manga,
}

const MangaCard = (props: Props) => {
  const { _id, slug, title, img } = props.item;

  return (
    <article>
      <Link to={`/manga/${slug}`} state={{ id: _id }} className={styles.manga}>
        <img src={img} alt={title} loading="lazy" />
        <h2>{title}</h2>
      </Link>
    </article>
  )
}

export default MangaCard;
