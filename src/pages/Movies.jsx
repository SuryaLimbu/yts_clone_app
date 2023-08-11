import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Items from "../components/Items";
import axios from "axios";




const Movies = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5; // Number of items to display per page

    // Replace this 'data' array with your actual data
    const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the current page items
    const currentPageItems = data.slice(startIndex, endIndex);

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const [searchVal, setSearchVal] = useState('');
    const [searchData, setSearchData] = useState([]);


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // const data = Object.fromEntries(formData);
        setSearchVal(formData.get('search'));

    }
    // console.log(searchVal);

    useEffect(() => {
        axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${searchVal}`)
            .then(response => {
                setSearchData(response.data.data.movies)
                // console.log(response.data.data.movies);
            })
    })






    return (
        <>
            <div className="bg-black/90 h-auto py-10">
                <div className="w-full md:px-20 lg:px-80 text-white ">
                    <div className=" text-center">
                        <form onSubmit={onSubmit} style={{ marginTop: '25px' }}>
                            <div className='row'>
                                <input placeholder='Enter Your Query' type='text' style={{ margin: 0 }} className='text-black rounded py-2 px-4' id="search" name="search"></input>
                                <button className=" bg-green-500 py-2 px-2 ml-4 rounded hover:bg-green-600" type="submit" style={{ marginTop: '10px' }}>Submit

                                </button>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
            <div className=" bg-black/80 pb-20">
                <div className="w-full md:px-20 lg:px-80 text-white text-center py-10 ">
                    <h1 className="font-bold text-xl text-green-500">YIFY Movies (ordered by latest)
                    </h1>
                </div>

                <div className="tablet:px-10 tabletSc:px-20 laptop:px-60 desktop:px-80">


                    <div class="tablet:grid-cols-2 tabletSc:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 grid grid-cols-1 gap-4  text-white px-10 py-10">
                        <Items popularMovies={searchData} />

                    </div>
                    <div>
                        {/* Display the pagination component */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(data.length / itemsPerPage)}
                            onPageChange={handlePageChange}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Movies;