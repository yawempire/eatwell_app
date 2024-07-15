import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';

export const BottomNavigation = () => {


    const [selectedKey, setSelectedKey] = useState(null);

    const handleItemClick = (key) => {
        setSelectedKey(key);
        // Update the URL with the selected key
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('selectedKey', key);
        window.history.pushState({}, '', newUrl.toString());
    };

    const urlParams = new URLSearchParams(location.search);
    const initialSelectedKey = urlParams.get('selectedKey');
    React.useEffect(() => {
      setSelectedKey(initialSelectedKey ? parseInt(initialSelectedKey) : null);
    }, [location]);

    

    const navItems = [
        {
            link: "/", linkName: "Home", linkIcon: <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 svg-down ">
                    <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
                </svg>

            </>, key: "home"
        },
        {
            link: "/eatwell", linkName: "Eatwell", linkIcon: <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor svg-down" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </>, key: "eatwell"
        },
        {
            link: "/messenger", linkName: "Messenger", linkIcon: <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 svg-down">
                    <path fillRule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 0 1-.522 1.756.75.75 0 0 0 .584 1.143 5.976 5.976 0 0 0 3.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                </svg>

            </>, key: "messenger"
        },
        {
            link: "/cart", linkName: "Cart", linkIcon: <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 svg-down">
                    <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>

            </>, key: "cart"
        },
        {
            link: "/martend", linkName: "MartEnd", linkIcon: <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 svg-down">
                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>

            </>, key: "martend"
        }
    ];

    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    {navItems.map((item, index) => (
                        <a href={item.link} 
                        key={index}
                        onClick={() => handleItemClick(index)}
                        className={`inline-flex flex-col items-center justify-center px-5 group ${
                          selectedKey === index ? "active" : ""
                        }`}
                         >
                            {item.linkIcon}
                            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-red-600 mt-1">{item.linkName}</span>
                        </a>
                    ))}
                </div>
            </div>

        </>
    )
}