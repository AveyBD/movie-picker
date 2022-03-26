import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h2 className="mt-5 px-5 mx-10 rounded bg-green-400 text-white text-2xl font-bold text-center">Questions Answer</h2>
            <div className='grid grid-cols-2 mx-15'>
                <div><h2 className='text-center font-semibold text-xl'>How React Works?</h2>
                <p className='px-10'>React is a Javascript library by Facebook. React has bought huge changes in web industry by introducing virtual dom. Actually react works with virtual dom. It dont change the actual browser dom. React has a awesome thing called component. With those reuseable component, we can make complex site.</p></div>
                <div><h2  className='text-center font-semibold text-xl'>Props Vs State</h2>
                <p className='px-10'>Props and State are kind of related. We can pass data using props on the other hand in state we store the data. Props are immutable, we cant change but only read the props. As we store data in state, it is mutable. We can read and change data in state. </p></div>
            </div>
        </div>
    );
};

export default FAQ;