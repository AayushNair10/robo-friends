import React from "react";
const Cards =(props)=>{
    return(
        <div className='bg-light-green dib br3 pa3 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${props.id}?200x200`}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
        );
}
export default Cards;