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
  attributes: Attributes,
}
