import styles from './Links.module.scss';

interface Props {
  links: {
    [key: string]: string | null | undefined,
  },
}

const Links = (props: Props) => {
  const { links } = props;

  return (
    <div className={styles.data}>
      <div className={styles.property}>Links</div>
      <div className={styles.content}>
      {Object.entries(links).map(([key, value]) => {
        if (value) return <a href={value} target="_blank" rel="noreferrer" key={key}>{key.replace('_', ' ')}</a>;
        else return null
      })}
      </div>
    </div>
  )
}

export default Links;
