import React, { useEffect, useState } from 'react'
import lightBtn from '../../assets/light-mode-button.png'
import darkBtn from '../../assets/dark-mode-button.png'

export const DarkMode = () => {

const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
);

const element = document.documentElement;

useEffect(() => {
    if (theme == 'dark') {
        element.classList.add('dark');
    } else {
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}, [theme]);

return (
    <div className='relative'>
        <img src={lightBtn} alt="lightmode"
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        className={`cursor-pointer w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme == 'dark' ? 'opacity-0' : 'opacity-100'}`}
        />

        <img src={darkBtn} alt="darkmode"
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        className={`cursor-pointer w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme == 'light' ? 'opacity-0' : 'opacity-100'} `}
        />
    </div>
)
}
