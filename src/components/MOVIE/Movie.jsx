import React from "react";
import List from "./List";
import Profile from './logo.png'
const Movies = ()=>{
    const movies = JSON.parse(window.localStorage.getItem("choices"))
    return(
        <>
        <img src={Profile} style={{position:"absolute",top:"2vh",right:"3vw",height:"60px",width:"60px"}}/>
        <div style={{maxWidth:"100vw",maxHeight:"100vh",background:"black",overflowX:"hidden",color:"white",fontSize:"2rem",fontWeight:"600",margin:"0",padding:"none"}}>
        <p style={{color:"green",fontSize:"3rem",margin:"1vw"}}>Super app</p>
        <p style={{color:"white",fontSize:"2rem",margin:"3vw"}}>Entertainment according to your choice</p>
        {movies.map((movie)=><List genre={movie}/>)}
        </div>
        </>
    )
}


export default Movies