import styles from './Work.module.scss';
import Button from '../../../components/Button/Button';
import uzumaki from '../../../assets/img/uzumaki.png';
import uzumaki2 from '../../../assets/img/uzumaki2.jpg';
import tomie from '../../../assets/img/tomie.png';
import tomie2 from '../../../assets/img/tomie2.jpg';
import gyo from '../../../assets/img/gyo.png';
import gyo2 from '../../../assets/img/gyo2.jpg';

interface Works {
  [key: string]: {
    desc: string,
    img1: string,
    img2: string,
  }
}

const works: Works = {
  uzumaki: {
    desc: 'The series tells the story of the citizens of Kurouzu-cho, a fictional city which is plagued by a supernatural curse involving spirals.',
    img1: uzumaki,
    img2: uzumaki2,
  },
  tomie: {
    desc: 'Story centered on a mysterious, beautiful woman named Tomie Kawakami, who possesses an undisclosed power to make any man fall in love with her.',
    img1: tomie,
    img2: tomie2,
  },
  gyo: {
    desc: 'The story revolves around a couple, Tadashi and Kaori, as they fight to survive against a mysterious horde of undead fish with metal legs powered by an odor known as the "death stench".',
    img1: gyo,
    img2: gyo2,
  }
}

interface Props {
  title: string,
  inverted?: boolean
}

const Work = (props: Props) => {
  const { title, inverted } = props;
  const { desc, img1, img2 } = works[title];

  return (
    <div className={styles.work}>
      {(inverted) ? null : <img src={img1} alt="" />}
      <div className={styles.description}>
        <img src={img2} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        <Button text="View more"/>
      </div>
      {(inverted) ? <img src={img1} alt="" /> : null}
    </div>
  )
}

export default Work;
