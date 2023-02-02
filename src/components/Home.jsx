import React from 'react';

// import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
    return (

        <div id='home' className='w-full h-screen flex items-center justify-center overflow-auto
        '>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className=' text-white'>Bonjour, je suis </p>
                <h1 className='text-2xl sm:text-7xl font-bold text-shadow text-white'>Elodie Caradeuc</h1>
                <h2 className='text-shadow text-2xl sm:text-3xl  font-bold text-[#8892b0]'>Je suis développeur, intégrateur web Junior</h2>
                <p className='font-bold text-[#666f88] py-4 max-w-[700px]'>Je viens de terminer ma formation de Développeuse Intégrateur Web chez OpenClassrooms et je suis à la recherche d'un poste comme développeuse Web.</p>
                <div>
                    <button className='relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group'>
                        <a href="#work">
                            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#666f88]">View projects</span>
                            <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                        </a>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;

