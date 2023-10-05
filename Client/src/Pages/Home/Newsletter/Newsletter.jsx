import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const handleEmail = () => {
        if (email) {
            toast.success('Thank You !! Your Email Subscribe is done')
        }
    }
    return (
        <div className='w-10/12 mx-auto '>
            <div className=' flex flex-col justify-center items-center my-10 border p-10 boxNews  '>
                <div className='w-full text-center space-y-3'>
                    <h2 className='text-6xl font-markazi'>If your need Full Stack Web Application ?  Contact Us</h2>
                    <p className='text-md'>We are making to scrath to code in web application or need make use CMS website for your Business Contact Us..</p>

                    <span className="flex w-5/12 mx-auto    text-2xl">
                        <input
                            className="field w-full  text-base outline-none px-2 text-gray-700  rounded-l-sm  "
                            type="text"
                            placeholder="user@gmail.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button onClick={handleEmail} disabled={!email} className="bg-indigo-500 w-32  text-center text-gray-200 py-2 px-5 rounded-r-sm font-markazi">
                            Subscribe
                        </button>
                    </span>

                </div>

            </div>
        </div>
    );
};

export default Newsletter;