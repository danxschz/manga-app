import styles from './Relations.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  relations: Relation[]
}

const Relations = (props: Props) => {
  const { relations } = props;

  return (
    <div className={styles.relations}>
      {relations.map((item) => (
        <div className={styles.relation} key={item.id}>
          <span>{`${item.relation}:`}</span>
          <Link to={item.url} state={{ id: item.id }}>{item.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default Relations;
