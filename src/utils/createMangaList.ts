import mangaFull from '../data/mangaFull.json';
import mangaComplement from '../data/mangaComplement.json';
import mangaCharacters from '../data/mangaCharacters.json';
import mangaReviews from '../data/mangaReviews.json';
import animeFull from '../data/animeFull.json';

const slugify = (string: string) => {
  const slug = string
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');

  return slug
}

const createMangaList = () => {
  const mangaList = []

  let i = 0
  for (const item of mangaFull) {
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
      const entry = (type === 'manga') ? mangaFull.find((i) => i.data.mal_id === id) : animeFull.find((i) => i.data.mal_id === id) ;

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
    for (const item of mangaCharacters[i].data) {
      const { character, role } = item;

      const charObj = {
        name: character.name,
        role,
        img: character.images.jpg.image_url,
      }

      characters.push(charObj);
    }

    const reviews: any = [];
    for (const item of mangaReviews[i]) {
      const { username, date, review, rating } = item;

      const reviewObj = {
        username,
        date,
        review,
        rating,
      }

      reviews.push(reviewObj);
    }

    const { chapters, volumes, status, published, genres, demographics, title_synonyms, external } = data;

    const genresArr: string[] = [];
    for (const item of genres) {
      genresArr.push(item.name);
    }

    const demographicsArr: string[] = [];
    for (const item of demographics) {
      demographicsArr.push(item.name);
    }

    const mangadexEntry: any = mangaComplement.find((i: any) => +i.attributes.links.mal === mal_id);
    const { attributes: mangadexAttributes } = mangadexEntry || {};
    const { contentRating, links } = mangadexAttributes || {};
    const rating = (contentRating) ? contentRating : null;

    const mangaLinks = {
      amazon: (links && links.amz) ? links.amz : null,
      viz: (links && links.engtl) ? links.engtl : null,
      cdjapan: (links && links.cdj) ? links.cdj : null,
      mal: `https://myanimelist.net/manga/${mal_id}`,
      wikipedia: (external.length) ? external[0].url : null,
    }

    const attributes = {
      chapters,
      volumes,
      status,
      published: published.string,
      genres: genresArr,
      demographics: demographicsArr,
      alt_titles: title_synonyms,
      rating,
      links: mangaLinks
    }

    const manga = {
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

    mangaList.push(manga);
    i += 1;
  }
  
  console.log(mangaList);
}

export default createMangaList;
