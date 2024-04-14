"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa6";
import { FaDotCircle } from 'react-icons/fa';
// import G_Pay from '../../public/Footer_Image/G_Pay.png';
import G_Pay from '../../../public/Footer_Image/G_Pay.png';
import MasterCard from '../../../public/Footer_Image/MasterCard.png';
import Pay_Pal from '../../../public/Footer_Image/Pay_Pal.png';
import Amex from '../../../public/Footer_Image/Amex.png';
import i_Pay from '../../../public/Footer_Image/i_Pay.png';
import pay from '../../../public/Footer_Image/pay.png';
import usa from '../../../public/Footer_Image/usa.png';

const FooterSection = () => {
    const Footer_data = [
        {
            title: "metta mouse",
            subtitle: [
                { title: "About Us" },
                { title: "Stories" },
                { title: "Artisans" },
                { title: "Bantigues" },
                { title: "Contact Us" },
                { title: "EU Compliances Docs" },
            ]
        },
        {
            title: "Quick Links",
            subtitle: [
                { title: "Orders & Shipping" },
                { title: "Join/Login as a Seller" },
                { title: "Payment & Pricing" },
                { title: "Return & Refunds" },
                { title: "FAQs" },
                { title: "Privacy Policy" },
                { title: "Terms & Conditions" },
            ]
        }
    ];

    const [submenuStates, setSubmenuStates] = useState(Array(Footer_data.length).fill(false));
    const[handlefollow,setHandleFollow]=useState(true)

    const handlesidemenufun = (index) => {
        setSubmenuStates(prevStates => {
            const updatedStates = [...prevStates];
            updatedStates[index] = !updatedStates[index];
            return updatedStates;
        });
    };

    

    return (
        <div className='bg-black text-white lg:px-20 px-4 lg:*:py-12 *:py-4'>
            <div className='flex lg:flex-row flex-col w-full justify-between '>
                <div className='w-full lg:space-y-12 md:space-y-8 space-y-4'>
                    <div className='space-y-3'>
                        <h2 className='lg:text-2xl text-xl font-semibold cursor-pointer'>BE THE FIRST TO KNOW</h2>
                        <p>Sign up for update from metta muse</p>
                    </div>
                    <div className='space-x-5 max-md:w-full flex '>
                        <input type="text" placeholder='Enter e-mail...' className='rounded outline-none lg:w-3/5 md:w-1/2 w-1/2 text-black p-3' />
                        <button className='border lg:px-10 md:px-6 px-2 py-3 rounded border-white hover:bg-white hover:text-black max-sm:w-1/2'>SUBSCRIBE</button>
                    </div>
                    <hr className='lg:hidden block' />
                </div>
                <div className='lg:w-1/2 w-full space-y-6 '>
                    <div className='space-y-3'>
                        <h2 className='text-2xl font-semibold cursor-pointer lg:block hidden'>CONTACT US</h2>
                        <h2 className='lg:text-2xl text-xl font-semibold cursor-pointer lg:hidden block'>CALL US</h2>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                        <hr className='lg:hidden block' />
                    </div>
                    <div className='space-y-3'>
                        <h2 className='lg:text-2xl text-xl font-semibold cursor-pointer'>CURRENCY</h2>
                        <div className='flex items-center gap-2'>
                            <Image src={usa} className="rounded-full h-12 w-12" alt='usa'/>
                            <FaDotCircle />
                            <p className='lg:text-3xl text-xl font-semibold'>USD</p>
                        </div>
                        <p className='lg:block hidden'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>
            <hr className='text-white !p-0 bg-white h-1' />
            <div className='grid lg:grid-cols-3 '>
                {Footer_data.map((ele, index) => (
                    <div className='' key={index}>
                        <div>
                            <ul className='space-y-4 max-lg:mt-4 text-[15px] font-semibold *:cursor-pointer'>
                                <div className='flex justify-between items-center'>
                                    <p className='lg:text-3xl text-2xl'>{ele.title}</p>
                                    <FaGreaterThan className={`lg:hidden block  ${submenuStates[index] ? "-rotate-90" : "rotate-90"} hover:cursor-pointer`} onClick={() => handlesidemenufun(index)} />
                                </div>
                                {ele.subtitle.map((element, subIndex) => (
                                    <li className={`font-normal lg:block ${submenuStates[index] ? "block" : "hidden"} mt-6`} key={subIndex}>{element.title}</li>
                                ))}
                                <hr className='lg:hidden block' />
                            </ul>
                        </div>
                    </div>
                ))}
                <div className='space-y-10 max-lg:mt-4'>
                    <div>
                        <div className='flex justify-between items-center'>

                        <h2 className='lg:text-2xl text-xl font-semibold cursor-pointer'>FOLLOW US</h2>
                        <FaGreaterThan className='lg:hidden block rotate-90 hover:cursor-pointer' onClick={()=>setHandleFollow(!handlefollow)}  />

                        </div>
                        <div className={` lg:flex  ${handlefollow?"hidden":"flex"} gap-4 cursor-pointer mt-6`}>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                                <AiFillInstagram className="h-7 w-7" />
                            </div>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                                <AiFillLinkedin className="h-7 w-7" />
                            </div>
                        </div>
                        <hr className='mt-4 lg:hidden block' />
                    </div>
                    <div className='space-y-3'>
                        <h2 className='lg:text-2xl text-xl font-semibold cursor-pointer'>metta muse ACCEPTS</h2>
                        <div className='flex gap-2 *:rounded *:object-cover *:w-full *:h-full *:bg-white'>
                            <div>
                                <Image src={G_Pay} alt='G_Pay' />
                            </div>
                            <div>
                                <Image src={MasterCard} alt='MasteCard' />
                            </div>
                            <div>
                                <Image src={Pay_Pal} alt='Pay_Pal' />
                            </div>
                            <div>
                                <Image src={Amex} alt='Amex' />
                            </div>
                            <div>
                                <Image src={i_Pay} alt='i_Pay' />
                            </div>
                            <div>
                                <Image src={pay} alt='pay' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center text-center'>
                <p className='text-white lg:text-xl text-sm'> Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
    );
};

export default FooterSection;
