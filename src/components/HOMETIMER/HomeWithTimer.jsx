import React from "react";
import Information from "../../HomePageComponents/Information";
import Weather from "../../HomePageComponents/Weather";
import styles from"./HomeWithTimer.module.css";
import Notes from "../../HomePageComponents/Notes";
import Timer from "../../HomePageComponents/Timer";
import News from "../../HomePageComponents/News";


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