import styles from './Reviews.module.scss';
import ButtonDark from '../../../components/ButtonDark/ButtonDark';

const toggleText = (e: React.MouseEvent<HTMLButtonElement>) => {
  const parentDiv = e.currentTarget.parentElement;
  const dots: HTMLElement | null | undefined = parentDiv?.querySelector('.dots');
  const moreText: HTMLElement | null | undefined = parentDiv?.querySelector('.hidden');
  const buttonText = e.currentTarget.querySelector('.text');

  if (dots && moreText && buttonText) {
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      buttonText.textContent = 'Show more';
      moreText.style.display = 'none';

    } else {
      dots.style.display = 'none';
      buttonText.textContent = 'Show less';
      moreText.style.display = 'inline';
    }
  }
}

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
          <p>
            <span>{item.review.slice(0, 600)}</span>
            <span className="dots">...</span>
            <span className="hidden">{`${item.review.slice(600)}\n\nReviewer's rating: ${item.rating}`}</span>
          </p>
          <ButtonDark text="Show more" onClick={toggleText}/>
        </div>
      ))}
    </div>
  )
}

export default Reviews;
