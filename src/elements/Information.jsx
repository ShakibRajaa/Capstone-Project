import React from "react";
import bg from './bg2.png';

const Information = () => {
    let formDataAsString=localStorage.getItem('formData');
    const formDataAsObject=JSON.parse(formDataAsString);
    let choiceString =localStorage.getItem('choices');
    let choices= JSON.parse(choiceString);
    return(
        <div className="container" style={{height:"30vh",width:"30vw",background:"#5746EA",color:"#ffffff" ,display:"flex",borderRadius:"12px",padding:"2rem",boxSizing:"border-box"}}>
            <div className="image">
                <img src={bg} alt={bg} style={{height:"11rem",width:"5rem",marginRight:"2rem"}} />
            </div>
            <div className="info" style={{fontSize:"1.5rem",letterSpacing:"0.03em",lineHeight:"1.2em"}}>
                <div className="name">{formDataAsObject.name}</div>
                <div className="email">{formDataAsObject.email}</div>
                <div className="userName" style={{fontWeight:"600",fontSize:"1.8rem"}}>{formDataAsObject.userName}</div>
                <div className="choices" style={{marginTop:"1rem",display:"flex",flexWrap:"wrap",gap:"10px"}}>
                    {choices.map((choice)=>{
                        return(
                            <div key={choice} className="choiceTag"style={{display:"flex",gap:"5px",padding:"4px 15px",background:"#9F94FF",borderRadius:"18px",fontSize:"1.2rem" ,boxSizing:"border-box",fontWeight:"700"}}>
                                {choice}&nbsp;
                                <span>X</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Information;