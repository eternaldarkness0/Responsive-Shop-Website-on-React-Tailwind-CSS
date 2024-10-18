import React from 'react'
import BannerImg from '../../assets/woman2.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { BsCreditCard2FrontFill } from 'react-icons/bs'


export const Banner = () => {
return (
    <section className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                {/* image */}
                <div data-aos='zoom-in'>
                    <img src={BannerImg} alt="img"
                    className='max-w-[400px] h-[350px] w-full mx-auto
                    drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                    />
                </div>

                {/* text section */}
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1
                    data-aos='fade-left'
                    className='text-3xl sm:text-4xl font-bold'
                    >Winter Sale up to 50% Off</h1>
                    <p
                    data-aos='fade-right'
                    className='text-sm text-gray-500 tracking-wide leading-5'
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>

                    <div className='flex flex-col gap-4 dark:text-white'>

                        <div
                        data-aos='fade-up'
                        data-aos-delay='100'
                        className='flex items-center gap-4'>
                            <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-orange-500' />
                            <p>Quality Products</p>
                        </div>

                        <div
                        data-aos='fade-up'
                        data-aos-delay='200'
                        className='flex items-center gap-4'>
                            <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-200 dark:bg-violet-500' />
                            <p>Fast Delivery</p>
                        </div>

                        <div
                        data-aos='fade-up'
                        data-aos-delay='300'
                        className='flex items-center gap-4'>
                            <BsCreditCard2FrontFill className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-green-500' />
                            <p>Easy Payment method</p>
                        </div>

                        <div
                        data-aos='fade-up'
                        data-aos-delay='400'
                        className='flex items-center gap-4'>
                            <MdOutlineLocalOffer className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200 dark:bg-yellow-500' />
                            <p>Get Offers</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
)
}
