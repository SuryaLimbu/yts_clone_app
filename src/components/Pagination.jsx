import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Function to handle previous page click
    const handlePrevious = () => {
        onPageChange(currentPage - 1);
    };

    // Function to handle next page click
    const handleNext = () => {
        onPageChange(currentPage + 1);
    };

    return (
        <div className="flex justify-center my-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-2 bg-gray-300 rounded"
            >
                Previous
            </button>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-2 bg-gray-300 rounded"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
