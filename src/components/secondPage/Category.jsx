import React, { useState } from "react";
import styles from "./Category.module.css";

const Category = (props) =>{
    const [choices,setChoice]=useState([]);
    const [selected,setSelected] = useState(false);
    const handleChoice = (elem) =>{
        setSelected(true);
        document.getElementById(elem).style.border="5px solid green";
        console.log(selected);
        if (elem && !choices.includes(elem)) {
            setChoice((prevChoice) => [...prevChoice, elem]);
        }
    };
    const handleRemoveChoice = (choiceToRemove)=>{
        console.log(choiceToRemove);
        document.getElementById(choiceToRemove).style.border="none";
        setChoice((prevChoice) =>
        prevChoice.filter((choice) => choice !== choiceToRemove)
    );
    }
    const handleSubmit = () =>{
        if(choices.length < 3)
        {
            alert("Choose atleast 3 catogries");
        }
        else{
            let string=JSON.stringify(choices);
            localStorage.setItem('choices',string);
        }
    }
    return(
        <div className={styles.container1}>
            <div className={styles.left}>
                <div className={styles.iconName}>Super App</div>
                <h1 className={styles.heading}>Choose your entertainment category</h1>
                {choices && (
                    <div className={styles.choice}>
                        {choices.map((choice)=>{
                            return(
                                <div key={choice} className={styles.choiceTag}>
                                    {choice}&nbsp;
                                    <span onClick={() => handleRemoveChoice(choice)}>X</span>
                                </div>
                            )

                        })}

                    </div>
                )}

            </div>
            <div className={styles.right}>
                {props.details.map((values,index) => (
                <div className={styles.card} style={{background:values.background}} key={index} id={values.title} onClick={() =>handleChoice(values.title)} >
                    <div className={styles.tittle}>{values.title}</div>
                    <div className={styles.cardimg}>
                        <img src={values.img} />
                    </div>
                </div>
                ))};
            </div>
            <button className={styles.nextButton} type="submit" onClick={handleSubmit}>Next Page</button>
        </div>
    )
}
export default Category;