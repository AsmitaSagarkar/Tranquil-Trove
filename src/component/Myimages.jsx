import React from 'react'

const Myimages = ({images}) => {
  return (
    <div>{
        images.map((image)=>{
            return <img src={image} key={image}/>
        
        })
    }</div>
  )
}

export default Myimages