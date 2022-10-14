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
    const { status, year } = manga.attributes;

    const cover = manga.relationships.find((i: any) => i.type === 'cover_art').attributes.fileName;
    const img = `https://mangadex.org/covers/${id}/${cover}`;

    const item = {
      _id: id,
      slug: slugs[i],
      title,
      description,
      status,
      year,
      img,
    };

    list.push(item);
    i += 1;
  }
  
  console.log(list);
  return null;
}

export default createMangaList;
