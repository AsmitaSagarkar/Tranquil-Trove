import React from 'react'

const Myimages = ({images}) => {
  console.log(images);

  return (
    <div>{
        images.map((image,ind)=>{
            return <>heyy</>    
        })
    }</div>
  )
}

export default Myimages