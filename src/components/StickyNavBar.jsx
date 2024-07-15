import React from 'react'

export const StickyNavBar = ({ icon, heading, secondIcon }) => {
  return (
   <>
    <div class="grid grid-cols-3 md:grid-cols-3 gap-4 mt-5 items-center justify-center fixed w-full z-20 top-0 start-0 ">
       <div>
       <img className='w-8 ml-3 px-1' src={icon} alt="" />
       </div>
        <div>
            <h3 className='text-center'>{heading}</h3>
        </div>
        <div>
            <img src={secondIcon} alt="" className="w-8 ml-12" />
        </div>
    </div>
   </>
  )
}
