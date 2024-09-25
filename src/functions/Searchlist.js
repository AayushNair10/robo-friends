import React from 'react';

const Searchlist=({Searchfield,SearchChange})=>{
    return(
    <div>
        <input type="search" 
        placeholder='Enter robot name'
         onChange={SearchChange}></input>
        
    </div>
    );
}
export default Searchlist;