import React from 'react'
import { StickyNavBar } from '../components/StickyNavBar'
import { MessengerHeader } from '../components/MessengerHeader'

import ElipseIcon from "../assets/svg/Elipse.svg"
import TrashIcon from "../assets/svg/Trash.svg"
import { MessengerSubHeader } from '../components/MessengerSubHeader'
import { SearchBar } from '../components/SearchBar'

export const Messenger = () => {
  return (
    <>
      <MessengerHeader icon={TrashIcon} secondIcon={ElipseIcon}/>
      <MessengerSubHeader />
      <SearchBar padding={"mt-3"}/>
    </>
  )
}
