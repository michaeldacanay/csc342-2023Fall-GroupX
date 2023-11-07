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
                                <a className="flex items-center text-2xl" href="#">
                                    Hello Big Boy!
                                </a>
                            </li>
                        </ul>
                        <img
                                class="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                                alt="Image placeholder"
                                src="https://source.unsplash.com/random"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;