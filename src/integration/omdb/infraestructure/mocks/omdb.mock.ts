export const mockApiKey = '95f84435';
export const mockUrl = 'http://www.omdbapi.com';
export const mockTitleMovie = 'Game of Thrones';
export const mockTitleMovieWront = 'sdfsdfsdfsd';

export const mockOmdbConfigService = {
  get apiKey(): string {
    return mockApiKey;
  },

  get url(): string {
    return mockUrl;
  },
};

export const mockSuccessResponseMove = {
  Title: 'Game of Thrones',
  Year: '2011–2019',
  Rated: 'TV-MA',
  Released: '17 Apr 2011',
  Runtime: '57 min',
  Genre: 'Action, Adventure, Drama',
  Director: 'N/A',
  Writer: 'David Benioff, D.B. Weiss',
  Actors: 'Emilia Clarke, Peter Dinklage, Kit Harington',
  Plot: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
  Language: 'English',
  Country: 'United States, United Kingdom',
  Awards: 'Won 59 Primetime Emmys. 389 wins & 634 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
  Ratings: [{ Source: 'Internet Movie Database', Value: '9.2/10' }],
  Metascore: 'N/A',
  imdbRating: '9.2',
  imdbVotes: '2,140,757',
  imdbID: 'tt0944947',
  Type: 'series',
  totalSeasons: '8',
  Response: 'True',
};

export const mockErrorResponseMove = {
  Response: 'False',
  Error: 'Movie not found!',
};
