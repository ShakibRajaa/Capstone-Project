import React from "react";
import Banner from "./Banner";
import Form from "./Form";

const Page1 = () =>{
    return(
        <div style={{maxHeight:"100vh",maxWidth:"100vw",display:"flex",boxSizing:"border-box"}}>
            <Banner/>
            <Form/>
        </div>
    )
}

export default Page1;