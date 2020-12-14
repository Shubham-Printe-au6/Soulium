import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: "480px"
  },
  container: {
    margin: "auto",
    width: "550px",
    height: "70px",
    borderRadius: "50px",
    position: "relative",
  },
  search: {
    backgroundColor: "pink",
    width: "70px",
    height: "70px",
    padding: "20px",
    borderRadius: "0 50px 50px 0 ",
    position: "absolute",
    right: "-40px",
    bottom: "-14px",
    color:"white"
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div id="searchBar" className={classes.container}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Find a memorial ...
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon className={classes.search} />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
