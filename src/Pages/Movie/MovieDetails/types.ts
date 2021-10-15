export interface MovieState{
    movie:Movie
}

interface Movie{
    movieDetails: any;
    error: Error | undefined;
}