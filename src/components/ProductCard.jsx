import React from 'react'
import { Card } from './Card'

//Images
import Pork from "../assets/images/img2.jpeg"
import Vegetables from "../assets/images/img3.jpeg"
import Beef from "../assets/images/img1.jpeg"


const ProductCard = () => {

    const rankingItems = [
        {img: Pork,  heading: "Most Popular", text: "Fresh Pork", view: "24.6k+ views", key: "1"},
        {img: Vegetables,  heading: "Hot Selling", text: "Vegetables", view: "74.3k+ views", key: "2"},
        {img: Beef,  heading: "All time sell", text: "Fresh Beef", view: "134.8k+ views", key: ""},
    ]


  return (
    <>
        <div className="w-full py-3 my-2">
            <h4 className='mt-1 ml-3'>Top Ranking</h4>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 px-2">
           {rankingItems.map(r_item => (
            <Card heading={r_item.heading} text={r_item.text} img={r_item.img} view={r_item.view} key={r_item.key}/>
           ))}
        </div>

    </>
  )
}

export default ProductCard