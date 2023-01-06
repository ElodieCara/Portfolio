import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);

    return (
        <div name='work' className='w-full h-full text-[#666f88]'>
            <div className='max-w-[1000px] mx-auto py-8 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-white'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Gird Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="h-64 bg-no-repeat bg-white bg-center  shadow-lg shadow-[#040c16] rounded-md group container flex justify-center text-center items-center mx-auto content-div"

                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 cover bg-size-cover bg-[#666f88] rounded-md h-full w-full text flex flex-col items-center justify-center">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                                            bg-gradient animate-gradient text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    {/* eslint-disable-next-line */}
                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                                            bg-gradient animate-gradient text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default Work;