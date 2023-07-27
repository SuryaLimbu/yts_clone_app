import React from "react";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Items = (props) => {
    return (
        <>
            {props.popularMovies.map((movie) => (
                <div className="flex flex-col items-center justify-center mb-4">
                    <Link className="relative block group" to={`/infopage/${movie.id}`} >
                        <img className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50" src={movie.large_cover_image} alt="" srcset="" />
                        <div className="relative">
                            <figcaption className="flex flex-col items-center justify-center space-y-4 opacity-0 hover:opacity-100 p-10 text-white">
                                <FiStar className="text-green-500 fill-green-500 text-2xl" />
                                <h1 className=" font-bold text-2xl">{movie.rating}/10</h1>
                                <h1 className=" font-bold text-2xl">{movie.genres[0]}</h1>
                                <h1 className=" font-bold text-2xl">{movie.genres[1]}</h1>
                                <button type="button" className="btn bg-green-500 rounded-sm px-4 py-1"><Link to={`/infopage/${movie.id}`}>See more</Link></button>
                            </figcaption>
                        </div>
                    </Link>

                    <div className="text-left">
                        <h1 className=" font-bold hover:text-slate-500"><Link to={`/infopage/${movie.id}`}>{movie.title}</Link></h1>
                        <p className=" text-gray-400">{movie.year}</p>
                    </div>
                </div>
            ))}

        </>
    )
}
export default Items;