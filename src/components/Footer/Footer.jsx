import React from 'react'
import FooterLogo from '../../assets/logo.png'
import FooterBanner from '../../assets/footer-pattern.jpg'
import { FaInstagram, FaLocationArrow, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'

const FooterImg = {
    backgroundImage: `url(${FooterBanner})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}

export const Footer = () => {
return (
    <footer style={FooterImg} className='text-white'>
        <div className='container'>
            <div
            data-aos='zoom-in'
            className='grid md:grid-cols-3 pb-44 pt-5'>
                {/* footer logo */}
                <div className='py-8 px-4'>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify gap-3 mb-3 flex items-center'>
                        <img src={FooterLogo} alt="logo"
                        className='max-w-[50px]'
                        />
                        ShopLink</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, architecto ipsum dolor sit amet consectetur
                    </p>
                </div>

                {/* footer links */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>

                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-2xl text-justify sm:text-left mb-3'>
                            Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                    <a href='#'>Home</a>
                                </li>
                                <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                    <a href='#'>About</a>
                                </li>
                                <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                    <a href='#'>Contact</a>
                                </li>
                                <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                    <a href='#'>Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-2xl text-justify sm:text-left mb-3'>
                            Important Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                        <a href='#'>About</a>
                                    </li>
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                        <a href='#'>Contact</a>
                                    </li>
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                        <a href='#'>Blog</a>
                                    </li>
                            </ul>
                        </div>
                    </div>

                    {/* social links */}
                    <div>
                        <div className='flex items-center gap-3 mt-10'>
                            <a href="#">
                                <FaXTwitter className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaYoutube className='text-3xl'/>
                            </a>
                        </div>

                        <div className='mt-6 space-y-3'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Florida, USA</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <FaMobileAlt/>
                                <p>+ 1 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)
}
