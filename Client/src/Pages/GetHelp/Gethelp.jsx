import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdForwardToInbox } from 'react-icons/Md';
 


const Gethelp = () => {
    const getContact = (e) => {
        e.preventDefault()
    }
    return (
        <div className='w-10/12 mx-auto md:pt-24 pt-[100px] md:h-[800px] flex items-center '>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-20 items-center'>
                <div className='space-y-5'>
                    <h1 className='text-6xl font-markazi'>How to Contact For free</h1>

                    {/* icon contact  */}
                    <div className='space-y-3'>
                        <span className='flex gap-2 items-center '><BiSolidPhoneCall className='text-xl'></BiSolidPhoneCall><p>+8801865915640</p></span>
                        <span className='flex gap-2 items-center '><BiSolidPhoneCall className='text-xl'></BiSolidPhoneCall><p>+8801865915640</p></span>
                        <span className='flex gap-2 items-center '><MdForwardToInbox className='text-xl'></MdForwardToInbox><p>webcodeit@gmail.com</p></span>
                    </div>

                    <p className='font-md text-gray-600 md:w-3/4'>If you want to contact us and need any help fell free fillip the form and as soon as we are contact you.Our Support team provide free support and need to your any complement just shear our support member. </p>

                    <p className='font-md text-gray-600 md:w-3/4'>If you want to contact us and need any help fell free fillip the form and as soon as we are contact you.Our Support team provide free support and need to your any complement just shear our support member. </p>

                </div>
                <div>
                    <form className='md:w-[600px]  space-y-5'>
                        <input className='border w-full p-2' type='text' name='' placeholder='Enter Your Name'></input>
                        <input className='border w-full p-2' type='email' name='' placeholder='Enter Your Email'></input>
                        <textarea rows={6} className='border w-full p-2' placeholder='Type your text'></textarea>

                        <div className='flex justify-end'>
                            <button onClick={() => getContact()} className='text-md bg-[#FFAE00] p-2  font-semibold'>Get Free Quote</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Gethelp;