import animeFull from '../data/animeFull.json';
import animeCharacters from '../data/animeCharacters.json';
import animeReviews from '../data/animeReviews.json';
import mangaFull from '../data/mangaFull.json';

const slugify = (string: string) => {
  const slug = string
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');

  return slug
}

const createAnimeList = () => {
  const animeList = []

  let i = 0
  for (const item of animeFull) {
    const data = item.data;

    const { mal_id, title, title_english, images, synopsis, background, relations } = data;

    const slug = slugify(title_english || title);

    const imageObj = {
      normal: images.jpg.image_url,
      large: images.jpg.large_image_url
    }

    const relationsArr: any = [];
    for (const item of relations) {
      const id = item.entry[0].mal_id;
      const type = item.entry[0].type;
      const entry = (type === 'manga') ? mangaFull.find((i) => i.data.mal_id === id) : animeFull.find((i) => i.data.mal_id === id);

      if (entry) {
        const title = entry.data.title_english || entry.data.title;

        const relation = {
          id,
          title,
          relation: item.relation,
          url: `/${type}/${slugify(title)}`
        }
  
        relationsArr.push(relation);
      }
    }

    const characters: any = [];
    for (const item of animeCharacters[i].data) {
      const { character, role, voice_actors } = item;

      const voice_actor = (voice_actors.length) ? {
        name: voice_actors[0].person.name,
        language: voice_actors[0].language,
        img : voice_actors[0].person.images.jpg.image_url,
      } : null

      const charObj = {
        name: character.name,
        role,
        img: character.images.jpg.image_url,
        voice_actor,
      }

      characters.push(charObj);
    }

    const reviews: any = [];
    for (const item of animeReviews[i]) {
      const { username, date, review, rating } = item;

      const reviewObj = {
        username,
        date,
        review,
        rating,
      }

      reviews.push(reviewObj);
    }

    const { type, episodes, status, aired, studios, source, genres, demographics, title_synonyms, duration, rating, external, trailer } = data;

    const studiosArr: string[] = [];
    for (const item of studios) {
      studiosArr.push(item.name);
    }

    const genresArr: string[] = [];
    for (const item of genres) {
      genresArr.push(item.name);
    }

    const demographicsArr: string[] = [];
    for (const item of demographics) {
      demographicsArr.push(item.name);
    }

    const animeLinks: any = {
      mal: `https://myanimelist.net/anime/${mal_id}`,
      trailer: (trailer.url) ? trailer.url : null,
    }
    for (const item of external) {
      animeLinks[item.name.toLowerCase().replaceAll(' ', '_')] = item.url;
    }

    const attributes = {
      type,
      episodes,
      status,
      aired: aired.string,
      studios: studiosArr,
      source,
      genres: genresArr,
      demographics: demographicsArr,
      alt_titles: title_synonyms,
      duration,
      rating,
      links: animeLinks
    }

    const anime = {
      id: mal_id,
      slug,
      title: title_english || title,
      img: imageObj,
      synopsis,
      background,
      relations: relationsArr,
      characters,
      reviews,
      attributes,
    };

    animeList.push(anime);
    i += 1;
  }
  
  console.log(animeList);
}

export default createAnimeList;
