//this is the product component used in home page

import React from 'react'
import {NavLink }from 'react-router-dom';
import NumberFormat from './helpers/numberFormat';

const product = (items) => {
  const {id,title,price,rating,brand,images} = items;
  console.log(items);
  return (
    <>
    <NavLink to={`/singleproduct/${id}`}>
    <img src={images[0]} />
    <h1>{title}</h1>
    <h2><NumberFormat price={price} /></h2>
    <h3>{rating}</h3>
    <h4>{brand}</h4>
    </NavLink>
    </>
  )
}

export default product