import React, { useState } from 'react';
import axios from 'axios';
function Imagesearchfn()
{
    const[image,setImage]=useState([])
    const[search,setSearch]=useState("")

    const getImage=(search)=>  {
        const url = "https://api.unsplash.com/search/photos?client_id=bsluzNKnpzZpPL0ktlQgRhp3TfNjTEzH4aqhVrpJQKk&&page=1&query="+search
        axios.get(url)
            .then((res)=>{setImage(res.data.results)
            console.log(image)})
            .catch(console.log("errr"))
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        console.log("buttonclicked");
        getImage(search)
    }
    const handlesearch=(event)=>{
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    
    return(
        <>
        <form onSubmit={handlesubmit}>
            <input type="text"onChange={handlesearch}></input>
            <input type="button" value="search"></input>
        </form>
        {
            image.map((images)=>(<img src={images.urls.thumb}></img>))
        }
        </>
    )
}
export default Imagesearchfn;