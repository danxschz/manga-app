import styles from './ListSection.module.scss';
import ListItem from '../ListItem/ListItem';

interface Props {
  status: string,
  items: ListItem[],
}

const ListSection = (props: Props) => {
  const { status, items } = props;

  return (
    <section className={styles.section}>
      <h2>{status}</h2>
      <div className={styles.items}>
        <div className={styles.headings}>
          <div></div>
          <div>Title</div>
          <div className={styles.center}>Score</div>
          <div className={styles.center}>Progress</div>
          <div className={styles.center}>Type</div>
        </div>
        {items.map((item) => {
          return <ListItem item={item} completed={(status === 'completed') ? true : false} />
        })}
      </div>
    </section>
  )
}

export default ListSection;
