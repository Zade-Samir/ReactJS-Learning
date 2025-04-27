import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    //empty useState for prevent to not crash the project if not get any value
    const [data, setData] = useState({})

    //useEffect -> it will automatically fetch call, don't have to do manually
    // useEffect(callback, dependencies Array)
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json()) //convert into json format
        .then((response) => setData(response[currency])) //fetch the currency from api
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo