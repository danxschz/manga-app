interface Relation {
  id: number,
  title: string,
  relation: string,
  url: string,
}

interface Character {
  name: string,
  role: string,
  img: string,
  voice_actor?: {
    name: string,
    language: string,
    img: string,
  } | null
}

interface Review {
  username: string,
  date: string,
  review: string,
  rating: number,
}

interface Attributes {
  chapters: number | null,
  volumes: number | null,
  status: string,
  published: string,
  demographics: string[],
  content_rating: string | null,
  genres: string[],
  alt_titles: string[],
  links: {
    [key: string]: string | null
  },
}

interface Manga {
  id: number,
  slug: string,
  title: string,
  img: {
    normal: string,
    large: string
  },
  synopsis: string | null,
  background: string | null,
  relations: Relation[],
  characters: Character[],
  reviews: Review[],
  attributes: Attributes,
}

interface AttributesAnime {
  type: string,
  episodes: number | null,
  status: string,
  aired: string,
  studios: string[],
  source: string,
  genres: string[],
  demographics: string[],
  alt_titles: string[],
  duration: string,
  rating: string | null,
  links: {
    [key: string]: string | null | undefined
  },
}

interface Anime {
  id: number,
  slug: string,
  title: string,
  img: {
    normal: string,
    large: string
  },
  synopsis: string | null,
  background: string | null,
  relations: Relation[],
  characters: Character[],
  reviews: Review[],
  attributes: AttributesAnime,
}
