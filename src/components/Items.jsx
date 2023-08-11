import React from "react";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Items = (props) => {
    return (
        <>
            {props.popularMovies.map((movie) => (
                <div>
                    <Link className="relative block group" to={`/infopage/${movie.id}`} >
                        <div className="h-80 rounded-lg bg-cover transition-opacity duration-300 hover:bg-opacity-50" style={{backgroundImage:`url(${movie.medium_cover_image})`}}>
                            <div className="flex h-80 flex-col items-center justify-center rounded-lg text-center text-white opacity-0 hover:opacity-100 hover:backdrop-blur-sm">
                                <FiStar className="text-green-500 fill-green-500 text-2xl" />
                                <h1 className="font-bold text-2xl">{movie.rating}/10</h1>
                                <h1 className="font-bold text-2xl">{movie.genres[0]}</h1>
                                <h1 className="font-bold text-2xl">{movie.genres[1]}</h1>
                                <button type="button" className="btn mt-4 rounded bg-green-500 px-4 py-2 hover:bg-green-600">View More</button>
                            </div>
                        </div>
                    </Link>

                    <div>
                        <p className="pt-1 text-lg font-semibold text-green-500">{movie.year}</p>
                        <h1 className="text-xl font-medium">{movie.title}</h1>
                    </div>
                </div>
            ))}

        </>
    )
}
export default Items;