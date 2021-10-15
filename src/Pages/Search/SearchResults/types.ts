export interface SearchState{
    search:Search
}

interface Search{
    language: string | undefined;
    genreID: string | undefined;
    query: string | undefined;
    page: number;
    movieList: Array<any>;
    totalPages: number;
    error: Error | undefined;
}