// Script to get all of Junji Ito's anime using the Jikan API

import json from '../data/animeID.json'; // https://api.jikan.moe/v4/people/2410/anime
const data = json.data;

const timer = (ms: number) => new Promise(res => setTimeout(res, ms))

const getAnime = async () => {
  console.log('Started fetching');
  const animeList = [];
  
  let i = 0
  for (const item of data) {
    const id = item.anime.mal_id;
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    const anime = await response.json();
    animeList.push(anime);
    i += 1;
    console.log(`Anime pushed: ${i}`);

    // Avoid surpassing API rate limit
    await timer(2000);
  }

  console.log(animeList);
}

const getAnimeCharacters = async () => {
  console.log('Started fetching');
  const animeCharList = [];
  
  let i = 0
  for (const item of data) {
    const id = item.anime.mal_id;
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    const animeChar = await response.json();
    animeCharList.push(animeChar);
    i += 1;
    console.log(`MangaChar pushed: ${i}`);

    // Avoid surpassing API rate limit
    await timer(2000);
  }

  console.log(animeCharList);
}

export default getAnime;
export { getAnimeCharacters };
