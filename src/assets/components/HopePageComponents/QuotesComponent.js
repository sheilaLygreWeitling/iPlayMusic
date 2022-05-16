import { useEffect, useState } from "react";

const QuotesComponent = () => {
    const [ data, setData ] = useState([]);
    
    
    const fetchData=()=>{
        fetch('./IntroQuotes.json')
        .then(response => {
            return response.json()
          })
          .then(fetchData => {
            setData(fetchData)
            //console.log(data);
          })
      }
      
      useEffect(()=>{
          fetchData()
        },[])
        
        return ( 
            <article className="w-[80%]">
            {/*     { data && console.log(data.MusicQuotes) }
                <h1 className="text-center font-bold text-headers4 my-[1rem] px-[2rem] dark:text-white">
                    { data && data.MusicQuotes[1].title }
                </h1>
                <p className="text-center text-normal dark:text-white">
                    { data && data.MusicQuotes[1].paragraph }
                </p> */}
        </article>
     );
    }
    
    export default QuotesComponent;
    
    
    
    /* const getData = () => {
        fetch("./assets/json/IntroQuotes.json")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
    } */