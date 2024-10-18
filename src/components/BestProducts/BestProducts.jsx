import React from 'react'
import Img1 from '../../assets/shirt1.png'
import Img2 from '../../assets/shirt2.png'
import Img3 from '../../assets/shirt3.png'
import { FaStar } from 'react-icons/fa';

const BestProductsData = [
    {
        id: 1,
        img: Img2,
        title: 'Printed shirt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },

    {
        id: 2,
        img: Img1,
        title: 'Casual Wear',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },

    {
        id: 3,
        img: Img3,
        title: 'Women shirt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
];

export const BestProducts = ({handleOrderBtn}) => {
return (
    <section id='toprated'>
        <div className='container'>
        {/* text section */}
            <div className='text-left mb-28'>
                <p
                data-aos='fade-left'
                className='text-lg text-primary'>Top Rated Products for you</p>
                <h1
                data-aos='fade-right'
                className='text-3xl font-bold'>Best Products</h1>
                <p
                data-aos='fade-up'
                className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>
        {/* cards section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {BestProductsData.map((data) => (
                <div
                key={data.id}
                data-aos='zoom-in'
                className='group rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 max-w-[300px]'>
                    {/* image section */}
                    <div className='h-[100px]'>
                        <img src={data.img} alt="img"
                        className='max-w-[140px] block mx-auto
                        -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                        />
                    </div>
                    {/* text section */}
                    <div className='p-4 text-center'>
                        <div className='flex w-full items-center justify-center gap-1'>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        </div>
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm'>{data.description}</p>
                        <button
                        className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                        onClick={handleOrderBtn}
                        >Order Now</button>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </section>
)
}
