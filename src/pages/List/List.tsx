import styles from './List.module.scss';
import img from '../../assets/img/list.jpg';
import listSample from '../../data/list.json';
import useDocTitle from '../../hooks/useDocTitle';
import { useState } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import ListSection from './ListSection/ListSection';
import Button from '../../components/Button/Button';

const List = () => {
  const [list, setList] = useState<ListItem[]>(listSample);

  useDocTitle('My List');

  if (list.length) {
    const reading = list.filter((i) => i.status === 'reading');
    const completed = list.filter((i) => i.status === 'completed');
    const planning = list.filter((i) => i.status === 'planning');

    return (
      <main>
        <div className={styles.content}>
          <PageHeading title="My List" img={img} />
          {(reading.length) ? <ListSection status="reading" items={reading} /> : null}
          {(completed.length) ? <ListSection status="completed" items={completed} /> : null}
          {(planning.length) ? <ListSection status="planning" items={planning} /> : null}
        </div>
      </main>
    )
  }

  else return (
    <main>
      <div className={styles.content}>
        <PageHeading title="My List" img={img} />
        <div className={styles.empty}>
          <p>Your list is empty.</p>
          <Button text='Browse works' to="/manga" />
        </div>
      </div>
    </main>
  )
}

export default List;
