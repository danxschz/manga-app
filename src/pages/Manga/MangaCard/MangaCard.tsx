import styles from './MangaCard.module.scss';
import type { Manga } from '../../../data/manga';
import { Link } from 'react-router-dom';

interface Props {
  item: Manga,
}

const MangaCard = (props: Props) => {
  const { _id, title, img } = props.item;

  return (
    <article>
      <Link to={`/manga/${_id}`} className={styles.manga}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
      </Link>
    </article>
  )
}

export default MangaCard;
