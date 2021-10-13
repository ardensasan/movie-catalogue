const API_KEY = "6fdc960c4cb19000df3556ff8e8b5831";

export const MovieEndpoint = {
  MovieDetailsEndpoint: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&append_to_response=videos,image`
};
