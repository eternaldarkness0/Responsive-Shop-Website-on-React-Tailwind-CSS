import React from 'react'
import Banner from '../../assets/orange-pattern.jpg'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}


export const Notification = () => {
return (
    <section
    data-aos='zoon-in'
    style={BannerImg}
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-white'>

        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1
                data-aos='fade-up'
                data-aos-delay='150'
                className='text-2xl text-center sm:text-4xl font-semibold'
                >Get Notified About New Products</h1>
                <input
                data-aos='fade-up'
                data-aos-delay='200'
                type="email"
                placeholder='Enter Your Email'
                className='w-full p-3 text-black' />
            </div>
        </div>
    </section>
)
}
