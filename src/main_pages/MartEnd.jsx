import React from 'react'
import { Me_Header } from '../components/martend/Me_Header'
import { UserCard } from '../components/martend/UserCard'
import { Me_Affiliate } from '../components/martend/Me_Affiliate'
import { Me_List } from '../components/martend/Me_List'

export const MartEnd = () => {
  return (
    <>
      <Me_Header />
      <UserCard />
      <Me_Affiliate />
      <Me_List />
    </>
  )
}
