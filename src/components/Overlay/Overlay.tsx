import styles from './Overlay.module.scss';

interface Props {
  id: string,
  onClick?(): any,
}
const Overlay = (props: Props) => {
  const { id, onClick } = props;

  return <div id={id} className={styles.overlay} onClick={onClick}></div>
}

export default Overlay;
