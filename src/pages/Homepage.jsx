import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FiChevronsRight, FiDownload, FiStar } from "react-icons/fi";
import Items from "../components/Items";
import axios from "axios";

const Homepage = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [browserName, setBrowserName] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);


    // movies Data 
    const [popularMovies, setPopularMoviews] = useState([]);
    const [leatestMoviews, setLeatestMoviews] = useState([]);


    const url = "https://yts.mx/api/v2/";



    useEffect(() => {
        axios.get(url + 'list_movies.json?sort=seeds&limit=4;')
            .then(response => {
                setPopularMoviews(response.data.data.movies)
                // console.log(response.data.data.movies);
            })
            .catch(error => {
                console.error('Error fetching api: ', error);
            });
    }, [])
    const topMovies = popularMovies.length > 0 ? popularMovies.slice(0, 4) : [];
    // console.log(topMovies);

    // leatest moviews
    useEffect(() => {
        axios.get(url + 'list_movies.json?sort=year&limit=8;')
            .then(response => {
                setLeatestMoviews(response.data.data.movies)
            })

    }, [])
    // console.log(leatestMoviews);





    // console.log(popularMovies);
    const apiKey = 'bdb70d3681264a';
    useEffect(() => {
        // fetch ip address using the external api
        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                setIpAddress(response.data.ip)

            })

            .catch(error => {
                console.error('Error fetching IP address: ', error);
            });
        // Fetch country data based on the IP address using ipinfo.io API
        axios.get(`https://ipinfo.io/${ipAddress}?token=${apiKey}`)
            .then(response => {
                setCountry(response.data.country);
                setCity(response.data.city);
            })
            .catch(error => {
                console.error('Error fetching country:', error);
            });
    }, []);
    // console.log(country);


    useEffect(() => {
        // Detect browser name
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('edge') !== -1) {
            setBrowserName('Microsoft Edge');
        } else if (userAgent.indexOf('chrome') !== -1 && userAgent.indexOf('safari') !== -1) {
            setBrowserName('Google Chrome');
        } else if (userAgent.indexOf('safari') !== -1 && userAgent.indexOf('chrome') === -1) {
            setBrowserName('Apple Safari');
        } else if (userAgent.indexOf('firefox') !== -1) {
            setBrowserName('Mozilla Firefox');
        } else if (userAgent.indexOf('opera') !== -1 || userAgent.indexOf('opr') !== -1) {
            setBrowserName('Opera');
        } else if (userAgent.indexOf('trident') !== -1) {
            setBrowserName('Internet Explorer');
        } else {
            setBrowserName('Unknown');
        }

        // Event listener to update screen size on resize
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>

            <div className="">
                <div className="bg-[url('https://img.yts.mx/assets/images/movies/to_end_all_war_oppenheimer_the_atomic_bomb_2023/background.jpg')] h-auto bg-cover  pb-20">
                    <div className=" backdrop-blur-md h-auto w-full md:px-20 lg:px-80 text-white">

                        <div className="flex flex-col items-center text-center space-y-6">
                            <h1 className=" font-bold text-5xl mt-10">Download YTS YIFY movies: HD smallest size</h1>
                            <p className="w-2/3 py-6">Welcome to the official YTS.MX website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.</p>
                            <a href="http://" className=" text-blue-600">IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</a>

                        </div>
                        <div>
                            <div className="flex justify-between">
                                <div className="flex text-center items-center text-xl font-bold">
                                    <FiStar className=" text-green-600 fill-green-600" />
                                    <h1 className=" ml-2">
                                        Popular Downloads
                                    </h1>
                                </div>
                                <div className="flex text-center items-center text-xl font-bold">
                                    <FiStar className=" text-green-600 fill-green-600" />
                                    <h1 className=" ml-2">
                                        more featured...
                                    </h1>
                                </div>
                            </div>
                            <hr />
                            <div className="grid grid-cols-4 mt-2 gap-2">
                                <Items popularMovies={topMovies} />

                            </div>

                            {/* warning section */}
                            <div className="mt-10 border rounded-md border-green-500 p-10">
                                <h1 className=" font-bold text-4xl pb-5">Warning!‌‌‌ Download only with VPN...</h1>
                                <span>Downloading torrents is risky for you: your IP and leaked private data being actively tracked by your ISP and Government Agencies Protect yourself from expensive lawsuits and fines NOW! You must use a VPN like Guard. It is the only way to download torrents fully anonymous by encrypting all traffic with zero logs.</span>
                                <span>
                                    Personal data disclosing your real identity: your IP address,  <span className=" bg-red-600">{ipAddress}</span>   is exposed, which points directly to your location in  <span className=" bg-red-600">{city} {country} </span> . You are browsing with  <span className=" bg-red-600">{browserName} </span>, resolution  <span className=" bg-red-600">{screenWidth}x{screenHeight}px</span> ,  4-cores CPU .
                                </span>
                                <br />
                                <span>″Do not risk it! Protect yourself right now by downloading Guard VPN″ - William</span>
                                <br />
                                <button type="button" className="btn bg-green-500 px-5 text-2xl font-md mt-5 py-2 rounded-full items-center"><a href="http://"><FiDownload className="flex inline-flex items-center justify-center" /> Download Guard VPN</a></button>
                            </div>
                        </div>
                    </div >
                </div >
                {/* Leatest Movies */}
                < div className="mt-10 bg-dark px-80" >
                    <div className="flex justify-between">
                        <h1 className=" font-bold text-lg">Latest YIFY Movies Torrents</h1>
                        <h1 className=" text-gray-400 font-bold hover:text-black"> <a href="http://">Browse All <FiChevronsRight className="flex inline-flex items-center" /></a></h1>
                    </div>
                    <div className="grid grid-cols-4 pt-10">
                        <Items popularMovies={leatestMoviews} />
                    </div>
                </div >




            </div >
        </div >
    )
}

export default Homepage;