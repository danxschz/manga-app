import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  item: ListItem,
  completed: boolean
}

const ListItem = (props: Props) => {
  const { item, completed } = props; 
  const { type, id, score, work } = item;

  return (
    <article className={styles.item}>
      <Link to={`/${type}/${work.slug}`} state={{ id }}><img src={work.img} alt={work.title} /></Link>
      <Link to={`/${type}/${work.slug}`} state={{ id }} className={styles.title}>{work.title}</Link>
      <div className={styles.center}>{score}</div>
      <div className={styles.center}>{(completed) ? work.chapters : `${work.progress} / ${work.chapters}`}</div>
      <div className={styles.center}>{type}</div>
    </article>
  )
}

export default ListItem;
