import {Routes, Route} from "react-router-dom"

// import Header from "./scenes/global/Header"
import Hero from "./scenes/additional/Hero"
import FoodSearch from "./scenes/additional/FoodSearch"
import RecipeSearch from "./scenes/additional/RecipeSearch"
import NutritionSearch from "./scenes/additional/NutritionSearch"
import SharedLayout from "./utils/SharedLayout"



const App = () => {
  
  return (

      <Routes>
        <Route path="/calories_calculator" element={<SharedLayout/>}>
          <Route index element={<Hero/>}/>
          <Route path="/calories_calculator/FoodSearch" element={<FoodSearch/>}/>
          <Route path="/calories_calculator/RecipeSearch" element={<RecipeSearch/>}/>
          <Route path="/calories_calculator/NutritionSearch" element={<NutritionSearch/>}/>
          <Route path="*" element={<Hero/>}/>
        </Route>
      </Routes> 
    
  )
}

export default App