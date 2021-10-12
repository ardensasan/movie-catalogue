import { LocalMovies, Search, Home } from "@mui/icons-material";
import {
  AppBar,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
} from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { Path } from "../../common/enums/path";

const NavBar: FC<{}> = () => {
  const history = useHistory();

  const handleClickMovies = () => {
    history.push(Path.Movies)
  };

  const handleSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
  };

  const handleSearchOnClick = () => {};

  const handleSearchKeyDown = (event: any) => {};

  const handleClickHome = () =>{
      history.push(Path.Home)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={handleClickHome}>
            <Home />
          </IconButton>
          <IconButton color="inherit" onClick={handleClickMovies}>
            <LocalMovies />
          </IconButton>
          <div>
            <FormControl variant="outlined">
              <OutlinedInput
                onChange={handleSearchTerm}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search"
                id="outlined-adornment-weight"
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearchOnClick}>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
