import Image from 'next/image';
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 items-center p-5 shadow-md bg-white">
            {/* left side  */}
            <div className="relative h-10">
                <Image className="cursor-pointer" src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>

            </div>
            {/* middle side  */}
            <div className="w-full flex items-center rounded-full pl-5 py-2 md:border-2 shadow-sm">
                <input className="outline-none flex-grow text-gray-600 placeholder-gray-400 text-sm" type="text" placeholder="Start your Search" />
                <SearchIcon className="hidden md:inline-flex h-8 w-8  p-2 md:mx-2 bg-red-500 text-white rounded-full cursor-pointer" />

            </div>
            {/* right side  */}
            <div className="flex items-center justify-end text-gray-500 space-x-4 ">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>

            </div>
        </header>
    )
}

export default Header
