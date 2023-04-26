import React from "react";
import Information from "../../elements/Information";
import Weather from "../../elements/Weather";
import styles from"./Page4.module.css";
import Notes from "../../elements/Notes";
import Timer from "../../elements/Timer";
import News from "../../elements/News";


const Page4 = () =>{
    return(
        <div className={styles.container}>
            <div className="left">
                <div className={styles.top}>
                    <div className="subPage3">
                        <div className="info"><Information/></div>
                        <div className="weather"><Weather/></div>
                    </div>
                    <div className="Notes"><Notes/></div>
                </div>
                <div className="timer"><Timer/></div>
            </div>
            <div className="news"><News/></div>
        </div>
    )
}

export default Page4;