import { useEffect,useState } from "react";

function useCurrencyInfo(currency){

    const [data, setdata]=useState({})
    console.log(currency)
    useEffect(()=>{
        console.log("currency",currency)
        if (!currency) return;
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        .catch((error) => console.error("Error fetching currency data:", error));
        console.log(data)
        return data

    },[currency])
    
    console.log (data);
}

/*
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log("Currency changed:", currency); // Debugging log
        
        if (!currency) return; // Prevent running effect when currency is undefined or empty

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                console.log("Fetched data:", res[currency]); // Log the new data
                setData(res[currency]);
            })
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]); // Run effect whenever currency changes

    return data;
}
*/
export default useCurrencyInfo;