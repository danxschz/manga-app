import styles from './Characters.module.scss';

interface Props {
  characters: Character[]
}

const Characters = (props: Props) => {
  const { characters } = props;

  return (
    <div className={styles.characters}>
      {characters.slice(0, 10).map((item) => {
        const { name, role, img, voice_actor } = item;

        const actor = (voice_actor) ? (
          <div className={styles.actor}>
            <div className={styles.info}>
              <div>{voice_actor.name}</div>
              <div>{voice_actor.language}</div>
            </div>
            <img src={voice_actor.img} alt={voice_actor.name} />
          </div>
        ) : null;

        return (
          <div className={styles.character} key={name}>
            <div>
              <img src={img} alt={name} />
              <div className={styles.info}>
                <div>{name}</div>
                <div>{role}</div>
              </div>
            </div>
            {actor}
          </div>
        )
      })}
    </div>
  )
}

export default Characters;
