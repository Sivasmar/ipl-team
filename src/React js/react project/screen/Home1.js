import NavBars1 from "../navbar/nav";
import { useContext, useEffect, useState } from "react";
import "../navbar/react.css"
import "./home2.css"

import { Link, useNavigate } from "react-router-dom";
import { RecipeContext } from "../navagation/navag";
import SearchBar from "./search";






const HomeScreen1=()=>{
   const {recipe,addFavoriteDishHandler,}=useContext(RecipeContext)
   console.log(recipe,"recipeList")
   const navigate=useNavigate()

   const addFoodHandler=(eachFood)=>{
    addFavoriteDishHandler(eachFood)
    }
    
    const goToFavoriteHandler=()=>{
        navigate("favorite")
    }
    
   
   
    
    return(
       <>
       <NavBars1/>
       
       <center className="search"><SearchBar/></center>
        <div className="container">
        {recipe&&recipe.length>0&&
        recipe.map((each)=>{
            return(
                <div className="main1" key={each.id}>
                    {console.log(each.id,"id")}
                <h3> {each.name}</h3>
                <img src={each.image} width={300} height={300}/>
                <p className="style1"><b>Cuisine:</b> {each.cuisine}</p>
                <p className="style1"><b>MealType: </b>{each.mealType}</p>
              
                <h5>Rating: {each.rating}</h5>
                {each.existInFavorite?(
                <button onClick={goToFavoriteHandler} className="btn1">Go to Favorite</button>):(
                <>
                <button onClick={()=>addFoodHandler(each)} className="btn1">Add Favorite</button><br></br>
           
                <Link to={`/recipes/${each.cuisine}/${each.id}`} ><button className="btn2">See more</button></Link>
                </>
            )}
                </div>
            )
        })}
       </div>

       
      
      </>
        )
    }
export default HomeScreen1;