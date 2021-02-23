import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import { useStyles, formStyle } from './searchappbar-styles';
import logo from '../assets/Logo_ML.png';

const SearchAppBar = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  let history = useHistory();

  const handleChange = event => setSearchValue(event.target.value);

  const onSubmit = e => {
    e.preventDefault();
    history.push(`/items?search=${searchValue}`);
  }

  return (
    <AppBar position="static" className={classes.searchBar}>
      <Toolbar>
        <img src={logo} className={classes.logo} />
        <form style={formStyle} onSubmit={onSubmit}>
          <InputBase
            placeholder="Nunca dejes de buscar"
            onChange={handleChange}
            value={searchValue}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
          <Button type="submit" variant="contained" className={classes.button}>
            <SearchIcon fontSize="small" />
          </Button>
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default SearchAppBar;
