import React from 'react'
import { CartHeader } from '../components/CartHeader'
import { CartEmptyInfo } from '../components/CartEmptyInfo'
import CartCardContainer from '../components/CartCardContainer'
import CartCardFirst from '../components/CartCardFirst'


export const Cart = () => {
  return (
   <>
    <CartHeader />
    <CartEmptyInfo />
    <CartCardFirst />
    <CartCardContainer />
   </>
  )
}
