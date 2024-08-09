
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen1 from "../screen/Home1";
import BlogScreen1 from "../screen/Blog1";
import RecipesScreen1 from "../screen/ricipes1"; 
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const RecipeContext = createContext();

const NavigationStacks1 = () => {
    const [recipe, setRecipes] = useState([]);
    const [favoriteDish, setFavoriteDish] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    useEffect(() => {
        const results = recipe.filter(recipes =>
            recipes.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRecipes(results);
    }, [searchQuery, recipe]);

    const fetchRecipes = async (searchInput = "") => {
        try {
            const { data, status } = await axios.get(`https://dummyjson.com/recipes/search?q=${searchInput}`);
            const newData = data.recipes.map((EachData) => ({
                ...EachData,
                existInFavorite: false
            }));
            if (status === 200) {
                setRecipes(newData);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const addFavoriteDishHandler = (newDish) => {
        const recipeExists = favoriteDish.some(eachFood => eachFood.id === newDish.id);
        const newRecipesList = recipe.map((eachRecipes) => 
            eachRecipes.id === newDish.id ? { ...eachRecipes, existInFavorite: true } : eachRecipes
        );
        setRecipes(newRecipesList);
        
        if (!recipeExists) {
            setFavoriteDish([...favoriteDish, newDish]);
            toast.success("Added to favorites..", {
                position: "top-right"
            });
        } else {
            toast.error("Already exists in favorite food..", {
                position: "top-right"
            });
        }
    };

    const removeFromFavorite = (id) => {
        const newFavoriteList = favoriteDish.filter(eachDish => eachDish.id !== id);
        const newRecipesList = recipe.map((eachRecipes) => 
            eachRecipes.id === id ? { ...eachRecipes, existInFavorite: false } : eachRecipes
        );
        setRecipes(newRecipesList);
        setFavoriteDish(newFavoriteList);

        if (favoriteDish.length > newFavoriteList.length) {
            toast.error("Removed from favorites.");
        } else {
            toast.error("Failed to remove from favorites.");
        }
    };

    return (
        <RecipeContext.Provider value={{
            recipe,
            favoriteDish,
            addFavoriteDishHandler,
            removeFromFavorite,
            setSearchQuery,
            fetchRecipes
        }}>
            <BrowserRouter>
            <ToastContainer />
                <Routes>
                    <Route path="/" element={<HomeScreen1 />} />
                    <Route path="/favorite" element={<BlogScreen1 />} />
                    <Route path="recipes/:cuisine/:recipesId" element={<RecipesScreen1 />} />
                </Routes>
            </BrowserRouter>
        </RecipeContext.Provider>
    );
};

export default NavigationStacks1;
