import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import imgCoffee1 from '../Images/coffee1.jpg';
import imgCoffee2 from '../Images/coffee2.jpg';
import imgCoffee3 from '../Images/coffee3.jpg';
import imgCoffee4 from '../Images/coffee4.jpg';
import imgCoffee5 from '../Images/coffee5.jpg';
import imgCoffee6 from '../Images/coffee6.jpg';
import imgCoffee7 from '../Images/coffee7.jpg';

export const CardCoffee = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCoffee1}
                            alt="coffee1"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCoffee2}
                            alt="coffee2"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCoffee3}
                            alt="coffee3"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCoffee4}
                            alt="coffee4"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCoffee5}
                            alt="coffee5"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCoffee6}
                            alt="coffee6"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCoffee7}
                            alt="coffee7"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCoffee