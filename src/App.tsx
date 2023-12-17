import {Routes, Route} from "react-router-dom"

import Food from "./scenes/additional/RecipesSearch"
import Header from "./scenes/global/Header"
import Hero from "./scenes/additional/Hero"
import FoodSearch from "./scenes/additional/FoodSearch"
import RecipesSearch from "./scenes/additional/RecipesSearch"
import NutritionSearch from "./scenes/additional/NutritionSearch"


const App = () => {
  
  return (
    <>
      <div className="app">
      <Header/>
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/food" element={<FoodSearch/>}/>
          <Route path="/recipe" element={<RecipesSearch/>}/>
          <Route path="/nutrition" element={<NutritionSearch/>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App