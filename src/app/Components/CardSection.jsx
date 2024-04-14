"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaGreaterThan } from 'react-icons/fa6';
import { FaCheck } from "react-icons/fa6";

const CardSection = ({ data }) => {
    const Menu = [
        {
            title: "IDEAL FOR",
            submenu: true,
            submenuItems: [
                { title: "Men" },
                { title: "Women" },
                { title: "Baby & Kids" },
            ]
        },
        {
            title: "OCCASION",
            submenu: true,
            submenuItems: [
                { title: "Men" },
                { title: "Women" },
                { title: "Baby & Kids" },
            ]
        },
        {
            title: "WORK",
            submenu: true,
            submenuItems: [
                { title: "Men" },
                { title: "Women" },
                { title: "Baby & Kids" },
            ]
        },
        {
            title: "FABRIC",
            submenu: true,
            submenuItems: [
                { title: "Men" },
                { title: "Women" },
                { title: "Baby & Kids" },
            ]
        },
        {
            title: "SEGMENT",
            submenu: true,
            submenuItems: [
                { title: "Men" },
                { title: "Women" },
                { title: "Baby & Kids" },
            ]
        },
        {
            title: "SUITABLE FOR",
            submenu: true,
            submenuItems: [
                { title: "Men" },
                { title: "Women" },
                { title: "Baby & Kids" },
            ]
        },
        {
            title: "RAW MATERIALS",
            submenu: true,
            submenuItems: [
                { title: "Men" },
                { title: "Women" },
                { title: "Baby & Kids" },
            ]
        },
        {
            title: "PATTERN",
            submenu: true,
            submenuItems: [
                { title: "Men" },
                { title: "Women" },
                { title: "Baby & Kids" },
            ]
        },
    ];

    const [handlesidebar, setHandleSidebar] = useState(false);
    const [submenuStates, setSubmenuStates] = useState(Array(Menu.length).fill(false));

    const handlesidebarfun = () => {
        setHandleSidebar(!handlesidebar);
    };

    const handlesidemenufun = (index) => {
        const updatedStates = [...submenuStates];
        updatedStates[index] = !updatedStates[index];
        setSubmenuStates(updatedStates);
    };



    const [heartClicked, setHeartClicked] = useState(Array(data.length).fill(false));

    const handleHeartClick = (index) => {
        const updatedHeartClicked = [...heartClicked];
        updatedHeartClicked[index] = !updatedHeartClicked[index];
        setHeartClicked(updatedHeartClicked);
    };

    const[recommended,setRecommended]=useState("RECOMMENDED");
    const [recommendedtoggle,setRecommendedToggle]=useState(true)
    const recommendedfun=(e)=>{
        setRecommended(e.target.textContent)
       
    }
    const recommendedTogglefun=()=>{
        setRecommendedToggle(!recommendedtoggle)



    }

    return (
        <>
            <div className='lg:px-20 px-4 '>
                <hr />
                <div className=' flex justify-between items-center p-4'>
                    <div>
                        <div className='flex lg:gap-4 gap-2 lg:*:text-xl font-bold '>
                            <p className='lg:block hidden'> {data.length} ITEMS</p>
                            <div className='lg:block hidden '>

                                <p onClick={handlesidebarfun} className='gap-2 flex justify-center items-center hover:cursor-pointer'> <FaGreaterThan className={` ${handlesidebar ? "rotate-180" : "rotate-0"} `} />  {handlesidebar ? "HIDE" : "SHOW"} FILTER</p>
                            </div>
                            <p className='lg:hidden block' onClick={handlesidebarfun}> FILTER</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <ul  className='lg:*:text-xl flex justify-center items-center gap-2 font-bold outline-none  *:cursor-pointer' onClick={recommendedTogglefun}>
                            <li>{recommended}</li>
                            <FaGreaterThan className={` ${recommendedtoggle?"rotate-90":"-rotate-90"} scale-75`} />


                        </ul>
                        <ul className={`${recommendedtoggle?"hidden":"block"} absolute   bg-white z-10 border shadow lg:space-y-6 space-y-2 lg:p-2 p-2 w-fit right-0  shadow-black lg:*:text-[15px] *:text-[10px] mt-2 font-semibold outline-none  *:flex  *:justify-between  *:items-center *:cursor-pointer  `}>
                            <li className='hover:font-bold' onClick={recommendedfun}><FaCheck /> <p>RECOMMENDED</p></li>
                            <li className='hover:font-bold' onClick={recommendedfun}><FaCheck /> <p>NEWEST FIRST</p></li>
                            <li className='hover:font-bold' onClick={recommendedfun}><FaCheck /> <p>POPULAR</p></li>
                            <li className='hover:font-bold' onClick={recommendedfun}><FaCheck /> <p>PRICE : HIGH TO LOW</p></li>
                            <li className='hover:font-bold' onClick={recommendedfun}><FaCheck /> <p>PRICE : LOW TO HIGH</p></li>

                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className='w-full flex gap-3  lg:px-20 px-4 my-6' >
                <div className={`lg:w-[25%] w-1/2  ${!handlesidebar ? "hidden" : ""}`}>
                    <div className=' flex items-center gap-2 py-8'>
                        <input type="checkbox" className='rounded-[0px] scale-[1]' /><p className='lg:text-xl text-[12px] font-semibold'>CUSTOMIZBLE</p>
                    </div>
                    <hr />
                    <ul>
                        {Menu.map((ele, index) => (
                            <>

                                <div key={index} className='lg:py-6 py-4 lg:space-y-4 space-y-2'>
                                    <li className='flex justify-between items-center'>
                                        <div className='text-black'>
                                            <ul className='font-semibold lg:text-xl text-[11px] '>{ele.title}</ul>


                                            <p className='lg:text-xl text-[11px]'>All</p>

                                        </div>
                                        <div>
                                            <FaGreaterThan className={`  ${submenuStates[index] ? "-rotate-90" : "rotate-90"}  text-gray-500 hover:cursor-pointer `} onClick={() => handlesidemenufun(index)} />
                                        </div>
                                    </li>
                                    {ele.submenu && submenuStates[index] && (
                                        <>
                                            <p className='underline hover:cursor-pointer'>Unselected all</p>
                                            <ul className='space-y-2'>
                                                {ele.submenuItems.map((submenu, subIndex) => (
                                                    <li key={subIndex}>
                                                        <input type="checkbox" className='rounded-[0px] scale-[1] hover:cursor-pointer ' />  {submenu.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                                <hr />
                            </>
                        ))}
                    </ul>
                </div>
                <div className=' w-full '>
                    <div className={`grid ${handlesidebar ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}  ${handlesidebar ? 'grid-cols-1' : 'grid-cols-2'} gap-2`}>
                        {data.map((products, index) => (
                            <div key={index} className='space-y-1'>
                                <div className='  bg-[#F3F3F3] flex justify-center items-center py-12 px-4' >
                                    <Image src={products.image} width={150} height={150} className='w-44 lg:h-52 h-28  mix-blend-multiply ' alt={products.title} />
                                </div>
                                <h3 className='text-xl font-semibold'>{products.title.slice(0, 20)} ....</h3>
                                <p className='text-xl'>{products.category}</p>
                                <div className='flex gap-3'>
                                    <div className=''>
                                        <span className='underline hover:cursor-pointer'>Sign in</span><span> or Create an account to see pricing</span>
                                    </div>
                                    <span onClick={() => handleHeartClick(index)} >
                                        {
                                            heartClicked[index] ? (<FaHeart
                                                size={30}
                                                className={`hover:cursor-pointer text-red-400 `}

                                            />) : (<><CiHeart
                                                size={30}
                                                className={`hover:cursor-pointer text-black bg-red-500}`}

                                            /></>)
                                        }

                                    </span>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardSection;
