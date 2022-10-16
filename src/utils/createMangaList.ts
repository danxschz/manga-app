import json from '../data/mangaFull.json';
import mangadex from '../data/mangadex.json';

const mangadexData: any = mangadex;

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

  for (const item of json) {
    const data = item.data;

    const { mal_id, title, title_english, synopsis, background, images } = data;

    const slug = slugify(title_english || title);

    const imageObj = {
      normal: images.jpg.image_url,
      large: images.jpg.large_image_url
    }

    const { chapters, volumes, status, published, demographics, genres, title_synonyms } = data;

    const demographicsArr: string[] = [];
    for (const item of demographics) {
      demographicsArr.push(item.name);
    }

    const genresArr: string[] = [];
    for (const item of genres) {
      genresArr.push(item.name);
    }
    
    const mangadexEntry = mangadexData.find((i: any) => +i.attributes.links.mal === mal_id);
    const { attributes: mangadexAttributes } = mangadexEntry || {};
    const { contentRating, links } = mangadexAttributes || {};

    const content_rating = (contentRating) ? contentRating : null;
    
    const mangaLinks = {
      amazon: (links && links.amz) ? links.amz : null,
      viz: (links && links.engtl) ? links.engtl : null,
      cdjapan: (links && links.cdj) ? links.cdj : null,
      mal: `https://myanimelist.net/manga/${mal_id}`,
    }

    const attributes = {
      chapters,
      volumes,
      status,
      published: published.string,
      demographics: demographicsArr,
      content_rating,
      genres: genresArr,
      alt_titles: title_synonyms,
      links: mangaLinks
    }

    const manga = {
      _id: mal_id,
      slug,
      title: title_english || title,
      synopsis,
      background,
      img: imageObj,
      attributes,
    };

    mangaList.push(manga);
  }
  
  console.log(mangaList);
}

export default createMangaList;
