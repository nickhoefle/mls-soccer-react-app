import React from 'react'

const PageTitle = () => {
    return (
        <div className='mb-6'>
            <div className='flex justify-center'>
                <div 
                    id='page-links-wrapper'    
                >
                    <a 
                        className='text-white text-lg m-0 hover:underline'
                        href='/playercomp'
                    >
                        Player Comparison
                    </a>
                    <a 
                        className='text-white text-lg m-0 hover:underline'
                        href='/playeranalysis'
                    >
                        Player Analysis
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