import React from 'react';


const About = () => {
    return (
        <div id='about' className='w-full h-full text-[#666f88]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-white'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Je suis passionnée et j'aime apprendre</p>
                    </div>
                    <div className='text-justify'>
                        <p>{"J’ai découvert le développement au cours de ma réorientation. Je m'intéresse particulièrement à la psychologie cognitive et à l'ergonomie de conception, et particulièrement sur des sujets comme la pédagogie, l'utilisation d'interfaces utilisateurs et plus exactement les interactions Homme-Machine. Tout de suite j’ai été passionné par les  métiers  du numérique et plus particulièrement de développeur et j’ai décidé découvrir ces nouveaux langages. D’abord le HTML et le CSS en autodidacte puis j’ai entrepris de suivre une formation en distanciel."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;