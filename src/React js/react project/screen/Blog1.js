import { useContext } from "react";

import NavBars1 from "../navbar/nav";


import { RecipeContext } from "../navagation/navag";

const BlogScreen1=()=>{
    const {recipe, favoriteDish, removeFromFavorite,
        addFavoriteDishHandler}=useContext(RecipeContext)
    
    console.log("favorites",favoriteDish)
    const removeHandler=(eachFood)=>{removeFromFavorite(eachFood.id)

    }
   
    return(
        <>
           <NavBars1/>
       
        {
            favoriteDish.length>0?
            <div className="container">
            {favoriteDish.map(each=>{
                return(
                    <div className="main1">
                    <h3>{each.name}</h3>
                    <img src={each.image} width={200} height={200}/>
                    <p>MealType: {each.mealType}</p>
                    <p>Rating: {each.rating}</p>
                    <button onClick={()=>removeHandler(each)} className="btn1">Remove</button>
                    </div>
                )
            })}
            </div>:
            <h3>No Dish yet now.. you need select the favorite dish..</h3>
        }
        
        </>
    )
}
export default BlogScreen1;
