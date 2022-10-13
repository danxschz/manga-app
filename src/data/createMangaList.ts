import mangaSample from './mangaSample';

// Data from MangaDex
// Junji Ito MangaDex ID: bf07c05f-a69f-4690-982f-406d369a2034

const createMangaList = () => {
  const list = []

  for (const manga of mangaSample) {
    const id = manga.id;
    const title = manga.attributes.title.en;
    const description = manga.attributes.description.en;
    const { status, year } = manga.attributes;

    const cover = manga.relationships.find((i: any) => i.type === 'cover_art').attributes.fileName;
    const img = `https://mangadex.org/covers/${id}/${cover}`;

    const item = {
      _id: id,
      title,
      description,
      status,
      year,
      img,
    };

    list.push(item);
  }
  
  console.log(list);
  return null;
}

export default createMangaList;
