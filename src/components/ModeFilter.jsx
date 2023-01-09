import React from 'react';
import { useState, useEffect } from 'react';

const ModeFilter = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    );

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    console.log(darkQuery, "darkQuery");

    const element = document.documentElement

    function onWindowMatch(){
        if(localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && darkQuery.matches)
        ) {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    }

    onWindowMatch();

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            break;

            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            break;

            default:
                localStorage.removeItem('theme');
                break;
        }
    }, [theme, element.classList]);
    


    darkQuery.addEventListener('change', (e) => {
        if(!('theme' in localStorage)) {
            if(e.matches) {
                element.classList.add('dark');
            } else {
                element.classList.remove('dark');
            }
        }
    })

    const options = [
        {
            icon: "sunny",
            text: 'light',
        },
        {
            icon: "moon",
            text: 'dark',
        },
        {
            icon: "desktop-outline",
            text: 'system',
        },
    ]


  return (
    <div className='cursor-pointer dark:text-black text-white duration-150 dark:bg-gradient-to-r dark:from-yellow
    dark:to-red bg-gradient-to-r from-violet
    to-teal rounded-lg'>
        {
            options?.map(opt=> (
                <button 
                key={opt.text} 
                onClick={() => setTheme(opt.text)}
                className={`w-8 h-8 leading-9 text-xl rounded-full m-1 
                ${theme === opt.text && 'dark:text-red bg-white text-blue z-0 dark:bg-black'}`}>
                    <ion-icon className='z-0' name={opt.icon}></ion-icon>
                </button>
            ))
        }
    </div>
  )
}

export default ModeFilter;