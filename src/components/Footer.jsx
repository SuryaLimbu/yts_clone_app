import React from "react";
import { useState } from "react";

const Footer = () => {
    const [currentDate]=useState(new Date());
    const formatedDate = currentDate.getFullYear();
    return (
        <>
            <div className="w-full bg-gray-900 py-10 text-white flex flex-col items-center justify-center">
                <h1 className=" text-lg ">Developed by: Surya Man Kedem</h1>
                <h1 className=" text-lg ">Yts API</h1>
                <h1>{formatedDate}</h1>
            </div>
        </>

    )
}

export default Footer;