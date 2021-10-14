import { Card, CardMedia, Grid, List, ListItem } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Path } from "../../../common/enums/path";

const MovieDetails = () => {
  const movieDetails = useSelector((state: any) => state.movie.movieDetails);
  const error = useSelector((state:any)=> state.movie.error);
  if(error){
    return <h1>{error.message}</h1>
  }
  if (!movieDetails) {
    return null;
  }
  return (
    <Fragment>
      <br></br>
      <br></br>
      <Card raised>
        <Grid container>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              alt={movieDetails.title}
              image={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              title={movieDetails.title}
            />
          </Grid>
          <Grid item xs={8}>
            <List>
              <ListItem>Title: {movieDetails.title}</ListItem>
              {movieDetails.title !== movieDetails.original_title && (
                <ListItem>
                  Original Title: {movieDetails.original_title}
                </ListItem>
              )}
              {!!movieDetails.genres.length && (
                <ListItem>
                  Genres:
                  {movieDetails.genres.map((genre: any, index: number) => {
                    return (
                      <Fragment key={index}>
                        &nbsp;&nbsp;
                        <Link
                          to={`${Path.SearchByGenre}${genre.id}/page/1`}
                          key={index}
                        >
                          {genre.name}
                        </Link>
                      </Fragment>
                    );
                  })}
                </ListItem>
              )}
              {!!movieDetails.spoken_languages.length && (
                <ListItem>
                  Language:
                  {movieDetails.spoken_languages.map(
                    (language: any, index: number) => {
                      return (
                        <Fragment key={index}>
                          &nbsp;&nbsp;
                          <Link
                            to={`${Path.SearchByLanguage}${language.iso_639_1}/page/1`}
                            key={index}
                          >
                            {language.english_name}
                          </Link>
                        </Fragment>
                      );
                    }
                  )}
                </ListItem>
              )}
              {movieDetails.overview && (
                <ListItem>Overview: {movieDetails.overview}</ListItem>
              )}
              {!!movieDetails.videos.results.length && (
                <iframe
                  title="trailer"
                  width="1280"
                  height="720"
                  src={`https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`}
                />
              )}
            </List>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
};

export default MovieDetails;
