import React from 'react'
import { HomeTab } from '../components/HomeTab'
import { SearchBar } from '../components/SearchBar'
import { HorizontalScroll } from '../components/HorizontalScroll'
import ProductCard from '../components/ProductCard'
import SecondProductCard from '../components/SecondProductCard'

export const HomePage = () => {

  // const headers = ["Top Ranking", {
  //   text: "New Arrivals",
  //   content: "100+ Products added recently"
  // }]

  return (
    <>
      <div className="overflow-auto pb-10">
        <HomeTab />
        <SearchBar padding={"mt-10"}/>
        <HorizontalScroll />
        <div className="overflow-y-auto h-100">
          <ProductCard />
          <SecondProductCard />
        </div>
      </div>
    </>
  )
}

