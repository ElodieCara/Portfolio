import React from 'react';
import Sass from '../assets/sass.png'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
    return (
        <div id='skills' className='w-full h-full  text-[#666f88]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full gap-8'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-white '>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 items-center'>
                    {/* <div className='relative flex justify-center items-center flex-wrap py-50 gap-4'> */}
                    <div className='splash'>
                        <div className="content">
                            <div className="icone">
                                <img className='w-10 mx-auto py-4' src={HTML} alt="HTML icon" />
                            </div>
                            <p className='my-2 bg-[#FF3D12]'>HTML</p>
                        </div>
                    </div>
                    <div className='splash'>
                        <div className="content">
                            <div className="icone">
                                <img className='w-10 mx-auto py-4' src={CSS} alt="CSS icon" />
                            </div>
                            <p className='my-4 bg-blue-800'>CSS</p>
                        </div>
                    </div>
                    <div className='splash'>
                        <div className="content">
                            <div className="icone">
                                <img className='w-10 mx-auto py-4' src={JavaScript} alt="JavaScript icon" />
                            </div>
                            <p className='my-4 bg-yellow-400'>JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className='splash'>
                        <div className="content">
                            <div className="icone">
                                <img className='w-10 mx-auto py-4' src={ReactImg} alt="React icon" />
                            </div>
                            <p className='my-4 bg-blue-400'>REACT</p>
                        </div>
                    </div>
                    <div className='splash'>
                        <div className="content">
                            <div className="icone">
                                <img className='w-10 py-4 mx-auto' src={Sass} alt="Sass icon" />
                            </div>
                            <p className='my-4 bg-pink-400'>Sass</p>
                        </div>
                    </div>
                    <div className='splash'>
                        <div className="content">
                            <div className="icone">
                                <img className='w-10 mx-auto py-4' src={Node} alt="Node JS icon" />
                            </div>
                            <p className='my-4 bg-green-500'>NODE JS</p>
                        </div>
                    </div>
                    <div className='splash'>
                        <div className="content">
                            <div className="icone">
                                <img className='w-10 mx-auto py-4' src={Mongo} alt="Mongodb icon" />
                            </div>
                            <p className='my-4 bg-green-800'>MONGO DB</p>
                        </div>
                    </div>
                    <div className='splash'>
                        <div className="content">
                            <div className="icone">
                                <img className='w-10 mx-auto py-4' src={Tailwind} alt="tailwind icon" />
                            </div>
                            <p className='my-4 bg-blue-300'>TAILWIND</p>
                        </div>
                    </div>
                    {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                        <p className='my-4'>FIREBASE</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Skills;