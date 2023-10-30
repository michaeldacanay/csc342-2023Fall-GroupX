import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="h-20 mx-auto block w-full rounded-xl border border-white/80 bg-white bg-opacity-80 py-5 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-5">
                <div>
                    <div className=" container mx-auto flex items-center justify-between text-gray-900">
                        <a
                            href="#"
                            className=" transition ease-in-out hover:scale-125 mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                        >
                            <span className='text-2xl'>TimeStamp</span>
                        </a>
                        <ul className="hidden items-center gap-6 lg:flex">
                            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                <a className="flex items-center text-xl" href="#">
                                    Hello Big Boy!
                                </a>
                            </li>
                        </ul>
                        <button
                            className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            type="button"
                            data-ripple-light="true"
                        >
                            <span>I am an icon</span>
                        </button>
                    </div>
                    <div
                        className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
                        data-collapse="navbar"
                    >
                        <div className="container mx-auto pb-2">
                            <ul className="mt-2 mb-4 flex flex-col gap-2">
                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                    <a className="flex items-center" href="#">
                                        Pages
                                    </a>
                                </li>
                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                    <a className="flex items-center" href="#">
                                        Account
                                    </a>
                                </li>
                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                    <a className="flex items-center" href="#">
                                        Blocks
                                    </a>
                                </li>
                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                    <a className="flex items-center" href="#">
                                        Docs
                                    </a>
                                </li>
                            </ul>
                            <button
                                className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                <span>Buy Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
