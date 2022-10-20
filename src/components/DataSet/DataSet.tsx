import styles from './DataSet.module.scss';

interface Props {
  property: string,
  value: string | number,
}

const DataSet = (props: Props) => {
  const { property, value } = props;

  return (
    <div className={styles.data}>
      <div className={styles.property}>{property}</div>
      <div className={styles.value}>{value}</div>
    </div>
  )
}

export default DataSet;
