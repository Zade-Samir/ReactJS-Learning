import React from "react";

//things which we want to use into components should pass into ()
//to pass default value, just write after it value like 'btnText'
function Card({userName, btnText = "Open Me"}) {
    // console.log("Props: ", props);
    return (
        <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
            alt="AirMax Pro" 
            className="z-0 h-full w-full object-cover rounded-md"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        
        <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{userName}</h1>
            <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center bg-blue-600 px-4 py-2 rounded-md text-sm font-semibold text-white hover:bg-blue-700 transition">
            {btnText}
            </button>
        </div>
        </div>
    )
}

export default Card

