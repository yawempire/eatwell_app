import React from 'react'

export const MessengerHeader = ({ secondIcon, icon }) => {
  return (
   <>
    <div class="grid grid-cols-2 md:grid-cols-2 gap-4 mt-5 items-center justify-center fixed w-full z-20 top-0 start-0 ">
      
        <div className='flex gap-5 mx-3'>
            <h3 className='text-center'>Messenger</h3>
            <div>
       <img className='w-6' src={icon} alt="" />
       </div>
        </div>
        <div>
            <img src={secondIcon} alt="" className="w-8 ml-20" />
        </div>
    </div>
   </>
  )
}
