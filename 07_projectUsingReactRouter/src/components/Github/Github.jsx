import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

function Github() {

    //using the loader part - 1
    // const data = useLoaderData()

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/Zade-Samir")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)            
        })
    }, [])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

//using the loader part - 2
// export const gitHubInfoLoader = async () => {
//     const response = await fetch("https://api.github.com/users/Zade-Samir")
//     return response.json()
// }