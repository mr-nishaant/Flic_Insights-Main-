import { useState } from 'react'
import Slider from './Slider'
import ProductionHouse from './ProductionHouse'
import GenreMovieList from './GenreMovieList'



function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="">

        <Slider/>

        <ProductionHouse/>

        <GenreMovieList/>
    </div>
  )
}

export default HomePage
