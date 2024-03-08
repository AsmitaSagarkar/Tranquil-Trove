//here we have to create a context for the product. 
//Step to create a context : create a context,present a provider,present a consumer using useContext hook

import React, { createContext, useContext, useEffect } from 'react';
import Axios from 'axios';


const AppContext = createContext(); 
//console.log(AppContext);

const API = "https://api.pujakaitem.com/api/products";



const AppProvider = ({children}) =>{

    const getApi = async (url) =>{
        const res = await Axios.get(url);
        const product = await res.data;
        console.log(product);
    
    
    }
    useEffect(()=>{
        getApi(API);
    },[]);
    return <AppContext.Provider value={{myName : "asmita"}}>{children}</AppContext.Provider>
}

//create a global custom hook 

const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {useGlobalContext,AppProvider};
