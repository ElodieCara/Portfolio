import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen flex items-center justify-center overflow-auto
        '>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className=' text-white'>Bonjour, je suis </p>
                <h1 className='text-2xl sm:text-7xl font-bold text-shadow text-white'>Elodie Caradeuc</h1>
                <h2 className='text-shadow text-2xl sm:text-3xl  font-bold text-[#8892b0]'>Je suis un développeur, intégrateur web Junior</h2>
                <p className='font-bold text-[#666f88] py-4 max-w-[700px]'>Je viens de terminer ma formation de Développeuse Intégrateur Web chez OpenClassrooms et je suis à la recherche d'un poste comme développeuse Web.</p>
                <div>
                    <button className='text-shadow text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#494E5F] hover:border-[#494E5F]'>
                        View Work
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


// bg-gradient-to-r
//         from-blue-300
//         to-orange-100
//         via-purple-200
// via-orange-200
// // via-yellow-100
// via-green-200