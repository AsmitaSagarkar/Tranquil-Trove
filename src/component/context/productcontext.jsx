//here we have to create a context for the product. 
//Step to create a context : create a context,present a provider,present a consumer using useContext hook
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import Axios from 'axios';
import reducer from '../reducer/productReducer';

const AppContext = createContext(); //creating a context
//console.log(AppContext);

const API = "https://dummyjson.com/products";


const initialState = {

    isLoading :false,
    isError : false,
    product : [],
    pRating : []
}
const AppProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);

    const getApi = async (url) =>{ //this is the function that we have to call to get the data from the api

        dispatch({type:"LOADING"});

        try {
            const res = await Axios.get(url);
            const product = await res.data;
            // console.log(product);
            dispatch({type:"SET_PRODUCT",payload:product});
           
        } catch (error) {
            dispatch({type:"ERROR"});
            
        }
    
    
    }
    useEffect(()=>{
        getApi(API);
    },[]);
    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

//create a global custom hook 

const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {useGlobalContext,AppProvider,AppContext};
