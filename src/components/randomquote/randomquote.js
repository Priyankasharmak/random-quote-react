import { useState } from 'react'
import './randomquote.css'
import twitter_icon from '../assets/twitter.png'
import refresh_icon from '../assets/refresh.png'
const Randomquote = () => {
    
    let quotes =[];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes")
        quotes = await response.json();
    }

    const random =()=>{
      const select = quotes[Math.floor(Math.random()*quotes.length)]  
        setquote(select);
    }

    const [quote,setquote]=useState({
        text:"Difficulties increase the nearer we get to the goal.",
        author:"Johann wolfgang von goethe",
    });

    const twitter =()=>{
        window.open('https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}')

    }

    loadQuotes();
    
    return ( 
    <div className='container'>
        <div className="qoute">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom"></div>
            <div className="author">- {quote.author.split(',')[0]}</div>
            <div className="icons">

              <img src={refresh_icon} onClick={()=>{random()}} alt="hellos"/>

              <img src={twitter_icon} onClick={()=>{twitter()}} alt="hello1" />   
               </div>
        </div>
    </div>
     );
}
 
export default Randomquote;