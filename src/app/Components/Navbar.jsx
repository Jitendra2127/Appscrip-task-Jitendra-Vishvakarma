"use client"
import { useState } from 'react';
import Image from 'next/image';
import Logo from "../../../public/header/logo.jpg";
import { RxCross2 } from "react-icons/rx";

import { BsBag } from "react-icons/bs";
import {
    AiOutlineHeart,
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineMenu
} from "react-icons/ai";



function Header() {
    const [toggle, setToggle] = useState(true)
    return (
        <div>

            <div className='max-lg:relative flex lg:px-20 px-4 py-4 lg:pt-12 pt-4 w-full h-fit justify-between lg:border-b-0 border-b-2'>

                <div className='flex items-center gap-2'>

                    {toggle ? (<AiOutlineMenu className="h-10 w-12 lg:hidden" onClick={() => setToggle(false)} />) : (<RxCross2 className="h-10 w-12 lg:hidden" onClick={() => setToggle(true)} />)}


                    <Image src={Logo} ></Image>
                </div>


                <div>
                    <h1 className='text-2xl font-bold'>LOGO</h1>
                </div>


                <div className='flex gap-2  *:h-6 *:w-6 items-center cursor-pointer'>

                    <AiOutlineSearch className='' />
                    <AiOutlineHeart className='' />
                    <BsBag className='' />
                    <AiOutlineUser className='lg:block hidden ' />
                    <select className='lg:block hidden outline-none cursor-pointer !h-auto !w-auto'>
                        <option value="ENG">ENG</option>
                        <option value="HIN">HIN</option>
                    </select>
                </div>
            </div>


            <div className={` lg:block  ${toggle ? "hidden" : "block"}  max-lg:absolute max-lg:bg-gray-200 max-lg:rounded-br-xl max-lg:w-[40%]  lg:py-8 py-6 border-b-2`}>

                <ul className=' flex lg:flex-row  flex-col justify-center lg:gap-16 gap-4 max-lg:ml-4 cursor-pointer'>

                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div className='w-full h-fit lg:hidden flex items-center gap-4 px-4 py-4'>

                <p className='text-gray-400 text-sm'>HOME</p>
                <div className='h-4 w-0.5 bg-black text-sm'></div>
                <p>SHOP</p>

            </div>

        </div>
    );
}

export default Header;
