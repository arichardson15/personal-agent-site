import React, {forwardRef, useEffect, useRef, useState} from 'react';
import NavBarButton from "./NavBarButton";
import axios from "axios";

interface HeaderBannerProps {
    user: object;
}

const HeaderBanner = forwardRef<HTMLDivElement, HeaderBannerProps>((props, ref) => {
    let {
        user
    } = props;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSignOut = () => {
        setIsDropdownOpen(false);
        axios.post('/logOut')
            .then(response => {
                window.location.href = '/';
            })
            .catch(error => {
            });
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
                <header>
                    <nav className="relative px-4 lg:px-6 py-9">
                          <span
                              style={{
                                  content: '""',
                                  position: 'absolute',
                                  top: '0', // Adjust position as needed
                                  left: '0', // Position it on the left side
                                  width: '280px', // Adjust this percentage as needed
                                  height: '182px', // Adjust height as needed
                                  backgroundColor: '#203128',
                                  borderTopRightRadius: '1000px', // Apply rounding to the right corners
                                  borderBottomRightRadius: '1000px',
                                  zIndex: 0, // Ensure it does not cover the nav content
                              }}
                          />
                        <a href="/"
                           className="absolute mt-5 ml-5 top-0 left-0 z-20">
                            <img
                                src="/images/Heritage_Logo_White_2022.png"
                                className="mr-3 h-6 lg:h-36 pl-24"
                                alt="Heritage Logo"
                            />
                        </a>
                        <div
                            className="flex flex-wrap lg:h-28 justify-between items-center mx-auto max-w-screen-xl relative z-10">
                            <a href="/" className="flex items-center">

                                <span
                                    className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                            </a>
                            <div  ref={dropdownRef} className="flex items-center lg:order-2">
                                {user && user.first_name ? (
                                    <div>
                                    <a
                                        href="#"
                                        onClick={handleDropdownToggle}
                                        className="block py-2 font-grotesk text-2xl pr-4 pl-3 text-white rounded
                    bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black
                    dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    >
                                        Hello, {user.first_name}
                                        {isDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-10">
                                                <a
                                                    onClick={handleSignOut}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Sign out
                                                </a>
                                                {user.role === 'admin' && (
                                                    <a
                                                        href={'/manager'}
                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Manager
                                                    </a>

                                                )
                                                }
                                            </div>
                                        )}
                                    </a>
                                    </div>
                                ) : (
                                    <a
                                        href="/login"
                                        className="block py-2 font-grotesk text-2xl pr-4 pl-3 text-white rounded
                    bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black
                    dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    >
                                        Log in
                                    </a>
                                )}

                            </div>
                            <div
                                 className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                                 id="mobile-menu-2">
                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0 size-max text-2xl">
                                    <NavBarButton text={'About'} url={'/about'}></NavBarButton>
                                    <NavBarButton text={'Buy'} url={'/buy'}></NavBarButton>
                                    <NavBarButton text={'Sell'} url={'/sell'}></NavBarButton>
                                    <NavBarButton text={'Contact us'} url={'/contact'}></NavBarButton>
                                    <NavBarButton text={'Testimonials'} url={'testimonials'}></NavBarButton>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
        </div>
    );
});
export default HeaderBanner;
