import styles from './Links.module.scss';

interface Props {
  links: {
    [key: string]: string | null
  },
}

const Links = (props: Props) => {
  const { links } = props;

  return (
    <div className={styles.data}>
      <div className={styles.property}>Links</div>
      <div className={styles.content}>
      {Object.entries(links).map(([key, value]) => {
        if (value) return <a href={value} target="_blank" rel="noreferrer" key={key}>{key}</a>;
        else return null
      })}
      </div>
    </div>
  )
}

export default Links;
