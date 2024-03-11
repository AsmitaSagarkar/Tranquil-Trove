import React from 'react'

const productReducer = (state,action) => {
  switch(action.type){
    case "LOADING":
      return {...state,isLoading:true}
    case "SET_PRODUCT":
        const rating = action.payload.filter((item)=> {return item.rating > 4});
        return {...state,isLoading:false,product:action.payload,pRating:rating}
    case "ERROR":
        return {...state,isError:true}
  }
}

export default productReducer