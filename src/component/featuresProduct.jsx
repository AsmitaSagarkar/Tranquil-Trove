import React from 'react';
import { useGlobalContext } from './context/productcontext';

const FeaturesProduct = () => {
    const {isLoading, pRating} = useGlobalContext();
    console.log(pRating);
  return (
    <div>featuresProduct</div>
  )
}

export default FeaturesProduct