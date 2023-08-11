import React, { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }
    return (
        <>
            <div className="flex justify-between items-center bg-black text-white p-4 laptop:px-20 desktop:px-20 ">
                <h1 className="text-xl font-bold text-green-500"><Link to={'/'}>Yts Clone</Link></h1>
                <button className="laptop:hidden desktop:hidden" type="button" onClick={toggleMenu}><FiMenu className=" text-2xl" /></button>

                <div className="flex items-center relative hidden laptop:flex desktop:flex">
                    <input className="p-2 pl-8 rounded-full border border-gray-600 bg-transparent focus:outline-none focus:border-transparent " type="text" name="search" id="search" placeholder="Quick search" />
                    <FiSearch className="w-4 h-4 absolute left-2.5 top-3.5 text-gray-600" />

                    <ul className="flex items-center space-x-6 px-4">
                        <li className="font-semibold text-gray-700 hover:text-white"><Link to={`/`}>Home</Link></li>
                        <li className="font-semibold text-green-600"><a href="">4K</a></li>
                        <li className="font-semibold text-gray-700 hover:text-white"><a href="">Trending</a></li>
                        <li className="font-semibold text-gray-700 hover:text-white"><Link to={`movies`}>Browse Movie</Link></li>
                    </ul>


                    <div className=" space-x-2">
                        <button type="button" className="bg-green-500 px-4 py-2 font-semibold text-white rounded-lg">Login</button>
                        <button type="button" className="bg-green-500 px-4 py-2 font-semibold text-white rounded-lg">Register</button>
                    </div>
                </div>




            </div>
            {isMenuVisible && (
                <div className="nav-menu py-5 bg-black">
                    <div className="flex flex-col items-center text-center ">
                        <div className="relative">
                            <input className="p-2 pl-8 rounded-full border border-gray-600 bg-transparent focus:outline-none focus:border-transparent " type="text" name="search" id="search" placeholder="Quick search" />
                            <FiSearch className="w-4 h-4 absolute left-2.5 top-3.5 text-gray-600" />
                        </div>


                        <ul className="flex flex-col items-center py-4">
                            <li className="font-semibold text-gray-700 hover:text-white"><Link to={`/`}>Home</Link></li>
                            <li className="font-semibold text-green-600"><a href="">4K</a></li>
                            <li className="font-semibold text-gray-700 hover:text-white"><a href="">Trending</a></li>
                            <li className="font-semibold text-gray-700 hover:text-white"><Link to={`movies`}>Browse Movie</Link></li>
                        </ul>
                        <div className=" space-x-2">
                            <button type="button" className="bg-green-500 px-4 py-2 font-semibold text-white rounded-lg">Login</button>
                            <button type="button" className="bg-green-500 px-4 py-2 font-semibold text-white rounded-lg">Register</button>
                        </div>

                        {/* <ul className="flex items-center">
                        <li className="font-semibold px-2"><a href="">Login</a></li>
                        <li className="font-semibold px-2"><a href="">Register</a></li>

                    </ul> */}
                    </div>
                </div>
            )}
        </>

    );
}
export default Navbar;