import React from 'react'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import { DarkMode } from './DarkMode'


export const Navbar = ({handleOrderBtn}) => {
return (
    <nav className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>

        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                {/* logo */}
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={Logo} alt="logo"
                        className='w-10'
                        />
                        ShopLink
                    </a>
                </div>

                {/* upper navbar */}
                <div className='flex justify-between items-center gap-4'>
                    <div className='group relative hidden sm:block'>
                        <input type="text" placeholder='Search'
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px] focus:w-[300px]
                        duration-300 transition-all rounded-full border border-gray-300
                        px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:text-black'
                        />
                        <IoMdSearch
                        className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'
                        />
                    </div>

                    <button
                    onClick={() => handleOrderBtn()}
                    className='bg-gradient-to-r from-primary to-secondary
                    transition-all duration-200 text-white py-1 px-4 rounded-full
                    flex items-center gap-3 group'
                    >
                    <span
                    className='hidden group-hover:block transition-all duration-200'
                    >Order
                    </span>
                    <FaCartShopping
                    className='text-xl text-white drop-shadow-sm cursor-pointer'
                    />
                    </button>

                    {/* dark mode */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>


        {/* lower navbar */}
        <div className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-2 md:gap-4'>
                    <li>
                        <a href="#home" className='inline-block px-4 hover:text-primary duration-200'>Home</a>
                    </li>
                    <li>
                        <a href="#toprated" className='inline-block px-4 hover:text-primary duration-200'>Top Rated</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block px-4 hover:text-primary duration-200'>Kids Wear</a>
                    </li>
                    <li>
                        <a href="#toprated" className='inline-block px-4 hover:text-primary duration-200'>Mens Wear</a>
                    </li>
                    <li>
                        <a href="#testimonials" className='inline-block px-4 hover:text-primary duration-200'>Testimonials</a>
                    </li>

                {/* dropdown links */}
                <li className='group relative cursor-pointer'>
                    <a href="#"
                    className='flex items-center gap-[2px]
                    py-2'
                    >Trending Products
                    <span>
                        <FaCaretDown
                        className='transition-all duration-200
                        group-hover:rotate-180'
                        />
                    </span>
                    </a>
                    <div className='absolute z-[-999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
                        <ul>
                                <li>
                                    <a href="#toprated" className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>Top Rated</a>
                                </li>
                                <li>
                                    <a href="#best" className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>Best Selling</a>
                                </li>
                                <li>
                                    <a href="#toprated" className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>Trending Products</a>
                                </li>
                        </ul>
                    </div>
                </li>

            </ul>
        </div>

    </nav>
)
}
