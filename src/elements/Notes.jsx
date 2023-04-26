import React,{useState} from "react";
import pen from './pen.png';

const Notes = ()=>{
    const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")))
    // console.log(text)
    const handleChange=(e)=>{
        setText(e.target.value)
        window.localStorage.setItem("text",JSON.stringify(text))
    }
    return(
       <div style={{color:"white",background:"#F1C75B",height:"54vh",width:"30vw", position:"relative", borderRadius:"12px", padding:"10px",paddingLeft:"2rem",marginLeft:"2rem",boxSizing:"border-box"}}>
        <p style={{color:"black",fontSize:"2rem",margin:"0",padding:"none",fontWeight:"700"}}>All notes</p>
        <textarea style={{width:"26vw", height:"40vh",margin:"auto", border:"none",background:"transparent",marginTop:"1rem",fontSize:"1.2rem",fontWeight:"600",boxSizing:"border-box"}} value={text} onChange={(e)=>handleChange(e)}/>
        <div style={{width:"50px",height:"50px",borderRadius:"25px",background:"black",position:"absolute",bottom:"17px",right:"10px"}}></div>
        <img src={pen} style={{width:"30px",height:"30px",position:"absolute",bottom:"27px",right:"20px"}}/>
       </div>
    )
}

export default Notes