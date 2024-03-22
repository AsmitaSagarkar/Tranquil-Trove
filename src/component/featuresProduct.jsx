import React from 'react';
import { useGlobalContext } from './context/productcontext';
import Product from './product';
const FeaturesProduct = () => {
    const {isLoading, pRating} = useGlobalContext();
    console.log(pRating);

    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
    <h1>Welcome to Feature Product</h1>
    <div>
    {
    pRating.map((item)=>{
      return <Product key={item.id} {...item}/>
    })
    }
    </div>
    
    </div>
  )
}

export default FeaturesProduct