import React from "react";
import Information from "../../elements/Information";
import Weather from "../../elements/Weather";
import styles from"./Page4.module.css";


const Page4 = () =>{
    return(
        <div className={styles.container}>
            <div className="left">
                <div className="top">
                    <div className="subPage3">
                        <div className="info"><Information/></div>
                        <div className="weather"><Weather/></div>
                    </div>
                    <div className="Notes"></div>
                </div>
                <div className="timer"></div>
            </div>
            <div className="news"></div>
        </div>
    )
}

export default Page4;