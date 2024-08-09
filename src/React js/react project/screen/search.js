import { useContext, useState } from "react"

import axios from "axios";
import { RecipeContext } from "../navagation/navag";

const SearchBar=()=>{
    const {setSearchQuery,fetchRecipes}=useContext(RecipeContext);
    const [query,setQuery]=useState("");
      
    const searchHandler=(e)=>{
       setQuery(e.target.value);
       setSearchQuery(e.target.value);
       fetchRecipes(e.target.value)
       searchProducts(e.target.value)
       
    }
    const searchProducts=async(searchInput)=>{
        const response=await axios.get(`https://dummyjson.com/recipes/search?q=${searchInput}`)
        console.log(response)
    }
    return(
        <input
        type="text"
        value={query}
        placeholder="Search recipes..."
        onChange={searchHandler}/>
    )
}
export default SearchBar;