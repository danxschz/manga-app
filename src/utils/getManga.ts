// Script to get all of Junji Ito's manga using the Jikan API

import json from '../data/mangaID.json'; // https://api.jikan.moe/v4/people/2410/manga
const data = json.data;

const timer = (ms: number) => new Promise(res => setTimeout(res, ms))

const getManga = async () => {
  console.log('Started fetching');
  const mangaList = [];
  
  let i = 0
  for (const item of data) {
    const id = item.manga.mal_id;
    const response = await fetch(`https://api.jikan.moe/v4/manga/${id}/full`);
    const manga = await response.json();
    mangaList.push(manga);
    i += 1;
    console.log(`Manga pushed: ${i}`);

    // Avoid surpassing API rate limit
    await timer(2000);
  }

  console.log(mangaList);
}

const getMangaCharacters = async () => {
  console.log('Started fetching');
  const mangaCharList = [];
  
  let i = 0
  for (const item of data) {
    const id = item.manga.mal_id;
    const response = await fetch(`https://api.jikan.moe/v4/manga/${id}/characters`);
    const mangaChar = await response.json();
    mangaCharList.push(mangaChar);
    i += 1;
    console.log(`MangaChar pushed: ${i}`);

    // Avoid surpassing API rate limit
    await timer(2000);
  }

  console.log(mangaCharList);
}

export default getManga;
export { getMangaCharacters };
