import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import logo from '../assets/ic_shipping.png';
import { useStyles } from './productcard-styles';

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.content} component={Link} to={`/items/${product.id}`}>
        <CardMedia
          className={classes.media}
          image={product.picture}
        />
        <CardContent className={classes.title}>
          <Typography gutterBottom variant="h5" component="h2">
            {new Number(product.price.amount).toLocaleString("es-AR", {
              style: 'currency',
              currency: `${product.price.currency}`, minimumFractionDigits: 0
            })}
            {product.free_shipping && <img src={logo} className={classes.logo} />}
          </Typography>
          <Typography className={classes.titleContent} variant="body2" color="textSecondary" component="p">
            {product.title}
          </Typography>
        </CardContent>
        <CardContent className={classes.zone}>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
            {product.state}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
