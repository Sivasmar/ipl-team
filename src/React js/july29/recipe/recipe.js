import { useEffect, useState } from "react";
import axios from 'axios'
import Orderlist from "../list1/list1";


const RecipeListj=()=>{
    const [loader,setLoader]=useState(true)

    const [recipe,setRecipe]=useState([])

    useEffect(()=>{
        fetchHandler();

    },[])

    const fetchHandler=async()=>{
        const {status,data}=await axios.get("https://dummyjson.com/recipes")
        try{
            if(status===200)
                {
                    setRecipe(data.recipes)
                    setLoader(false)
                }
        }
        catch(err){
            
        }
    }
    const addHandler=(targetItem)=>{
        const newState=[...recipe , targetItem]
        setRecipe(newState)
    }

    const deleteHandler=(targetId)=>{
        const newState=recipe.filter(each=>each.id!==targetId)
        setRecipe(newState)
    }

    const deleteAll=()=>{
        const newState=[]
        setRecipe(newState)
    }
    return(
        <>
        {
            loader?
            <>
            <h2>Please Wait...</h2>
            {/* <button onClick={fetchHandler}>Fetch</button> */}
            </>:
            <>
            <table className="table table-striped">
                        <thead>
                            <tr>
                                <th colSpan={8}><button onClick={deleteAll}>Delete-list</button></th>
                            </tr>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Recipe Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Cuisine</th>
                                <th scope="col">Ingredients</th>
                                <th scope="col">Instructions</th>
                                <th scope="col">Add item</th>
                                <th scope="col">Delete item</th>
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
                                                <td><button onClick={()=>addHandler(each)}>Add</button></td>
                                                <td><button onClick={()=>deleteHandler(each.id)}>Delete</button></td>
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
export default RecipeListj;