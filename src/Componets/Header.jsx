import React, { useState } from 'react';
import logo from './../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(false);
    const [showSearch, setShowSearch] = useState(false);  
    const [searchQuery, setSearchQuery] = useState('');  
    const navigate = useNavigate();  

    const menu = [
        {
            name: 'HOME',
            icon: HiHome,
            nav: '/'
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass,
            nav: '' 
        },
        {
            name: 'ORIGINALS',
            icon: HiStar,
            nav: '/originals'
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle,
            nav: '/movies'
        },
        {
            name: 'SERIES',
            icon: HiTv,
            nav: '/series'
        }
    ];

    // Function to handle search submit
    const handleSearchSubmit = (e) => {
        if ((e.key === 'Enter' || e.type === 'click') && searchQuery.trim() !== '') {
            navigate(`/search/${searchQuery}`);  
            setShowSearch(false);  
        }
    };

    // Function to handle menu navigation
    const handleNavigation = (nav) => {
        if (nav) {
            navigate(nav); 
        }
    };

    return (
        <div className='relative flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center md:px-12'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' />

                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        item.name === 'SEARCH' ? (
                            <div key={item.name} className="relative">
                                <div onClick={() => setShowSearch(!showSearch)}>
                                    <HeaderItem name={item.name} Icon={item.icon} />
                                </div>

                                {/* Search Input Field Positioned Below the Search Icon */}
                                {showSearch && (
                                    <div className="md:absolute md:left-0 md:top-10 flex items-center bg-gray-800 p-1 rounded-md w-[200px] md:w-[300px]">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onKeyDown={handleSearchSubmit}
                                            className="bg-transparent text-white outline-none flex-grow"
                                        />
                                        <button onClick={handleSearchSubmit} className="text-white">
                                            <HiMagnifyingGlass size={10} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div key={item.name} onClick={() => handleNavigation(item.nav)}>
                                <HeaderItem name={item.name} Icon={item.icon} />
                            </div>
                        )
                    ))}
                </div>

                {/* Mobile View */}
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        item.name === 'SEARCH' ? (
                            <div key={item.name} className="relative">
                                <div onClick={() => setShowSearch(!showSearch)}>
                                    <HeaderItem name={''} Icon={item.icon} />
                                </div>

                                {/* Search Input Field for Mobile Positioned Below the Search Icon */}
                                {showSearch && (
                                    <div className="absolute left-0 top-10 flex items-center bg-gray-800 p-1 rounded-md w-[180px]">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onKeyDown={handleSearchSubmit}
                                            className="bg-transparent text-white outline-none flex-grow"
                                        />
                                        <button onClick={handleSearchSubmit} className="text-white absolute right-0">
                                            <HiMagnifyingGlass size={8} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div key={item.name} onClick={() => handleNavigation(item.nav)}>
                                <HeaderItem name={''} Icon={item.icon} />
                            </div>
                        )
                    ))}

                    {/* Dropdown Menu for Remaining Items */}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle && (
                            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                                {menu.map((item, index) => index > 2 && (
                                    <div key={item.name} onClick={() => handleNavigation(item.nav)}>
                                        <HeaderItem name={item.name} Icon={item.icon} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[40px] rounded-full'
            />
        </div>
    );
}

export default Header;
