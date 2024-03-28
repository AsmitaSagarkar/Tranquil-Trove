import React, { useState } from 'react'

const Myimages = ({images = [{images :""}]}) => {
  console.log(images);

  const [productImage,setProductImage] = useState(images[0]);

  return (
    <>
    
    <div>{
        images.map((image,ind)=>{
            return <>
            <img src={image} key={ind} onClick={()=>setProductImage(image)} />
            </>   
        })
    }</div>

    <div>
    <img src={productImage} />

    </div>
    </>

  )
}

export default Myimages