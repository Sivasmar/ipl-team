import { useEffect, useState } from "react"
import axios from "axios";
import Orderlist from "../Hooks/list";

const Recipe=()=>{
    const [loader,setLoader]=useState(true);

    const [recipe,setRecipe]=useState([])

    useEffect(()=>{
        fetchRecipe();

    },[])

    const fetchRecipe=async()=>{
        try{
            const {status,data}=await axios.get("https://dummyjson.com/recipes")
        if(status===200){
            console.log(data.recipes);
            setRecipe(data.recipes)
            setLoader(false)
        }
        }
        catch(err){

        }
    }
    return(
        <>
        {
            loader?
            <>
            <h2>Please Wait...!!</h2>
            </>:
            <>
            <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Recipe Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Cuisine</th>
                                <th scope="col">Ingredients</th>
                                <th scope="col">Instructions</th>
                                <th scope="col">Rating</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipe.map((each) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{each.id}</th>
                                                <td>{each.name}</td>
                                                <td><img src={each.image} width={100} height={100} alt=""/></td>
                                                <td>{each.cuisine}</td>
                                                <td><Orderlist list={each.ingredients}/></td>
                                                <td><Orderlist list={each.instructions}/></td>
                                                <td>{each.rating}</td>
                                            </tr>
                                        </>
                                    );
                                })
                            }
                        </tbody>
                    </table>
            </>
        }
        </>
    )
}
export default Recipe