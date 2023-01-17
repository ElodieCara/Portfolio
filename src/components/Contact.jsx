import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1000px] mx-auto w-full h-full flex justify-center items-center py-8'>
            <form method='POST' action="https://getform.io/f/a923b466-7e11-4a57-be86-367f9d312768" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-white text-[#666f88]'>Contact</p>
                    <p className='text-[#666f88] py-4'>Submit the form below or shoot me an email - ...</p>
                </div>
                <input className='bg-[#ffffff] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ffffff] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:[#494E5F] hover:border-[#8892b0]px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact