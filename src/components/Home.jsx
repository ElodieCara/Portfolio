import React from 'react';

import { HiArrowNarrowRight } from 'react-icons/hi'


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
                    <button className='splash text-shadow text-white w-[120px] h-[100px]'>
                        <a href="#work"> View Work</a>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;

