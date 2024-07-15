import React from 'react'

export const CartHeader = ({ secondIcon, icon }) => {
    return (
        <>
            <div class="grid grid-cols-2 md:grid-cols-2 gap-5 mx-2 p-5 items-center bg-white justify-center fixed w-full z-20 top-0 start-0 ">

                <div className='flex gap-5 mx-3'>
                    <h3 className='text-center'>Shopping Cart</h3>
                </div>
                <div>
                    <button className='btn bg-blue-600 px-4 py-0.4 rounded-lg text-white m-2 ml-3' type="button">Ship to</button>
                    {/* <img src={secondIcon} alt="" className="w-8 ml-20" /> */}
                </div>
            </div>
        </>
    )
}
