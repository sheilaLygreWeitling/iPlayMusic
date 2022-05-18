import { useEffect, useState } from "react";
import quotes from "../../data/quotes";


const QuotesComponent = () => {
    const [ randomNumber, setRandomNumber ] = useState(0);

    const randomNum = (max) => {
        return Math.floor(Math.random() * max);
    }
    
    useEffect(()=>{
        const interval = setInterval(() => {
            let randomNr = randomNum(quotes.length)
            setRandomNumber(randomNr);
        }, 8000);
        return () => clearInterval(interval);
    }, []);
    
    return ( 
        <article className="w-[80%] h-[20rem] dark:text-white">
            <h1 className="text-center font-bold text-headers4 my-[1rem] px-[2rem]">
                { quotes[randomNumber].title}
            </h1>
            <p className="text-center text-normal">
                { quotes[randomNumber].paragraph}
            </p>
        </article>
    );
}

    
export default QuotesComponent;