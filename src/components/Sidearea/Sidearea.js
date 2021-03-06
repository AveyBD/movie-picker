import React from 'react';

const Sidearea = ({wishList}) => {
    return (
        <div>
            <div className="h-screen sticky top-0 border-2 border-green-200 rounded shadow">
                <h2 className='text-center font-bold text-2xl border-2 border-green-600 rounded'>Your List</h2>
            </div>
        </div>
    );
};

export default Sidearea;