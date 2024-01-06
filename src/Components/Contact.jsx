import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center lg:px-32 px-5 pt-8 pb-8 bg-[#3B1C0A]">
            <h1 className="text-4xl font-semibold text-center lg:mt-14 mt-24 mb-8 text-white">Find Us Here</h1>

            <div className="md:w-1/2">
                <div className='relative h-96 mt-4'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52508.16350801297!2d72.74383039077205!3d21.14936623477984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05327ccb9c45f%3A0xe73ce99228e97293!2sKOE%20-%20The%20Kafe!5e0!3m2!1sen!2sin!4v1704193117252!5m2!1sen!2sin'
                        className='w-full h-full pb-16'
                        loading='lazy'
                        referrerpolicy='no-referrer-when-downgrade'
                        allowFullScreen
                        title='Coffee Shop Location'
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
