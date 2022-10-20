import styles from './ItemCard.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  item: Manga | Anime,
}

const ItemCard = (props: Props) => {
  const { item } = props;
  const { id, slug, title, img } = item;

  return (
    <article>
      <Link to={`${slug}`} state={{ id }} className={styles.item}>
        <img src={img.normal} alt={title} loading="lazy" />
        <h2>{title}</h2>
      </Link>
    </article>
  )
}

export default ItemCard;
