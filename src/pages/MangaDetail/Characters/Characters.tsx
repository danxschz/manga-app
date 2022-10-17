import styles from './Characters.module.scss';

interface Props {
  characters: Character[]
}

const Characters = (props: Props) => {
  const { characters } = props;

  return (
    <div className={styles.characters}>
      {characters.slice(0, 10).map((item) => (
        <div className={styles.character} key={item.name}>
          <img src={item.img} alt={item.name} />
          <div className={styles.info}>
            <div>{item.name}</div>
            <div>{item.role}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters;
