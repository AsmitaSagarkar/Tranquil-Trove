import { FaRegStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Star = ({star}) =>{

    const ratingStars = Array.from({length:5},(_,index)=>{

    let number = index+0.5;
    

    return( 
    <span key={index}>
    {star >= index+1 ? (<FaStar />) : star >= number ?( <FaStarHalfAlt />) : (<FaRegStar />)}
    </span>
    );
    });

    return (
        <div>{ratingStars}</div>
    )




}

export default Star;