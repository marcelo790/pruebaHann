import React from 'react';

const Header = () => {
  return (
    <header className='px-4 py-5 bg-white border-b'>
        <div className='md:flex md:justify-between'>
            <h2 className='text-4xl text-gray-600 font-black text-center'>
                Transporter
            </h2>
            <div className='flex items-center gap-4'>
                <button
                className='text-white text-sm bg-gray-600 p-3 rounded-md uppercase font-bold'
                type='button'>
                    Logout
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header