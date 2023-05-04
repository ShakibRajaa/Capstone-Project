import React,{useEffect,useState} from "react";
import styles from "./Page3.module.css";
import bg from './bg2.png';
const Page3 = ()=>{
    let formDataAsString=localStorage.getItem('formData');
    const formDataAsObject=JSON.parse(formDataAsString);
    let choiceString =localStorage.getItem('choices');
    let choices= JSON.parse(choiceString);
    /* Weather API */
        const [date, setDate] = useState("")
        const [time, setTime] = useState("")
        const [weather, setWeather] = useState(false)
        // console.log(weather)
        useEffect(()=>{
            const fetchWeather = async()=>{
                await fetch("http://api.weatherapi.com/v1/current.json?key=c618bfc4eae843a39a2104355231904&q=Patna&aqi=no")
                    .then(async(data)=>await data.json()).then((data)=>setWeather(data)) 
            }
            fetchWeather()
        },[])
        useEffect(()=>{
            const date = new Date
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            setTime(strTime)
        })
        useEffect(()=>{
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();
    
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
    
            const formattedToday = dd + '-' + mm + '-' + yyyy;
            setDate(formattedToday)
        })
    //News API
    const [news, setNews] = useState('')
     const [newsDate, setNewsDate] = useState("")
    const [newsTime, setNewsTime] = useState("")
    console.log(news)
    useEffect(()=>{
        const fetchNews = async()=>{
           await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-03-26&sortBy=publishedAt&apiKey=f0f1e2f6b1864af78f58bc384e2d729c")
                .then(async(data)=>await data.json()).then((res)=>setNews(res.articles[0]))
        }
        fetchNews();
    },[])
     useEffect(()=>{
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setNewsTime(strTime)
    })
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setNewsDate(formattedToday)
    })

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <div className={styles.leftImg}>
                        <img src={bg}/>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.name}>{formDataAsObject.name}</div>
                        <div className={styles.email}>{formDataAsObject.email}</div>
                        <div className={styles.userName}>{formDataAsObject.userName}</div>
                        <div className={styles.choices}>
                        {choices.map((choice)=>{
                            return(
                            <div key={choice} className={styles.choiceTag}>
                                {choice}&nbsp;
                                <span>X</span>
                            </div>
                        )
                        })}
                        </div>
                    </div>
                </div>
                <div className={styles.bottum}>
                    <div className={styles.heading}>
                       <span>{date}</span>
                       <span>{time}</span>
                    </div>
                    <div className={styles.main}>
                    {weather ?<div style={{display:"flex", color:"white", alignItems:"center", justifyContent:"space-evenly"}}> <div>
                    <img src={weather.current.condition.icon} style={{width:"2.5rem",height:"2.5rem"}}/>
                    <p>{weather.current.condition.text}</p>
                    </div>
                    <div>
                       <p style={{marginBottom:"1rem", fontSize:"2rem",marginTop:"1rem"}}><span>{weather.current.temp_c}</span>C</p>
                       <p>{weather.current.pressure_mb} pressure</p>
                   </div>
                   <div>
                    <p style={{marginBottom:"1rem", fontSize:"2rem", marginTop:"1rem"}}>{weather.current.wind_kph} wind</p>
                    <p>{weather.current.humidity} humidity</p>
                    </div></div>:<></>}
                    </div>
                </div>
            </div>
            <div className={styles.right}>
            <img src={news.urlToImage} style={{height:"50vh", borderRadius:"12px",width:"30vw",boxSizing:"border-box"}}/>
            <div style={{height:"32vh", borderRadius:"12px",width:"30vw",background:"white",fontSize:"1.5rem",padding:"6px",boxSizing:"border-box"}}>
                {news.description}
            </div>
            <div style={{position:"absolute",width:"30vw",height:"20vh",background:"rgba(0, 0, 0, 0.74)",top:"35vh",padding:"10px",margin:"0",boxSizing:"border-box"}}>
                <p style={{color:"white",fontSize:"1.5rem",marginBottom:"10px"}}>{news.title}</p>
                <span style={{color:"white",fontSize:"1.3rem",marginRight:"10px",}}>{newsDate}</span>
                <span style={{color:"white",fontSize:"1.3rem",marginRight:"10px",}}>{newsTime}</span>
            </div>
            </div>
        </div>
    )
}

export default Page3;