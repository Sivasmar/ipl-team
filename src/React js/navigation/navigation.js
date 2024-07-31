import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomeScreen from "../Screen/Home"
import AboutScreen from "../Screen/About"
import SettingScreen from "../Screen/setting"
import BlogScreen from "../Screen/blogs"

const NavigationStack = () =>{
    return(
        <BrowserRouter>
        
         <Routes>
       <Route path="/" element={<HomeScreen/>}/>
       <Route path="/about" element={<AboutScreen/>}/>
       <Route path="/Setting" element={<SettingScreen/>}/>
       <Route path="/Blog" element={<BlogScreen/>}/>
         </Routes>

        </BrowserRouter>
    )
}

export default NavigationStack;