import React from 'react';
import imgBread from '../Images/breadCard.png';
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
                            <div className='lg:h-60 lg:w-72 md:h-64 md:w-56 w-28 h-60 flex flex-col items-center shadow-2xl bg-[#b89d65] p-4 my-4 rounded-tl rounded-bl hover:scale-105 duration-300 hover:z-10 hover:rounded'>
                                {/* <h2 className='lg:text-2xl text-m font-bold text-center py-4 text-[#2c1b13]'>Coffees</h2> */}
                                <div className='w-[75%] h-full flex flex-col items-center justify-center mx-auto'>
                                    <div className='w-full h-[75%] p-0 m-0 flex flex-col items-center justify-center mx-auto'>
                                        <img
                                        className='h-auto w-[75%] object-cover bg-transparent'
                                        src={imgCoffee}
                                        alt="bread"
                                        />
                                    </div>
                                    <p className='w-full h-[25%] text-center text-[#2c1b13] font-semibold md:text-base text-xs flex items-center justify-center p-0 m-0'>Premium in-house roasted coffee</p>
                                </div>
                            </div>
                            <div className='lg:h-60 lg:w-72 md:h-64 md:w-56 w-28 h-60 flex flex-col items-center shadow-2xl bg-[#513726] p-4 my-4 hover:scale-105 duration-300 hover:z-10 hover:rounded'>
                                {/* <h2 className='lg:text-2xl text-m font-bold text-center py-4 text-[#C88755]'>Breads</h2> */}
                                <div className='w-[75%] h-full flex flex-col items-center justify-center mx-auto gap-0'>
                                    <div className='w-full h-[75%] p-0 m-0 flex flex-col items-center justify-center mx-auto'>
                                        <img
                                        className='h-auto w-full object-cover bg-transparent'
                                        src={imgBread}
                                        alt="coffee"
                                        />
                                    </div>
                                    <p className='w-full h-[25%] text-center text-[#C88755] font-semibold md:text-base text-xs flex items-center justify-center p-0 m-0'>Artisanal bread making</p>
                                </div>
                            </div>
                            <div className='lg:h-60 lg:w-72 md:h-64 md:w-56 w-28 h-60 flex flex-col items-center shadow-2xl bg-[#2c1b13] p-4 my-4 rounded-tr rounded-br hover:scale-105 duration-300 hover:z-10 hover:rounded'>
                                {/* <h2 className='lg:text-2xl text-m font-bold text-center py-4 text-yellow-600'>Cheeses</h2> */}
                                <div className='w-[75%] h-full flex flex-col items-center justify-center mx-auto'>
                                    <div className='w-full h-[75%] p-0 m-0 flex flex-col items-center justify-center mx-auto'>
                                        <img
                                        className='h-auto w-[75%] object-cover mx-auto bg-transparent'
                                        src={imgCheese}
                                        alt="cheese"
                                        />
                                    </div>
                                    <p className='w-full h-[25%] text-center text-yellow-600 font-semibold md:text-base text-xs flex items-center justify-center p-0 m-0'>Gourmet cheese</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[190px] bg-[#ece0d1] mt-0'></div>
        </div>
    );
};

export default Cards;
