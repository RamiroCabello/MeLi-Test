import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './detail-styles';

const Detail = () => {
  let { id } = useParams();
  const classes = useStyles();
  const [product, setProduct] = useState({ price: { currency: 'ARS', amount: '0' } });

  useEffect(() => {
    axios.get(`/api/items/${id}`)
      .then(response => setProduct(response.data.item))
      .catch(error => console.log(error));
  }, [id]);

  const getCondition = () => product.condition === 'new' ? 'Nuevo' : 'Usado';

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.picture}
        />
        <CardContent className={classes.title}>
          <Typography className={classes.sales} variant="body2" color="textSecondary" component="p">
            {getCondition()} - {product.sold_quantity} vendidos
          </Typography>
          <Typography className={classes.productTitle} gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography className={classes.price} gutterBottom variant="h5" component="h2">
            {new Number(product.price.amount).toLocaleString("es-AR", {
              style: 'currency',
              currency: `${product.price.currency}`, minimumFractionDigits: 0
            })}
          </Typography>
          <Button className={classes.button} variant="contained" color="primary" fullWidth>
            Comprar
          </Button>
        </CardContent>
        <CardContent className={classes.descriptionContent}>
          <Typography className={classes.descriptionTitle} gutterBottom variant="h5" component="h2">
            Descripción del producto
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
};

export default Detail;