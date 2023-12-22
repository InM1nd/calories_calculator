import {Routes, Route, useLocation} from "react-router-dom"
import { useEffect } from 'react';


// import Header from "./scenes/global/Header"
import Hero from "./scenes/additional/Hero"
import FoodSearch from "./scenes/additional/FoodSearch/ProductSearch"
import RecipeSearch from "./scenes/additional/RecipeSearch"
import NutritionSearch from "./scenes/additional/NutritionSearch"
import SharedLayout from "./utils/SharedLayout"



const App = () => {
  const location = useLocation();

  useEffect(() => {
    require('preline/preline');
  }, []);

  useEffect(() => {
    // @ts-ignore
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/calories_calculator" element={<SharedLayout/>}>
          <Route index element={<Hero/>}/>
          <Route path="/calories_calculator/FoodSearch" element={<FoodSearch/>}/>
          <Route path="/calories_calculator/RecipeSearch" element={<RecipeSearch/>}/>
          <Route path="/calories_calculator/NutritionSearch" element={<NutritionSearch/>}/>
          <Route path="*" element={<Hero/>}/>
        </Route>
      </Routes> 
    </>
  )
}

export default App