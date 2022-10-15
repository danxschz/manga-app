import mangaSample from './mangaSample';

// Data from MangaDex
// Junji Ito MangaDex ID: bf07c05f-a69f-4690-982f-406d369a2034

const slugs = [
  '8-list',
  'diary-of-embellished',
  'black-paradox',
  'deserter',
  'dissolving-series',
  'ghost-heights',
  'gyo',
  'hellstar-remina',
  'horror-anthology',
  'human-chair',
  'manga-collection',
  'masterpiece-selection',
  'abyss-of-horror',
  'cat-diary',
  'dog-diary',
  'kai-sasu',
  'layers-of-fear',
  'mimis-ghost-stories',
  'mr-inagawa',
  'new-voices',
  'no-longer-human',
  'phantom-mansion',
  'rasputin-the-patriot',
  'ribs-woman',
  'souichi-possessed',
  'enigma-of-amigara',
  'the-lighthouse',
  'liminal-zone',
  'shard-of-evil',
  'summer-time',
  'the-summit',
  'tomie',
  'tomie-takeover',
  'succubus',
  'umezu-sensei',
  'uzumaki',
  'venus-in-the-blind',
  'voices-in-the-dark',
]

const createMangaList = () => {
  const list = []
  let i = 0

  for (const manga of mangaSample) {
    const id = manga.id;
    const title = manga.attributes.title.en;
    const description = manga.attributes.description.en;

    const cover = manga.relationships.find((i: any) => i.type === 'cover_art').attributes.fileName;
    const img = `https://mangadex.org/covers/${id}/${cover}`;

    const { lastChapter, lastVolume, status, year, publicationDemographic, contentRating, links } = manga.attributes;

    const genres: string[] = [];
    for (const item of manga.attributes.tags) {
      if (item.attributes.group === 'genre') {
        genres.push(item.attributes.name.en);
      }
    }

    const alt_titles: string[] = [];
    for (const item of manga.attributes.altTitles) {
      if (item.en) alt_titles.push(item.en);
    }

    const mangaLinks = {
      amazon: links.amz,
      viz: links.engtl,
      cdjapan: links.cdj,
      mal: `https://myanimelist.net/manga/${links.mal}`
    }

    const attributes = {
      chapters: lastChapter,
      volumes: lastVolume,
      status,
      year,
      demographic: publicationDemographic,
      content_rating: contentRating,
      genres,
      alt_titles,
      links: mangaLinks
    }

    const item = {
      _id: id,
      slug: slugs[i],
      title,
      description,
      img,
      attributes,
    };

    list.push(item);
    i += 1;
  }
  
  console.log(list);
  return null;
}

export default createMangaList;
