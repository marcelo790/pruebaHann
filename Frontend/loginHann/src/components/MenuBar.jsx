import React from 'react'
import { Link } from 'react-router-dom';

function Menubar() {
  return (
    <>
        <aside id="default-sidebar" className=" top-0 left-0  w-full h-screen h-80 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full py-4 overflow-y-auto bg-white ">
                <Link to="start" className="flex items-center p-2 mt-3 text-white text-sm uppercase font-bold rounded-lg bg-gray-500 hover:cursor-pointer hover:bg-gray-800 transition-colors">
                    <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"/>
                    </svg>  
                    <span className="ms-3 group-hover:text-white dark:hover:bg-white group">Start</span>
                </Link>
                <Link to="stop" className="flex items-center p-2 mt-3 text-white text-sm uppercase font-bold rounded-lg bg-gray-500 hover:cursor-pointer hover:bg-gray-800 transition-colors">
                            <svg className="w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path fillRule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1c0-.6.4-1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
                            </svg>
                            <span className="ms-3 group-hover:text-white dark:hover:bg-white group">Stop</span>
                </Link>
                <Link to="order" className="flex items-center p-2 mt-3 text-white text-sm uppercase font-bold rounded-lg bg-gray-500 hover:cursor-pointer hover:bg-gray-800 transition-colors">
                            <svg className="w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path fillRule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1c0-.6.4-1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
                            </svg>
                            <span className="ms-3 group-hover:text-white dark:hover:bg-white group">Order</span>
                </Link>

            </div>
        </aside>
    </>
  )
}

export default Menubar
