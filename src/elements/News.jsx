import { useEffect, useState } from "react"

const News = ()=>{
    const [news, setNews] = useState('')
     const [date, setDate] = useState("")
    const [time, setTime] = useState("")
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
        setTime(strTime)
    })
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })
    return (
        <div style={{height:"90vh",width:"30vw", position:"relative", borderRadius:"12px", padding:"6px",marginLeft:"2rem"}}>
            <img src={news.urlToImage} style={{height:"60vh", borderRadius:"12px",width:"30vw"}}/>
            <div style={{height:"27vh", borderRadius:"12px",width:"30vw",background:"white",fontSize:"1.5rem",padding:"6px"}}>
                {news.description}
            </div>
            <div style={{position:"absolute",width:"30vw",height:"30vh",background:"rgba(0, 0, 0, 0.74)",top:"31vh",padding:"24px",boxSizing:"border-box"}}>
                <p style={{color:"white",fontSize:"1.5rem",marginBottom:"10px"}}>{news.title}</p>
                <span style={{color:"white",fontSize:"1.3rem",marginRight:"10px",}}>{date}</span>
                <span style={{color:"white",fontSize:"1.3rem",marginRight:"10px",}}>{time}</span>
            </div>
        </div>
    )
}

export default News