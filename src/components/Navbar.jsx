import React from "react";
import { FiSearch } from "react-icons/fi"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-black text-white p-4 px-20">
            <h1 className="text-xl font-bold text-green-500">Yts Clone</h1>
            <div className="flex items-center relative">

                <input className="p-2 pl-8 rounded-full border border-gray-600 bg-transparent focus:outline-none focus:border-transparent " type="text" name="search" id="search" placeholder="Quick search" />
                <FiSearch className="w-4 h-4 absolute left-2.5 top-3.5 text-gray-600" />

                <ul className="flex items-center space-x-6 px-4">
                    <li className="font-semibold text-gray-700 hover:text-white"><a href="">Home</a></li>
                    <li className="font-semibold text-green-600"><a href="">4K</a></li>
                    <li className="font-semibold text-gray-700 hover:text-white"><a href="">Trending</a></li>
                    <li className="font-semibold text-gray-700 hover:text-white"><a href="">Browse Movie</a></li>
                </ul>


                <ul className="flex items-center pl-20">
                    <li className="font-semibold px-2"><a href="">Login</a></li>
                    <li className="font-semibold px-2"><a href="">Register</a></li>

                </ul>
            </div>

        </div>
    );
}
export default Navbar;