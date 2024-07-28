import axios from "axios";
import { Component } from "react";
import { Image } from "../image/image";
import { Heading3 } from "../heading/heading";
import Customlist from "../list/list";
import "bootstrap/dist/css/bootstrap.min.css";



class RecipeList extends Component {
  state = {
    recipeList: [],
    loader: true,
    error: false,
  };
  fetchRecipe = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      // console.log(response)
      if (status === 200) {
        this.setState({
          recipeList: data.recipes,
          loader:false
        });
      }
    } catch (err) {
      this.setState({
        error: true,
        loader:false
      });
    }
  };
  componentDidMount() {
    this.fetchRecipe();
  }
  render() {
    return (
      <>
        <h1>RecipeList</h1>
        {
            this.state.loader?(
                <h2>please wait</h2>
            ):
            <div>
                {
                    this.state.recipeList.map(eachRecipe=>{
                        const {name,image,id,ingredients,instructions}=eachRecipe;
                        return(
                            <div key={id}>
                            <h3>{name}</h3>
                            <Image source={image} width={100} height={100}/>
                            <Heading3 title={`Ingredients required for dish ${name}`}/>
                            <Customlist iterable={ingredients}/>
                            <Heading3 title={`Instructions required for dish ${name}`}/>
                            <Customlist iterable={instructions}/>
                            {/* 2nd way to iterate the list
                             <ol>
                                {
                                    instructions.map((eachInstruction,index)=>{
                                       return <li key={index}>{instructions}</li>
                                    })
                                }
                            </ol> */}
                          
                            </div>
                        )
                    })
                }
                
            </div>
        }
      </>
    );
  }
}
export default RecipeList;