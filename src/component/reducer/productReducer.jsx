
const productReducer = (state,action) => { //this is the reducer function that we have initialised in productcontext
  switch(action.type){
    case "LOADING":
      return {...state,isLoading:true}
    case "SET_PRODUCT":
        const rating = action.payload.products.filter((item)=> {return item.rating > 4.85});
        // console.log(action.payload);
        return {...state,isLoading:false,product:action.payload,pRating:rating}
    case "ERROR":
        return {...state,isError:true}
  }
}

export default productReducer;