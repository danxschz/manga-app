import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  item: ListItem
}

const ListItem = (props: Props) => {
  const { type, id, score, work } = props.item;

  return (
    <article className={styles.item}>
      <Link to={`/${type}/${work.slug}`} state={{ id }}><img src={work.img} alt={work.title} /></Link>
      <Link to={`/${type}/${work.slug}`} state={{ id }} className={styles.title}>{work.title}</Link>
      <div className={styles.center}>{score}</div>
      <div className={styles.center}>{`${work.progress} / ${work.chapters}`}</div>
      <div className={styles.center}>{type}</div>
    </article>
  )
}

export default ListItem;
