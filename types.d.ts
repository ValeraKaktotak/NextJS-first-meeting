interface FilmsResponse {
  message: string;
  result: Film[];
}
interface FilmResponse {
  message: string;
  result: Film;
}
interface Film {
  properties: Properties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}
interface Properties {
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  url: string;
}