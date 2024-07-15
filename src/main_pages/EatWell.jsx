import React from 'react'
import { StickyNavBar } from '../components/StickyNavBar'

import BellIcon from "../assets/svg/Bell.svg"
import ElipseIcon from "../assets/svg/Elipse.svg"
import { Skeleton } from '../components/Skeleton'


export const EatWell = () => {
  return (
    <>
      <div className="">
        <StickyNavBar icon={BellIcon} secondIcon={ElipseIcon} heading={"EatWell"} />
       <div className="h-90 mt-20">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
       </div>
      </div>
    </>
  )
}
