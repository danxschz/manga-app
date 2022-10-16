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
  _id: number,
  slug: string,
  title: string,
  synopsis: string | null,
  background: string | null,
  img: {
    normal: string,
    large: string
  },
  attributes: Attributes,
}
