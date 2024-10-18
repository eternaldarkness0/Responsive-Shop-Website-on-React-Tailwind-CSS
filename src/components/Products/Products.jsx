import React from 'react'
import Img1 from '../../assets/woman1.png'
import Img2 from '../../assets/woman2.jpg'
import Img3 from '../../assets/woman3.jpg'
import Img4 from '../../assets/woman4.jpg'
import { FaStar } from 'react-icons/fa'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Women Ethnic',
        color: 'White',
        rating: 4.9,
        aosDelay: '0',
    },

    {
        id: 2,
        img: Img2,
        title: 'Women western',
        color: 'Red',
        rating: 4.5,
        aosDelay: '200',
    },

    {
        id: 3,
        img: Img3,
        title: 'Goggles',
        color: 'Brown',
        rating: 4.7,
        aosDelay: '400',
    },

    {
        id: 4,
        img: Img4,
        title: 'Printed T-Shirt',
        color: 'Yellow',
        rating: 4.4,
        aosDelay: '600',
    },

    {
        id: 5,
        img: Img1,
        title: 'Fashin T-Shirt',
        color: 'Pink',
        rating: 4.5,
        aosDelay: '800',
    },
]


export const Products = () => {
return (
    <section id='best' className='mt-14 mb-12'>
        <div className='container'>
            {/* text section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p
                data-aos='fade-left'
                className='text-lg text-primary'>Top Selling Products for you</p>
                <h1
                data-aos='fade-right'
                className='text-3xl font-bold'>Products</h1>
                <p
                data-aos='fade-up'
                className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>

            {/* cards section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>

                {ProductsData.map((data) => (
                    <div
                    data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                    className='space-y-3'
                    key={data.id}>
                        <img src={data.img} alt="img"
                        className='h-[220px] w-[150px] object-cover rounded-md'
                        />
                        <div>
                            <h3 className='font-semibold'>{data.title}</h3>
                            <p className='text-sm text-gray-600'>{data.color}</p>
                            <div className='flex items-center gap-1'>
                                <FaStar
                                className='text-yellow-400'/>
                                <span>{data.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}

                </div>
                {/* button */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white
                    px-5 py-1 rounded-md hover:scale-105 duration-300'>View All</button>
                </div>
            </div>
        </div>
    </section>
)
}
