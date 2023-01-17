import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const location = useLocation();
    const handleClick = () => setNav(!nav)

    useEffect(() => {
        // Fermer le menu mobile lorsque l'utilisateur navigue vers une autre page
        setNav(false);
    }, [location.pathname]);


    return (
        <div className='z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#494E5F] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo" style={{ width: '180px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#work'>Work</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            {/* Hamburger */}
            <div onClick={() => setNav(!nav)} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#494E5F] flex flex-col justify-center items-center'}>
                <li onClick={handleClick} className='py-6 text-4xl'><a href='#home'>Home</a></li>
                <li onClick={handleClick} className='py-6 text-4xl'><a href='#about'>About</a></li>
                <li onClick={handleClick} className='py-6 text-4xl'><a href='#skills'>Skills</a></li>
                <li onClick={handleClick} className='py-6 text-4xl'><a href='#work'>Work</a></li>
                <li onClick={handleClick} className='py-6 text-4xl'><a href='#contact'>Contact</a></li>
            </ul>


            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between itelms-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full color-white text-white'
                            href="https://www.linkedin.com/in/e-cara">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between itelms-center ml-[-100px] hover:ml-[-10px] duration-300 '>
                        <a className='flex justify-between items-center w-full color-white text-white'
                            href="https://github.com/ElodieCara">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between itelms-center ml-[-100px] hover:ml-[-10px] duration-300 '>
                        <a className='flex justify-between items-center w-full  color-white text-white'
                            href="mailto:caradeuc.elodie@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between itelms-center ml-[-100px] hover:ml-[-10px] duration-300 '>
                        <a className='flex justify-between items-center w-full  color-white text-white'
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;