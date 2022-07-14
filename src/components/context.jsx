import React, { createContext,useState } from "react";


const GlobalContext = createContext();


let limit = 3;
export function ContextProvider({ children }) {


    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(false);
    const [skip, setSkip] = useState(0);

    const getTweets = async () => {

        setLoading(true);

        const res = await fetch("http://localhost:5000/feed", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ skip, limit }),
        });
        const tweets = await res.json();
        console.log(tweets);
        
        
        console.log(tweets);
        
        if (tweets === "Tweets finished!") {
            console.log("end");
            setLoading(false);
            setCustomClass("load-not");
            return;
        }
        setSkip(skip+limit+1);
        setFeed(feed => [...feed, tweets]);
        console.log(feed);
        setLoading(false);

    }




    return (
        <GlobalContext.Provider value={{ getTweets ,feed , loading,skip,setSkip}}>
            {children}
        </GlobalContext.Provider>)
}


export default GlobalContext;