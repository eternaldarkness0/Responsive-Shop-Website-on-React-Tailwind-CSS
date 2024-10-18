import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'
import { Products } from './components/Products/Products'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BestProducts } from './components/BestProducts/BestProducts'
import { Banner } from './components/Banner/Banner'
import { Notification } from './components/Notification/Notification'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Footer } from './components/Footer/Footer'
import { OrderBtn } from './components/OrderBtn/OrderBtn'

export const App = () => {

const [orderBtn, setOrderBtn] = useState(false);

const handleOrderBtn = () => {
    setOrderBtn(!orderBtn);
};

useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
        delay: 100,
    });
    AOS.refresh();
}, []);

return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOrderBtn={handleOrderBtn}/>
        <Main handleOrderBtn={handleOrderBtn}/>
        <Products />
        <BestProducts handleOrderBtn={handleOrderBtn}/>
        <Banner />
        <Notification />
        <Testimonials />
        <Footer />
        <OrderBtn orderBtn={orderBtn} setOrderBtn={setOrderBtn}/>
    </div>
)
}
