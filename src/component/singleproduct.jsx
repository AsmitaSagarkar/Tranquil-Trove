import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useGlobalContext } from './context/productcontext';
import Pagenavigation from './Pagenavigation';
import Myimages from './Myimages';
import NumberFormat from './helpers/numberFormat';
import { FaTruck } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

const Singleproduct = () => {
  const {id} = useParams();
  const {getSingleProduct, isSingleLoading,singleProduct} = useGlobalContext();
  console.log(id); 

  console.log(getSingleProduct);
  const {id:number , title,description,price,brand,category,images,rating,stock} = singleProduct;
  console.log(singleProduct);

  const API = "https://dummyjson.com/products/";
  useEffect(()=>{
    getSingleProduct(`${API}${id}`);
  },[]);

  if(isSingleLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div>
    <NavLink to="/">Home</NavLink>/{title}
    <div><Pagenavigation title={title} /></div>
    <Myimages images={images} />
    <h1>{title}</h1>
    <h2>{rating}</h2>
    <h3>{brand}</h3>
    <h1>deal of the day</h1>
    <div>
    MRP : 
    <del><NumberFormat price={price+100}/></del>
    <h1><NumberFormat price={price}/></h1>
    <p>{description}</p>
    </div>

    <div>
    <div><FaTruck />Free Delivery</div>
    <div><TbReplace />30 Days Replacement</div>
    <div><FaTruck />Free Delivery</div>
    <div><MdOutlineSecurity />Assured Warranty and Guarantee</div>

    </div>

    <div>Available : {stock > 0 ? "In stock" : "Not in stock rn!"}</div>
    <div>{number}</div>
    <div>{category}</div>

    
    </div>
  )
}

export default Singleproduct
