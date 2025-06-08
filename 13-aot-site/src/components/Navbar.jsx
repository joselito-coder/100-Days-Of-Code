import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed z-20 w-full' >
            <ul className='flex items-center  bg-black/20 justify-center gap-20 py-4'>
                <li className='text-2xl group inline-block relative font-bold cursor-pointer p-2 pb-0 mb-2 text-[#d47070]' >
                    Home
                     <span className="absolute left-0 -bottom-2 w-full mx-auto h-1 bg-gray-400/50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
               </li>

                <li className='text-2xl group inline-block relative font-bold cursor-pointer p-2 pb-0 mb-2 text-[#d47070]' >
                    History
                     <span className="absolute left-0 -bottom-2 w-full mx-auto h-1 bg-gray-400/50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
               </li>


                <li className='text-2xl group inline-block relative font-bold cursor-pointer p-2 pb-0 mb-2 text-[#d47070]' >
                    Movie
                     <span className="absolute left-0 -bottom-2 w-full mx-auto h-1 bg-gray-400/50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
               </li>


            </ul>

        </nav>
    )
}

export default Navbar