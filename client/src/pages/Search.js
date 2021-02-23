import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Search = ({ setCategories }) => {
  let location = useLocation();
  const [productList, setProductList] = useState([]);

  useEffect(() => {

    if (getSearchParam() !== null) {
      axios.get(`/api/items?q=${getSearchParam()}`)
        .then(response => {
          setProductList(response.data.items);
          setCategories(response.data.categories);
        })
        .catch(error => console.log(error));
    }
    else {
      setProductList([]);
      setCategories([]);
    }

  }, [location]);

  const getSearchParam = () => new URLSearchParams(location.search).get("search");

  return (
    productList.length > 0 &&
    productList.map((product, index) =>
      <ProductCard key={index} product={product} />
    )
  )
};

export default Search;