import styles from './Reviews.module.scss';

interface Props {
  reviews: Review[]
}

const Reviews = (props: Props) => {
  const { reviews } = props;

  return (
    <div className={styles.reviews}>
      {reviews.map((item) => (
        <div className={styles.review} key={item.username}>
          <div className={styles.username}>
            <strong>{item.username}</strong>
            <div className={styles.date}>{item.date}</div>
          </div>
          <p>{item.review}</p>
          <div className={styles.rating}>Reviewer's Rating: <strong>{item.rating}</strong></div>
        </div>
      ))}
    </div>
  )
}

export default Reviews;
