import React from 'react'

export const SecondCard = ({ heading, text, view, img }) => {
    return (
        <>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <p className='text-center pt-2 text-xs'>
                        {heading}
                    </p>

                <a href="#">
                    <img className="rounded-3xl pt-3 p-2" src={img} alt="product image" />
                </a>
                <div className="px-4 pb-5 mx-auto">
                    <a href="#">
                        <h5 className="text-xs text-center font-semibold tracking-tight text-gray-900">{text}</h5>
                    </a>
                    
                    {/* <p className='text-center text-xs'>
                        {view}
                    </p> */}
                    <div className="flex items-center justify-center">
                    <button className='btn bg-red-700 px-4 py-0.4 rounded-lg text-white m-2 ml-3' type="button">View</button>
                    </div>
                </div>
            </div>

        </>
    )
}
