import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  categories: {
    margin: '16px auto',
    width: '80%'
  },
});

const CategoryPath = ({ categories }) => {
  const classes = useStyles();

  const getCategoriesPath = () => categories.join(' > ');

  return (
    <Typography className={classes.categories} variant="body2" color="textSecondary" component="p">
      {getCategoriesPath()}
    </Typography>
  )
};

export default CategoryPath;
