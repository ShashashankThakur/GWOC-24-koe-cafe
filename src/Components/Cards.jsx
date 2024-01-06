import React from 'react';
// import Fade from 'react-reveal/Fade';
import imgBread from '../Images/bread.png';
import imgCheese from '../Images/cheese.png';
import imgCoffee from '../Images/about.png';

const Cards = () => {
    return (
        <div>
            <div className='w-full bg-[#3B1C0A] pt-8 mb-0'>
                <h1 className="text-4xl font-semibold text-center lg:mt-14 mt-24 mb-8 text-white">Menu</h1>
                <div className='w-full px-4 bg-transparent md:mb-[-10rem] mb-[-6rem]'>
                    <div className='max-w-[1040px] mx-auto flex justify-center gap-0'>
                        <div className='flex'>
                            {/* <Fade bottom> */}
                            <div className='lg:h-72 lg:w-72 md:h-60 md:w-60 w-28 h-40 flex flex-col items-center shadow-2xl bg-[#b89d65] p-4 my-4 rounded-tl rounded-bl hover:scale-105 duration-300 hover:z-10 hover:rounded'>
                                <div className='w-[75%] h-[75%] flex items-center justify-center mx-auto'>
                                    <img
                                        className='h-auto w-full object-cover bg-transparent'
                                        src={imgCoffee}
                                        alt="bread"
                                    />
                                </div>
                                <h2 className='lg:text-2xl text-m font-bold text-center py-4 text-[#2c1b13]'>Premium coffee inhouse roasting</h2>
                            </div>
                            {/* </Fade>
                            <Fade> */}
                            <div className='lg:h-72 lg:w-72 md:h-60 md:w-60 w-28 h-40 flex flex-col items-center shadow-2xl bg-[#513726] p-4 my-4 hover:scale-105 duration-300 hover:z-10 hover:rounded'>
                                <div className='w-[75%] h-[75%] flex items-center justify-center mx-auto'>
                                    <img
                                        className='h-auto w-auto object-cover bg-transparent'
                                        src={imgBread}
                                        alt="coffee"
                                    />
                                </div>
                                <h2 className='lg:text-2xl text-m font-bold text-center py-4 text-[#C88755]'>Artisinal bread making</h2>
                            </div>
                            {/* </Fade>
                            <Fade right> */}
                            <div className='lg:h-72 lg:w-72 md:h-60 md:w-60 w-28 h-40 flex flex-col items-center shadow-2xl bg-[#2c1b13] p-4 my-4 rounded-tr rounded-br hover:scale-105 duration-300 hover:z-10 hover:rounded'>
                                <div className='w-[75%] h-[75%] flex items-center justify-center mx-auto'>
                                    <img
                                        className='h-auto w-auto object-cover mx-auto bg-transparent'
                                        src={imgCheese}
                                        alt="cheese"
                                    />
                                </div>
                                <h2 className='lg:text-2xl text-m font-bold text-center py-4 text-yellow-600'>High quality cheese</h2>
                            </div>
                            {/* </Fade> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[190px] bg-[#ece0d1] mt-0'></div>
        </div>
    );
};

export default Cards;
