import React from 'react'

const PageTitle = () => {
    return (
        <div className='mb-6'>
            <div className='flex justify-center'>
                <div id='page-links-wrapper'>
                    <a 
                        className='text-white text-xl mr-0 hover:underline'
                        href='/'
                    >
                        Home
                    </a>
                    <p className='text-white text-xl px-2'>•</p>
                    <a 
                        className='text-white text-xl m-0 hover:underline'
                        href='/playercomp'
                    >
                        Player Comparison
                    </a>
                </div>
            </div>
            <div className="flex justify-center">
                <a 
                    className="text-white text-center text-5xl"
                    href='/'
                >
                    MLStats by Nick
                </a>
            </div>  
        </div>
    )
}

export default PageTitle