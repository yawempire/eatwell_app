import React from 'react'
import { SecondCard } from './SecondCard'

//Images
import Onion from "../assets/images/img12.jpg"
import Carrot from "../assets/images/img5.jpeg"
import Shallot from "../assets/images/img4.jpeg"
import { CartCard } from './CartCard'

const CartCardContainer = () => {

    const rankingItems = [
        {img: Onion, heading: "Hajia Super Mart", text: "Onions", view: "seller price", key: "1"},
        {img: Carrot, heading: "C. Conny ENT", text: "Juicy carrots", view: "seller price", key: "2"},
        {img: Shallot, heading: "Jane & Seth ENT", text: "Shallots", view: "seller price", key: "3"},
    ]


  return (
    <>
        <div className="w-full py-3 my-2">
            <h4 className='mt-1 ml-3'>New Arrivals</h4>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 px-2 mb-20">
           {rankingItems.map(r_item => (
            <CartCard heading={r_item.heading} text={r_item.text} img={r_item.img} view={r_item.view} key={r_item.key}/>
           ))}
        </div>

    </>
  )
}

export default CartCardContainer