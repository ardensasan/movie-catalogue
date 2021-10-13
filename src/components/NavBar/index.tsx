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
import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Path } from "../../common/enums/path";

const NavBar: FC<{}> = () => {
  const history = useHistory();

  const handleSearchOnClick = () => {};

  const handleSearchKeyDown = (event: any) => {
    const {key} = event.nativeEvent;
    if(key !== "Enter") return;
    const {value} = event.target;
    history.push(`${Path.SearchByQuery}${value}/page/1`)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => history.push(Path.Home)}>
            <Home />
          </IconButton>
          <IconButton color="inherit" onClick={() => history.push(Path.Movies)}>
            <LocalMovies />
          </IconButton>
          <div>
            <FormControl variant="outlined">
              <OutlinedInput
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
