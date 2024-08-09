import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomeScreen from "../Screen/Home"
import AboutScreen from "../Screen/About"
import LocationScreen from "../Screen/location"
import BlogScreen from "../Screen/blogs"
import FavouriteScreen from "../Screen/favr"
import RecipeScreen1 from "../Screen/recip"

const NavigationStack = () =>{
    return(
        <BrowserRouter>
        
         <Routes>
       <Route path="/" element={<HomeScreen/>}/>
       <Route path="/about" element={<AboutScreen/>}/>
       <Route path="/location" element={<LocationScreen/>}/>
       <Route path="/Blog" element={<BlogScreen/>}/>
       <Route path="/recipes" element={<RecipeScreen1/>}/>
       
       <Route path="/favouriteRecipe" element={<FavouriteScreen/>}/>
         </Routes>

        </BrowserRouter>
    )
}

export default NavigationStack; 