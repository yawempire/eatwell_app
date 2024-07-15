import React from 'react'

export const CartCard = ({ heading, text, view, img }) => {
    return (
        <>


            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            {/* <p className='text-center pt-2 text-xs'>
                        {heading}
                    </p> */}

                <a href="#">
                    <img className="rounded-lg w-100" src={img} alt="product image" />
                </a>
                <div className="px-4 pb-5 pt-4">
                    <a href="#">
                        <h5 className="text-xs text-center font-semibold tracking-tight text-gray-900">{text}</h5>
                    </a>
                    <p className='text-center text-xs'>
                        {view}
                    </p>
                </div>
            </div>

        </>
    )
}
